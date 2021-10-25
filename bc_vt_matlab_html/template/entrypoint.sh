#!/bin/bash

### pushing these into a matlab.rc file
#ENV MWI_APP_PORT="8888"
#ENV MWI_BASE_URL="/matlab"
#ENV TMPDIR="/tmp"
#ENV MWI_EXT_URL="ood.arc.vt.edu"
#ENV MLM_LICENSE_FILE=/opt/matlab/licenses/license.dat

source /mathworks.rc

echo retrieved ENV variables from matlab.rc
echo MWI_APP_PORT=$MWI_APP_PORT
echo MWI_BASE_URL=$MWI_BASE_URL
echo TMPDIR=$TMPDIR
echo MWI_EXT_URL=$MWI_EXT_URL
echo MLM_LICENSE_FILE=$MLM_LICENSE_FILE

### to enable matlab to submit to slurm
export MATLABPATH=/opt/matlab/parallel_remote:$MATLABPATH

if [ -z "${EXT_URL}" ] ; then
    EXT_URL="localhost:${MWI_APP_PORT}"
fi
echo ""
echo "To use the web-desktop: http://${MWI_EXT_URL}${MWI_BASE_URL}/index.html"
echo ""

echo starting web matlab
matlab-jupyter-app
