# Batch Connect - Gams Studio

An example Batch Connect app that launches an instance of GAMS Studio within a
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
For Java Development
``` sh 
    singularity pull ise.sif docker://vtarc/bc_vt_gamsStudio:latest
```
- Change the Sif file locations in [script.sh.erb](./template/script.sh.erb#L23) and [form.yml.erb](./form.yml.erb#L53)


### Development Installation

```bash
   cd /home/<user>/ondemand/dev
   git clone git@github.com:AdvancedResearchComputing/OnDemandApps.git
```

### System Installation
```bash
   cd /var/www/ood/apps/sys
   git clone git@github.com:AdvancedResearchComputing/OnDemandApps.git
```

- Make necessary description changes to **[manifest.yml](./manifest.yml)**

### Packages made available under this [DockerImage](https://hub.docker.com/repository/docker/vtarc/bc_vt_gamsStudio) or [Dockerfile](./DockerFiles/Dockerfile):



- [Gams Studio 32.20](https://d37drm4t2jghv5.cloudfront.net/distributions/33.2.0/linux/linux_x64_64_sfx.exe)

