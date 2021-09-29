ARG OWNER=jupyter
ARG BASE_CONTAINER=$OWNER/minimal-notebook
FROM $BASE_CONTAINER

LABEL maintainer="Ayush Chaturvedi <ayushchatur@vt.edu>"


USER root

# ffmpeg for matplotlib anim & dvipng+cm-super for latex labels
RUN apt-get update --yes && \
    apt-get install --yes --no-install-recommends ffmpeg dvipng cm-super && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

USER ${NB_UID}

# Install Python 3 packages
RUN conda install --channel "conda-forge" --quiet --yes \
    'pywavelets' \
    'netcdf4' \
    'cartopy' \
    'matplotlib' \
    'nb_conda' \
    'pydap' \
    'ipywidgets' \
    'pandas' \
    'pytables' \
    'scikit-image' \
    'scikit-learn' \
    'scipy' \
    'seaborn' \
    'statsmodels' \
    'xlrd' && \
    conda clean --all -f -y && \
    fix-permissions "${CONDA_DIR}" && \
    fix-permissions "/home/${NB_USER}"