#!/bin/bash

source /mathworks.rc

if [ -z "${EXT_URL}" ] ; then
    EXT_URL="localhost:${APP_PORT}"
fi

echo ""
echo "To use the web-desktop: http://${EXT_URL}${BASE_URL}/index.html"
echo ""

matlab-jupyter-app