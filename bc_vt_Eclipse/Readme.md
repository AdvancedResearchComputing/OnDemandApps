# OnDemand Eclipse

[Eclipse]: https://www.eclipse.org/eclipseide/  

A noVNC based [Eclipse] IDE app for ondemand

- Includes both Java and C++ IDEs
- User must specify which one to use (in the form) before launching the app on OOD.

## Setup
- Dockerfile uses Accetto base image
- Install app through the tar file for the required IDE environment
- App executablelaunches using the following path: pathToAppDirectory/eclipse/eclipse
