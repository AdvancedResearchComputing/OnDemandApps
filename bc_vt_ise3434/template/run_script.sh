source activate OOD-CONDAENV
# Executing the binary file
export CONFIG_FILE="${PWD}/config.py"
jupyter-lab --config="${CONFIG_FILE}"