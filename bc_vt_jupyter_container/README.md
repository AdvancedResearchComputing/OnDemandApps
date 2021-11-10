# Batch Connect - Example Jupyter Notebook Server

An example Batch Connect app that launches a Jupyter Notebook server within a
batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Jupyter Notebook](http://jupyter.readthedocs.io/en/latest/) 4.2.3+ (earlier
  versions are untested but may work for you)
- [OpenSSL](https://www.openssl.org/) 1.0.1+ (used to hash the Jupyter Notebook
  server password)
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
  6.0.1+ or any other `module purge` and `module load <modules>` based CLI
  used to load appropriate environments within the batch job before launching
  the Jupyter Notebook server.


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

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/bc_vt_matlab_vnc/DevGuide.md)
