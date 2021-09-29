![GitHub release (latest by date)](https://img.shields.io/github/v/release/rsettlage/ARC-ondemand-apps)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Batch Connect - VT <APP NAME>

A Batch Connect app designed for [Advanced Research Computing]'s VT OnDemand that launches <APP NAME>
within a <CLUSTER> batch job.  For other apps and assistance with Open OnDemand, see [Open OnDemand].

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

<LIST DEPENDENCIES>
- [COMSOL Multiphysics] 5.1+
- [Xfce Desktop] 4+

For VNC server support:

- [TurboVNC] 2.1+
- [websockify] 0.8.0+

For hardware rendering support (coming soon ...):

- [X server]
- [VirtualGL] 2.3+

**Optional** software:

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job

[Open OnDemand] http://openondemand.org/  
[Advanced Research Computing] https://arc.vt.edu/  
[DeepLabCut]: https://github.com/DeepLabCut/DeepLabCut
[Xfce Desktop]: https://xfce.org/  
[TurboVNC]: http://www.turbovnc.org/  
[websockify]: https://github.com/novnc/websockify  
[X server]: https://www.x.org/  
[VirtualGL]: http://www.virtualgl.org/  
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod  

## Install

Use git to clone this app:

```sh
git clone <repo>
cd <dir>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing, see https://osc.github.io/ood-documentation/master/install-ihpc-apps.html for inspiration.
1. Fork it 
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
