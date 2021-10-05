'use strict'
document.getElementsByClassName("col-md-3")[0].remove();
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
  
}



$(document).ready(function() {
  // Set the max value to be what was set in the last session

  fix_num_cores();
  set_node_type_change_handler();
 // set_image();
//  set_link();
  
});