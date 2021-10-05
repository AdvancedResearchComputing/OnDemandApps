# Batch Connect - Example Jupyter Notebook Server

An example Batch Connect app that launches a Jupyter Notebook server within a
batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [OpenSSL](https://www.openssl.org/) 1.0.1+ (used to hash the Jupyter Notebook
  server password)
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
  6.0.1+ or any other `module purge` and `module load <modules>` based CLI
  used to load appropriate environments within the batch job before launching
  the Jupyter Notebook server.
- [Singularity](https://sylabs.io/guides/3.0/user-guide/installation.html) Singularity is a container platform. It allows you to create and run containers that package up pieces of software in a way that is portable and reproducible. ... Your container is a single file, and you don't have to worry about how to install all the software you need on each different operating system and system.

## Downloading and building docker image
``` sh 
    singularity pull ise.sif docker://vtarc/bc_vt_ise3434:latest
```

- Change the Sif file locations in [script.sh.erb](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/f7f8ea6bcbe66d191b8766eb3be9d05af312460d/bc_vt_ise3434/template/script.sh.erb#L27)


## Development Installation


### Git clone repository
```bash
   cd /home/<user>/ondemand/dev
   git clone git@github.com:rsettlage/ondemand2.git
```

### System Installation
```bash
   cd /var/www/ood/apps/sys
   git clone git@github.com:rsettlage/ondemand2.git
```

### Packages made available under this [DockerImage](https://hub.docker.com/repository/docker/vtarc/bc_vt_ise3434):

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
