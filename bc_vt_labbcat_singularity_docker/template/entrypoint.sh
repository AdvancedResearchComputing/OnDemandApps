#!/bin/bash
#VERY simple version:
# 1. Check for initialization and if not, do it
# 2. Start mysqld

echo "[Entrypoint] MySQL"
# Fetch value from server config
# We use mysqld --verbose --help instead of my_print_defaults because the
# latter only show values present in config files, and not server defaults
_get_config() {
	local conf="$1"; shift
	"$@" --verbose --help 2>/dev/null | grep "^$conf" | awk '$1 == "'"$conf"'" { print $2; exit }'
}

#set socket
echo "Using socket: $MYSQL_UNIX_PORT"

# Check for initialization
unset SET_ROOT_PASSWORD
DATADIR="$(_get_config 'datadir' "$@")"
echo "[Entrypoint] DATADIR is $DATADIR"
if [ ! -d "$DATADIR/mysql" ]; then
  echo "[Entrypoint] DATADIR/mysql does not exist. Initializing mysqld..."
  mysql_install_db --user=$USER --datadir=$DATADIR --rpm --keep-my-cnf
  echo "[Entrypoint] Initialization complete."
  
  #set flag to set root password
  SET_ROOT_PASSWORD=1
fi

echo "[Entrypoint] Starting MySQL"
mysqld \
  --socket=$MYSQL_UNIX_PORT \
  --default-time-zone="+00:00" \
  &

if [ ! -z $SET_ROOT_PASSWORD ]; then
  sleep 10 #make sure mysqld has time to start

  echo "[Entrypoint] Adding root password ($MYSQL_ROOT_PASSWORD)..."
  mysqladmin -u root password "$MYSQL_ROOT_PASSWORD"
  echo "[Entrypoint] Root password added."
fi

#create labb-cat user and database
sleep 2
echo "[Entrypoint] Adding labbcat database and user (password: $MYSQL_PASSWORD)..."
#create database
mysql -u root --password=$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS labbcat CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
#create labbcat user for network connections
mysql -u root --password=$MYSQL_ROOT_PASSWORD -e "CREATE USER 'labbcat'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}'; GRANT ALL PRIVILEGES ON labbcat.* TO 'labbcat'@'%';"
#create labbcat user for socket connections
mysql -u root --password=$MYSQL_ROOT_PASSWORD -e "CREATE USER 'labbcat'@'localhost' IDENTIFIED BY '${MYSQL_PASSWORD}'; GRANT ALL PRIVILEGES ON labbcat.* TO 'labbcat'@'localhost';"
echo "[Entrypoint] labbcat database and user added."
