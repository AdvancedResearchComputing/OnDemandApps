FROM accetto/ubuntu-vnc-xfce-firefox-g3:latest


RUN echo -e "headless\n" | sudo -S apt-get update \
    && echo -e "headless\n" | sudo -S apt install -y build-essential libpci-dev libwebkit2gtk-4.0-dev apt-utils freecad\
    && echo -e "headless\n" | sudo -S apt clean

# RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections
RUN echo -e "headless\n" | sudo -S DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends nvidia-nsight