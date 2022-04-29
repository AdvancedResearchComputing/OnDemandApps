
# Batch Connect - LS-PrePost app 

An example Batch Connect app that launches a LS-PrePost application within a batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
  6.0.1+ or any other `module purge` and `module load <modules>` based CLI
  used to load appropriate environments within the batch job before launching
  the Jupyter Notebook server.
- [Singularity](https://sylabs.io/guides/3.0/user-guide/installation.html) Singularity is a container platform. It allows you to create and run containers that package up pieces of software in a way that is portable and reproducible. ... Your container is a single file, and you don't have to worry about how to install all the software you need on each different operating system and system.

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

## Contributing

1. Fork it 
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

---
