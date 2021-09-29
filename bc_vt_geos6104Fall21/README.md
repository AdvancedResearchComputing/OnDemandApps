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
conda install -c conda-forge nb_conda
conda install -c conda-forge jupyterlab
conda install -c conda-forge matplotlib
conda install -c conda-forge scipy
conda install -c conda-forge cartopy
conda install -c conda-forge scikit-learn
conda install -c conda-forge statsmodels
conda install -c conda-forge netcdf4
conda install -c conda-forge pywavelets
conda install -c conda-forge pydap
```