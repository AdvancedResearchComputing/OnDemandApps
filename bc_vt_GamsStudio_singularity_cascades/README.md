# OnDemand GAMS Studio

![GitHub Release](https://img.shields.io/github/release/osc/bc_example_gams.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)


A Batch Connect app designed for OnDemand that launches GAMS Studio

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [GAMS Studio] version?
- [Xfce Desktop] 4+

For VNC server support:

- [TurboVNC] 2.1+
- [websockify] 0.8.0+

[GAMS Studio]: https://www.gams.com/latest/docs/T_STUDIO.html
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[Xfce Desktop]: https://xfce.org/
[Basic Accetto]: https://github.com/accetto/ubuntu-vnc-xfce

## Setup
- Uses the same image dockerfile as the tinkerclifs GAMS implementation
- Instead of the Accetto firefox image it uses the [Basic Accetto] novnc xfce image
