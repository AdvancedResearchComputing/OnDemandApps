![GitHub release (latest by date)](https://img.shields.io/github/v/release/rsettlage/ARC-ondemand-apps)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Batch Connect - VT Remote Desktop

A Batch Connect app designed for [Advanced Research Computing]'s VT OnDemand that launches Remote Desktop
within a batch job.  For other apps and assistance with Open OnDemand, see [Open OnDemand].

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

<LIST DEPENDENCIES>
- [Singularity] 3.7+

For hardware rendering support (coming soon ...):

- [X server]
- [VirtualGL] 2.3+

##  OOD User Guide


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
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/a2.png)

  
#### Step 3 
Fill in the required details:     
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/ansys3.png)


#### Step 4 
Click Launch and your Desktop  will be ready in few minutes:    
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/ansys4.png)

  
#### Step 5 
All your running jobs are available under "My Interactive Sessions":      
![image](https://github.com/AdvancedResearchComputing/OnDemandApps/blob/main/Images/ansyss5.png)


Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_vt_desktop/DevGuide.md)
