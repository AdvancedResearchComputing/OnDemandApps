FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get install -y wget vim build-essential appstream gettext cairo-dock software-properties-gtk \
                        libglib2.0-dev libgtk-3-dev libgtksourceview-4-dev libxml2-dev \
                        zlib1g-dev gsl-bin libncurses5-dev libncursesw5-dev libreadline-dev \
                        libgtksourceview-3.4-1 

                        # libgsl-dev libgslcblas0 libspread-sheet-widget-dev

RUN sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list \
  && apt-get update

# RUN wget https://download.gnome.org/sources/gtksourceview/3.24/gtksourceview-3.24.11.tar.xz \

RUN mkdir /apps

# RUN apt-get build-dep -y pspp

RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgsl25_2.6+dfsg-2_amd64.deb
RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgslcblas0_2.6+dfsg-2_amd64.deb
RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/s/spread-sheet-widget/libspread-sheet-widget_0.6-3_amd64.deb
RUN wget -c http://old-releases.ubuntu.com/ubuntu/pool/universe/p/pspp/pspp_1.4.0-3_amd64.deb

RUN apt-get install -y ./libgsl25_2.6+dfsg-2_amd64.deb ./libgslcblas0_2.6+dfsg-2_amd64.deb ./libspread-sheet-widget_0.6-3_amd64.deb ./pspp_1.4.0-3_amd64.deb

RUN cd /apps && wget http://archive.ubuntu.com/ubuntu/pool/universe/s/spread-sheet-widget/spread-sheet-widget_0.6.orig.tar.gz \
  && tar -xf spread-sheet-widget_0.6.orig.tar.gz \
  && cd spread-sheet-widget-0.6/ \
  && ./configure \
  && make install


RUN cd /apps && wget http://ftpmirror.gnu.org/pspp/pspp-1.4.1.tar.gz \
 && tar -xzf pspp-1.4.1.tar.gz \
  && cd pspp-1.4.1 \
  && ./configure \
  && make \
  && make install
