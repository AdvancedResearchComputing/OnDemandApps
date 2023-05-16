FROM ubuntu:22.04
RUN apt-get update && apt install -y wget gdebi software-properties-common
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6DCF7707EBC211F
# RUN apt-add-repository "deb http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu focal main" && apt update
# RUN apt install -y firefox
#RUN add-apt-repository ppa:mozillateam/ppa
#RUN echo ' \
#Package: * \
#Pin: release o=LP-PPA-mozillateam \
#Pin-Priority: 1001 \
#' | tee /etc/apt/preferences.d/mozilla-firefox
#RUN echo 'Unattended-Upgrade::Allowed-Origins:: "LP-PPA-mozillateam:${distro_codename}";' | tee /etc/apt/apt.conf.d/51unattended-upgrades-firefox
#RUN apt install -y firefox
RUN apt-get install -y curl
RUN curl -LO https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb
RUN rm google-chrome-stable_current_amd64.deb
#RUN wget https://github.com/shiftkey/desktop/releases/download/release-3.1.1-linux1/GitHubDesktop-linux-3.1.1-linux1.deb
#RUN gdebi -n GitHubDesktop-linux-3.1.1-linux1.deb
#RUN chmod +x /usr/bin/github-desktop
RUN wget -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | tee /etc/apt/keyrings/shiftkey-packages.gpg > /dev/null
RUN sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.list'
#ENV BROWSER=/usr/bin/google-chrome
RUN apt update && apt install -y github-desktop
RUN apt install -y flatpak-xdg-utils
RUN cp /usr/libexec/flatpak-xdg-utils/xdg-open /usr/bin/xdg-open
RUN apt -y install dbus-x11 xdg-desktop-portal-gtk xdg-desktop-portal
