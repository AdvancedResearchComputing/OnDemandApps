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
![image](<img width="749" alt="Screen Shot 2022-01-24 at 4 14 08 PM" src="https://user-images.githubusercontent.com/69873077/150865973-b4bfdb6e-a37f-4505-8f76-5b7443f04bc2.png">)

  
#### Step 3 
Fill in the required details:     
![image](<img width="579" alt="Screen Shot 2022-01-24 at 4 16 10 PM" src="https://user-images.githubusercontent.com/69873077/150866173-342d7a23-5217-45c9-8be6-7275c59634a2.png">)


#### Step 4 
Click Launch and your Desktop  will be ready in few minutes:    
![image](<img width="730" alt="Screen Shot 2022-01-24 at 4 17 04 PM" src="https://user-images.githubusercontent.com/69873077/150866308-73db180d-d75e-4c22-baa9-2452a4d5a286.png">)

  
#### Step 5 
All your running jobs are available under "My Interactive Sessions":      
![image](<img width="1106" alt="Screen Shot 2022-01-24 at 4 19 03 PM" src="https://user-images.githubusercontent.com/69873077/150866576-d4cf9fce-b141-4b04-b23d-fef9e23f7682.png">)


Want to install this app on your OOD System ? 

Follow our [Dev Guide](https://github.com/AdvancedResearchComputing/OnDemandApps/tree/main/bc_vt_desktop/DevGuide.md)
