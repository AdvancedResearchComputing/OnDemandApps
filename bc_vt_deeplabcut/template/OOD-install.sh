#!/bin/bash

export PYTHONUSERBASE=/work/$USER/.conda/envs/OOD-DEEPLABCUT
conda create --prefix=/work/$USER/.conda/envs/OOD-DEEPLABCUT python=3.8
conda install -c conda-forge -n OOD-DEEPLABCUT wxpython=4.0.7
wget https://raw.githubusercontent.com/DeepLabCut/DeepLabCut/master/conda-environments/DEEPLABCUT.yaml
conda env update -n OOD-DEEPLABCUT -f DEEPLABCUT.yaml
conda install -n OOD-DEEPLABCUT -c anaconda cudatoolkit=10.1.243 cudnn=7.6.5
conda clean --all

