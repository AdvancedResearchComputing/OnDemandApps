FROM ubuntu:20.04
ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && \
    apt install -y wget
RUN apt-get install -y locales && locale-gen en_US.UTF-8
ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en' LC_ALL='en_US.UTF-8'
RUN wget https://github.com/openstudiocoalition/OpenStudioApplication/releases/download/v1.3.1/OpenStudioApplication-1.3.1+3cc18af131-Ubuntu20.04.deb
RUN DEBIAN_FRONTEND=noninteractive apt install -y ./OpenStudioApplication-1.3.1+3cc18af131-Ubuntu20.04.deb && rm OpenStudioApplication-1.3.1+3cc18af131-Ubuntu20.04.deb
ENV PATH=$PATH:/usr/local/openstudioapplication-1.3.1/EnergyPlus/:/usr/local/openstudioapplication-1.3.1/bin/
