#!/usr/bin/env bash
#This script runs as the second argument of the singularity exec command

source port.rc

#Setting GAMS root directory path for the app
PATH=$PATH:/home/headless/GAMS/gams33.2_linux_x64_64_sfx

# Executing the binary file
/home/headless/GAMS/gams33.2_linux_x64_64_sfx/studio/squashfs-root/AppRun
