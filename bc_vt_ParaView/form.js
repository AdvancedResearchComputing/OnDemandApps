'use strict'
function register_listner() {
  document.getElementById("batch_connect_session_context_cluster").addEventListener("change", change_event);
}

function change_event() {
  var cluster_v = document.getElementById("batch_connect_session_context_cluster").value;
  var cuda_ver = document.getElementById("batch_connect_session_context_bc_version").value;
  var items;
  if ( cluster_v == 'tinkercliffs')
  {
      items =  ["5.8.0-foss-2020a-Python-3.8.2-mpi","5.9.1-foss-2021a-mpi"];
  }
  else if ( cluster_v == 'infer')
  {
    items = ["5.8.0-foss-2020a-Python-3.8.2-mpi","5.8.1-foss-2020b-mpi"]
  }
 
  var str = ""
  for (var item of items) {
    str += "<option>" + item + "</option>"
  }
  
  document.getElementById("batch_connect_session_context_bc_version").innerHTML = str;

}

$(document).ready(function() {
  // Set the max value to be what was set in the last session
 register_listner();
 change_event();
 });
