# Batch Connect - GAMS Studio

[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for VT OnDemand that launches a **GAMS Studio** batch job via singularity image.

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
Gather your requirements, You will need to provide: 
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
Open your on demand portal and click the app:   
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/gams2.png)

#### Step 3 
Fill in the required details:    
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/gams3.png)


#### Step 4 
Click Launch and your Desktop  will be ready in few minutes: 
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/gams4.png)


#### Step 5 
All your running jobs are available under "My Interactive Sessions":
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/gams5.png)


Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_vt_desktop/DevGuide.md)
