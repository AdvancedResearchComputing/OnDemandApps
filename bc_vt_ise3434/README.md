# Batch Connect - Example Jupyter Notebook Server

An example Batch Connect app that launches a Jupyter Notebook server within a
batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Jupyter Notebook](http://jupyter.readthedocs.io/en/latest/) 4.2.3+ (earlier
  versions are untested but may work for you)
- [OpenSSL](https://www.openssl.org/) 1.0.1+ (used to hash the Jupyter Notebook
  server password)
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
  6.0.1+ or any other `module purge` and `module load <modules>` based CLI
  used to load appropriate environments within the batch job before launching
  the Jupyter Notebook server.

## Install

## Development Installation

### Git clone repository
```bash
   cd /home/<user>/ondemand/dev
   $git clone git@github.com:rsettlage/ondemand2.git
```

## System Installation
```bash
   cd /var/www/ood/apps/sys
   $git clone git@github.com:rsettlage/ondemand2.git
```

### Packages made available under this application

``` sh
RUN conda -y -c conda-forge numpy
 'jupyterlab' \
 'matplotlib' \
 'scipy'\
 'scikit-learn'
 'folium' \
 'more-itertools'
 'pandas'\
 'networkx' \
 'cftime' \
 'seaborn' 
 
RUN conda config --add channels https://conda.anaconda.org/gurobi
RUN conda install gurobi
```