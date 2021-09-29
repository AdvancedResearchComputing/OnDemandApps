# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
ARG OWNER=jupyter
ARG BASE_CONTAINER=$OWNER/base-notebook
FROM $BASE_CONTAINER

LABEL maintainer="Jupyter Project <jupyter@googlegroups.com>"

USER root

# Install all OS dependencies for fully functional notebook server
RUN apt-get update --yes && \
    apt-get install --yes --no-install-recommends \
    vim-tiny \
    git \
    inkscape \
    libsm6 \
    libxext-dev \
    libxrender1 \
    lmodern \
    netcat \
    openssh-client \
    # ---- nbconvert dependencies ----
    texlive-xetex \
    texlive-fonts-recommended \
    texlive-plain-generic \
    # ----
    tzdata \
    unzip \
    nano-tiny && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
# Conda packages from course
RUN conda install -y -c anaconda python=3.7
RUN conda install -y -c conda-forge numpy \
 'jupyterlab' \
 'matplotlib' \
 'scipy'\
 'scikit-learn' \
 'folium' \
 'more-itertools' \
 'pandas'\
 'networkx' \
 'cftime' \
 'seaborn' && \
  conda clean --all -f -y && \
  fix-permissions "${CONDA_DIR}" && \
  fix-permissions "/home/${NB_USER}"


RUN conda config --add channels https://conda.anaconda.org/gurobi
RUN conda install gurobi
# Create alternative for nano -> nano-tiny
RUN update-alternatives --install /usr/bin/nano nano /bin/nano-tiny 10

# Switch back to jovyan to avoid accidental container runs as root
USER ${NB_UID}