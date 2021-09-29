# OnDemand Code Server

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_codeserver.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An improved file viewer / editor for VT OnDemand that launches a
Code Server on Tinkercliffs in the browser. Code Server leverages VSCode as its
editor.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job before
  launching Code server.
- [Code Server] 2.x+ available from Github: https://github.com/cdr/code-server/releases

[Code Server]: https://coder.com/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod
[VS Code]: https://code.visualstudio.com/


## Setup

- Grab the latest official code-server docker image from https://hub.docker.com/r/codercom/code-server 
- The code-server executable lives in the following path in the image: /usr/lib/code-server/bin/code-server
- Execute the image using singularity, passing the following args:
    --auth="password" \
    --bind-addr="0.0.0.0:${port}" \
    --disable-telemetry \
    --extra-extensions-dir="$CODE_SERVER_DATAROOT/extensions" \
    --user-data-dir="$CODE_SERVER_DATAROOT" \
    --log debug \
    "<%= working_dir.to_s %>" 
    
 ## File Picker
- The form.js file used for codeserver is the base form.js file integrated with the file picker component. 
- This file will handle all component functions.
- This file must be included with all apps that may want to use the file picker app.
- The following code included in `script.sh.erb` must also be included for all other apps that may use the file picker:
```
<%
working_dir = Pathname.new(context.working_dir)

 if ! working_dir.exist?
     working_dir = Pathname.new(ENV['HOME'])
     elsif working_dir.file?
         working_dir = working_dir.parent
end
%>
```
- This snippet will ensure that the application always starts up in either a user defined directory or the home directory.
