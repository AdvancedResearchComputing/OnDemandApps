# Batch Connect - MATLAB via HTML

[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for VT OnDemand that launches a [MATLAB] batch job via matlab singularity image that is based HTML.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod] 6.0.1+ or any other `module restore` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job before
  launching the Singularity image.

- [Singularity] 3.7.1+
- Corresponding module to launch the above Singularity image (see
  [example_module])

[MATLAB]: https://matlab.mathworks.com/
[Singularity]: http://singularity.lbl.gov/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod
[example_module]: https://github.com/nickjer/singularity-rstudio/blob/master/example_module/

## OOD User Guide
