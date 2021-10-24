# Define in build call to specify version of MATLAB to use (e.g. r2021a)
ARG MATLAB_DEPS_VERSION=latest

FROM mathworks/matlab-deps:${MATLAB_DEPS_VERSION} as base
# Set of dependencies that are needed to get and run the integration 
RUN export DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install --yes \
        python3 \
        python3-pip \
        xvfb \
    && apt-get clean \
    && apt-get -y autoremove \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install jupyter-matlab-proxy

## going to inject at runtime
#COPY entrypoint.sh /usr/bin/
#RUN chmod +x /usr/bin/entrypoint.sh

# Let's assume you will ALWAYS cross-mount MATLAB into /opt/matlab and 
# that MATLAB will have a license in the file /opt/matlab/licenses/license.dat
RUN ln -s /opt/matlab/bin/matlab /usr/local/bin/matlab 

########### going to put this in matlab.rc for runtime changes
#ENV MLM_LICENSE_FILE=/opt/matlab/licenses/license.dat
#ENV MWI_APP_PORT="8888"
#ENV MWI_BASE_URL="/matlab"
# Controls the LOG directory used by MATLAB
#ENV TMPDIR="/tmp"

#ENTRYPOINT [ "entrypoint.sh" ]

# expect to run this container with something like 
#
#   docker run -it --rm -p 8888:8888 -v /path/to/matlabroot:/opt/matlab OOD
#
# On run you can specify:
#
#   APP_PORT to get this particular users port on the machine they are running 
#   on. You will also need to specify BASE_URL which this users browser reaches 
#   the container. 
#
#   BASE_URL is likely to be something like '/rnode/tc-intel016/35172/' because 
#   the user's browser is accessing 'https://ood.arc.vt.edu/rnode/tc-intel016/35172/'