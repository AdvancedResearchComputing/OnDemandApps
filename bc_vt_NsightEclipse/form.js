'use strict'

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
  
  if(node_type === 'hugemem') {
    set_ppn_owens_hugemem(num_cores_input);
  } else {
    set_ppn_owens_regular(num_cores_input);
  }
}

/**
 * Sets the PPN limits available for Owens hugemem nodes.
 * 
 * hugemem reservations are always assigned the full node
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_hugemem(num_cores_input) {
  const NUM_CORES = 48;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', NUM_CORES);
  num_cores_input.val(NUM_CORES);
}

/**
 * Sets the PPN limits available for non hugemem Owens nodes.
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_regular(num_cores_input) {
  const NUM_CORES = 28;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', 0);
  num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
}


/**
 * Change the maximum number of cores selected.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(node_type_input, fix_num_cores);
}

function register_listner() {
  document.getElementById("batch_connect_session_context_cluster").addEventListener("change", change_event);
}

function change_event() {
  var cluster_v = document.getElementById("batch_connect_session_context_cluster").value;
  var cuda_ver = document.getElementById("batch_connect_session_context_ide_version").value;
  var items;
  if ( cluster_v == 'tinkercliffs')
  {
      items =  ["latest","11.2"];
  }
  else if ( cluster_v == 'infer')
  {
    items = ["latest","11.1","10.1","10.2"]
  }
  else
  {
      items = ["latest"]
  }
  
  var str = ""
  for (var item of items) {
    str += "<option>" + item + "</option>"
  }
  
  document.getElementById("batch_connect_session_context_ide_version").innerHTML = str;

}

$(document).ready(function() {
  // Set the max value to be what was set in the last session
  fix_num_cores();
  set_node_type_change_handler();
  register_listner();
  change_event();
});