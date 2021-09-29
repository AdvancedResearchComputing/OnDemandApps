# Batch Connect - OSC QGIS

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_qgis.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for OSC OnDemand that launches QGIS within an Owens batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job before
  launching the container.
- [XFCE] is used to provide the window manager and terminal access if desired
- [OSC/sa_singularity_qgis] which provides [QGIS] version 3.4.12

[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod
[QGIS]: https://qgis.org/en/site/
[OSC/sa_singularity_qgis]: https://github.com/OSC/sa_singularity_qgis
[XFCE]: https://www.xfce.org/

## Install

Use Git to clone this app and checkout the desired branch/version you want to
use:

```sh
scl enable rh-git29 -- git clone <repo>
cd <dir>
scl enable rh-git29 -- git checkout <tag/branch>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

To update the app you would:

```sh
cd <dir>
scl enable rh-git29 -- git fetch
scl enable rh-git29 -- git checkout <tag/branch>
```

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_qgis/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

* Documentation, website content, and logo is licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
* Code is licensed under MIT (see LICENSE.txt)o
* The QGIS name and logo are protected under European law.
