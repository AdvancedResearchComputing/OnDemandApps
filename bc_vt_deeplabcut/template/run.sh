#!/bin/bash
export PYTHONUSERBASE=/work/${USER}/.conda/envs/OOD-DEEPLABCUT
source activate /work/${USER}/.conda/envs/OOD-DEEPLABCUT
python -m deeplabcut
