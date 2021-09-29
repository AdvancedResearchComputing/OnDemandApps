'use strict'

## currently this is Cascades specific, need to work through how to make this cluster agnostic

/**
 * Fix num cores, allowing blanks to remain
 */
function fix_num_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let node_type = node_type_input.val();
  let num_cores_input = $('#num_cores');

  if(num_cores_input.val() === '') {
    return;
  }

  if(node_type.contains("v100")) {
    set_ppn_cascades_v100(num_cores_input);
  } else {
    set_ppn_cascades_regular(num_cores_input);
  }
}

/**
 * Sets the PPN limits available for Cascades normal_q, dev_q and k80_q nodes.
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_cascades_regular(num_cores_input) {
  const NUM_CORES = 32;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', 1);
  num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
}

/**
 * Sets the PPN limits available for Cascades v100_ nodes.
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_cascades_v100(num_cores_input) {
  const NUM_CORES = 24;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', 1);
  num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
}

/**
 * Change the maximum number of cores selected.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(node_type_input, fix_num_cores);
}

$(document).ready(function() {
  // Set the max value to be what was set in the last session
  fix_num_cores();
  set_node_type_change_handler();
});
