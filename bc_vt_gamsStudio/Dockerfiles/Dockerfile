FROM accetto/ubuntu-vnc-xfce-firefox-g3:latest

#Update OS Env and add pkgs
RUN echo -e "headless\n" | sudo -S apt-get update \
  && echo -e "headless\n" | sudo -S apt install -y build-essential qtcreator qt5-default \
  && echo -e "headless\n" | sudo -S apt-get install -y firefox libcurl4-gnutls-dev libv8-dev libasound2 curl wget
  
# Create new GAMS directory and install
RUN mkdir -p /opt/gams \
  && echo -e "headless\n" | sudo -S chmod -R 755 /opt \
  && cd /opt/gams \
  && wget https://d37drm4t2jghv5.cloudfront.net/distributions/33.2.0/linux/linux_x64_64_sfx.exe \
  && echo -e "headless\n" | sudo -S chmod +x linux_x64_64_sfx.exe \
  && echo -e "headless\n" | sudo -S ./linux_x64_64_sfx.exe \
  && cd gams33.2_linux_x64_64_sfx/studio/ \
  && echo -e "headless\n" | sudo -S ./studio.AppImage --appimage-extract \
  && echo -e "headless\n" | sudo -S chmod -R 755 squashfs-root
