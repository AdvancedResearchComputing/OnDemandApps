# Batch Connect - VT-ARC ParaView

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_matlab.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A Batch Connect app designed for VT ARC OnDemand that launches ParaView within a batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Xfce Desktop] 4+
- [GCC] 7.3.0
- [openblas] 0.3.6  
- [Python] 2.7.13
- [Openmpi] 3.1.2
- [phdf5] 1.8.16
- [qt] 5.12.3
- [ParaView] 5.6.0  

For VNC server support:

- [TurboVNC] 2.1+
- [websockify] 0.8.0+

For hardware rendering support (pending in future releases):

- [X server]
- [VirtualGL] 2.3+

**Optional** software:

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job

[ParaView]: https://www.paraview.org/
[Xfce Desktop]: https://xfce.org/
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[X server]: https://www.x.org/
[VirtualGL]: http://www.virtualgl.org/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod  
[openblas]: http://www.openblas.net/  
[GCC]: https://gcc.gnu.org/
[Python]: https://www.python.org/downloads
[Openmpi]: https://www.open-mpi.org/software/ompi
[phdf5]: https://support.hdfgroup.org/HDF5/PHDF5/  

## Install

Use git to clone this app and checkout the desired branch/version you want to
use:

```sh
git clone <repo>
cd <dir>
git checkout <tag/branch>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

To update the app you would:

```sh
cd <dir>
git fetch
git checkout <tag/branch>
```

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing

1. Fork it ( https://github.com/rsettlag/bc_vt_paraview/ )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
