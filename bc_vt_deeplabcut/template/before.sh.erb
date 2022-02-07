echo starting begin.sh
if [ -z ${HOME+x} ];
then
    export HOME=$(echo ~)
	source /etc/profile
	source /etc/bashrc
	source $HOME/.bashrc
fi

# Export the module function if it exists
[[ $(type -t module) == "function" ]] && export -f module
hostname
pwd

module reset
module load containers/singularity

singularity run --cleanenv --nv \
    --bind `pwd`:/cwd,$TMPDIR:/TMPDIR,/projects,/work/$USER,/cm \
    /projects/arcsingularity/ubuntu-xfce-v0.2.0.sif -d "Desktop-$(hostname)" &

