# Batch Connect - Desktop App

[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for VT OnDemand that launches a **Desktop** batch job via singularity image.

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


#### Step 1 
Gather your requirement, You will need to provide: 
- Account
- Reservation (optional)
- Matlab version (optional)
- No of hours  
- No of CPUs you need
- No of GPUs you need

> Note: partition of GPU may change based on different clusters use sinfo on cluster or else refer documentation links below  
- Cluster
> For details of VT cluster [Read More.](https://arc-rtd.readthedocs.io/en/latest/resources/compute.html)
> For VT users without allocation you can use "personal". [Read More](https://arc-rtd.readthedocs.io/en/latest/usage/allocations.html#allocations)

#### Step 2 
Open you on demand portal and click the app
![image](https://user-images.githubusercontent.com/4628915/138634970-70037570-0143-47bc-bde9-0227e6db1dfa.png)

#### Step 3 
Fill in the required details 

![image](https://user-images.githubusercontent.com/4628915/138635016-a2b5ccbd-19f0-40f6-bbbe-870675f3e295.png)


#### Step 4 

Click Launch and your Desktop  will be ready in few minutes: 
![image](https://user-images.githubusercontent.com/4628915/138635230-b24d89ae-a1ce-4886-9277-934c63cfedcf.png)

#### Step 5 
All your running jobs are available under "My Interactive Sessions" :
![image](https://user-images.githubusercontent.com/4628915/138635318-656ad9bd-75d6-4cb4-a9d9-c2dcc861ab75.png)


Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_vt_desktop/DevGuide.md)
