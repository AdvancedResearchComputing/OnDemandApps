## version 2.12.3

FROM ubuntu:14.04

MAINTAINER Roman Yurchak

RUN apt-get update && apt-get install -y mesa-utils curl

RUN cd / && curl -L http://portal.nersc.gov/project/visit/releases/2.12.3/visit2_12_3.linux-x86_64-ubuntu14.tar.gz -o visit.tar.gz && \
    tar xzf visit.tar.gz && rm -r visit.tar.gz

RUN apt-get -y install libsm6 libxt6 libglu1-mesa

ENV QT_X11_NO_MITSHM 1

CMD ["/visit2_12_3.linux-x86_64/bin/visit"]
