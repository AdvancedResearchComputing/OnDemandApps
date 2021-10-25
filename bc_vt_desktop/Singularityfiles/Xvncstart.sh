#!/bin/bash
# shellcheck disable=SC2046

while getopts "d:" option; do
    case ${option} in
    d )
    DISPLAYNAME="${OPTARG// /_}"
    ;;
    \? )
    echo "usage: Xvnctart.sh [-d displayname]"
    exit
    ;;
    esac
done

exec 6<> /TMPDIR/.Xdisplaynum

Xvnc -nolisten tcp \
     -rfbunixpath=/TMPDIR/.vncsocket \
     -auth /TMPDIR/.Xauthority \
     -rfbauth /TMPDIR/.vncpasswd \
     -displayfd 6 \
     $([[ -v DISPLAYNAME ]] && printf -- "-desktop %s" "$DISPLAYNAME")
