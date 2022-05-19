FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y wget

RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgsl25_2.6+dfsg-2_amd64.deb
RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgslcblas0_2.6+dfsg-2_amd64.deb
RUN wget -c http://archive.ubuntu.com/ubuntu/pool/universe/s/spread-sheet-widget/libspread-sheet-widget_0.6-3_amd64.deb
RUN wget -c http://old-releases.ubuntu.com/ubuntu/pool/universe/p/pspp/pspp_1.4.0-3_amd64.deb

RUN apt-get install -y ./libgsl25_2.6+dfsg-2_amd64.deb ./libgslcblas0_2.6+dfsg-2_amd64.deb ./libspread-sheet-widget_0.6-3_amd64.deb ./pspp_1.4.0-3_amd64.deb
