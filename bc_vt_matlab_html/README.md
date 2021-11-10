# Batch Connect - MATLAB

[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for VT OnDemand that launches a [MATLAB] batch job via matlab singularity image that is based on HTML based which has its own advantages in terms of portability 

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
Open your on demand portal and click the app
![app](https://user-images.githubusercontent.com/4628915/138606146-5d24312f-38d5-4d72-9302-b40738b8b87b.png)


#### Step 3 
Fill in the required details 
![image](https://user-images.githubusercontent.com/4628915/138628533-605d4843-1fd0-416f-9e9f-c2d943b2415f.png)



#### Step 4 

Click Launch and your Matlab Lab will be ready in few minutes: 
![image](https://user-images.githubusercontent.com/4628915/138628674-03b274f1-f73a-4d62-8c6f-8a081e50d684.png)

#### Step 5 
All your running jobs are available under "My Interactive Sessions" :

![image](https://user-images.githubusercontent.com/4628915/138629267-4b439c14-6e13-4660-8fbf-5041fab6aaaf.png)

Click `Connect to Matlab` button

![image](https://user-images.githubusercontent.com/4628915/138981967-b93fe064-78f4-48a4-b8e3-ea9a97bafd90.png)

If you selected GPU partition You can also verify device with simple one liner: 

``` sh
gpuDeviceCount("available")
```

![image](https://user-images.githubusercontent.com/4628915/138982131-19b35ca6-02d8-481b-9bce-eabcda367ff1.png)
 

Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_vt_matlab_html/DevGuide.md)
