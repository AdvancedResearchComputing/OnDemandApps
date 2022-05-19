FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=America/New_York

RUN apt-get update && \
    apt install -y mlocate wget gpg software-properties-common && \
    apt-get update

RUN wget -qO - https://qgis.org/downloads/qgis-2021.gpg.key | \
    gpg --no-default-keyring --keyring gnupg-ring:/etc/apt/trusted.gpg.d/qgis-archive.gpg --import && \
    chmod a+r /etc/apt/trusted.gpg.d/qgis-archive.gpg && \
    apt update

RUN echo "deb https://qgis.org/ubuntu-ltr $(lsb_release -c -s) main" >> /etc/apt/sources.list && \
    echo "deb-src https://qgis.org/ubuntu-ltr $(lsb_release -c -s) main" >> /etc/apt/sources.list && \
    apt update

RUN apt install -y qgis qgis-plugin-grass

RUN apt autoclean && \
    apt autoremove --purge -y && \
    rm -rf /var/lib/apt/lists/*
