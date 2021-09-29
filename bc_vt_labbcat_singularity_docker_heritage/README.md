![GitHub release (latest by date)](https://img.shields.io/github/v/release/rsettlage/ARC-ondemand-apps)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Batch Connect - VT LaBB-CAT

A Batch Connect app designed for Advanced Research Computing's VT OnDemand that launches LaBB-CAT
and an associated MySQL server within a Cascades batch job. Both are launched via Singularity 
containers. For other apps and assistance with Open OnDemand, see [Open OnDemand].

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

<LIST DEPENDENCIES>
- Singularity 3.5.1

**Optional** software:

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job

[Open OnDemand] http://openondemand.org/  
[Advanced Research Computing] https://arc.vt.edu/  
[LaBB-CAT]: http://labbcat.sourceforge.net/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod  

## Install

Use git to clone this app:

```sh
git clone <repo>
cd <dir>
#pull the mysql-server image
singularity pull docker://mysql/mysql-server:5.6
#pull the labb-cat image
labbcatver="20200916.2050"
singularity pull --name labbcat_${labbcatver}.sif docker://nzilbb/labbcat:$labbcatver
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing, see https://osc.github.io/ood-documentation/master/install-ihpc-apps.html for inspiration.
1. Fork it 
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
