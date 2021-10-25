
# OnDemandApps
New repository for ondemand Apps. 
The repo follows new nomenclature, directory structure and support for CI using github actions. 

---
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)


## Directory Structure 

Following is the description of directory structure, it is important to note that deviation with this structure may result in CI builds to break. For more info in this regard we request you to read [CI.md](./CI.md) 
 
```
- app_root
    - Dockerfiles
        - Dockerfile
        - Dockerfile_x64
    - Singularityfiles
        - singularity.def 
        - singularity_x64.def
    - template
        - before.sh
        - after.sh
        .
        .
        .
    form.js
    info.md.erb
    submit.md.erb
    LICENSE
    manifest.yml
    .
    .
    .

```

## Nomenclature 

- App shall starts with name **bc_vt**
- Different versions of shall append thier discriptive prefix such as **html/vnc**
- Standard defined names for files info/submit/view/form to be followed.
- With different versioning/ support of architectures in container image files shall append the architecture name. for eg. Dockerfile, Dockerfile_x86, Singularityfile.def , Singularity_x86.def  
- The primary container filename are **Dockerfile** and **Singularity.def** these are **case sensitive**.

