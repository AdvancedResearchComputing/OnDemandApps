FROM accetto/ubuntu-vnc-xfce-firefox-g3:latest

# For JAVA
#COPY eclipse-java-2021-03-R-linux-gtk-x86_64.tar.gz 

# For C++ 
COPY eclipse-cpp-2021-03-R-linux-gtk-x86_64.tar.gz /home/headless

RUN echo -e "headless\n" | sudo -S apt-get update \
    && echo -e "headless\n" | sudo -S apt install -y build-essential libpci-dev libwebkit2gtk-4.0-dev

RUN cd /home/headless/ \
	&& tar -zxvf eclipse-cpp-2021-03-R-linux-gtk-x86_64.tar.gz