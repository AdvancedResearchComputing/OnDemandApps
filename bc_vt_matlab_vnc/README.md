# Batch Connect - MATLAB via VNC

[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for VT OnDemand that launches a [MATLAB] batch job via matlab singularity image that is based on VNC environment.

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
![image](https://user-images.githubusercontent.com/4628915/138629973-66a6ae83-36b3-44a8-adad-6f5b77ded4c0.png)


#### Step 3 
Fill in the required details 
![image](https://user-images.githubusercontent.com/4628915/138606170-bdd126fd-7aa7-448d-9ac9-201fec27eb33.png)


#### Step 4 

Click Launch and your Matlab Lab will be ready in few minutes: 

![image](https://user-images.githubusercontent.com/4628915/138606222-c5ac5de6-9aa3-4bb6-a18d-00611d2d3dba.png)


#### Step 5 
All your running jobs are available under "My Interactive Sessions" :

![image](https://user-images.githubusercontent.com/4628915/138606662-31e419c8-5226-4cf8-893c-c9bd579f0130.png)


Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_Vt_matlab_vnc/DevGuide.md)
