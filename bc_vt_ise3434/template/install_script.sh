#!/usr/bin/env bash
#This script runs as the second argument of the singularity exec command


echo "creating conda environment"
ls -la ./env.yaml
# CONDA_ENVS_PATH=/home/${USER}/.conda/envs:/opt/anaconda/envs
# CONDA_PKGS_DIRS=/home/${USER}/.conda/pkgs:/opt/anaconda/pkgs
conda env create -v -f ./env.yaml
conda info --envs

#activate conda environment
source activate OOD-CONDAENV
## add install steps here
echo "done creating environment packages"