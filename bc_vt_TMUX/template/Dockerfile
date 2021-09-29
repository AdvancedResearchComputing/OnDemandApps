FROM accetto/ubuntu-vnc-xfce-firefox-g3:latest

# COPY eclipse-cpp-2021-03-R-linux-gtk-x86_64.tar.gz /home/headless

RUN echo -e "headless\n" | sudo -S apt-get update \
    && echo -e "headless\n" | sudo -S apt install -y libevent-dev ncurses-dev build-essential autotools-dev automake pkg-config bison byacc git


RUN git clone https://github.com/tmux/tmux.git \ 
    && cd tmux \
    && sh autogen.sh \
    && ./configure \
    && echo -e "headless\n" | sudo -S make && echo -e "headless\n" | sudo -S make install

RUN /usr/local/bin/tmux new-session -s session_0 -d
