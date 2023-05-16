'use strict'

function modify_list()
{
  let cluste_element = $('#batch_connect_session_context_cluster');
  let curr_val = cluster_element.val();
}

function register_listner()
{
 document.getElementById("batch_connect_session_context_cluster").addEventListener("change", change_event);
}
function one_time()
{
var partition_list = document.getElementById("batch_connect_session_context_bc_partition");
var all_options = partition_list.options
for (var i = 0; i< all_options.length; i ++)
{
	all_options[i].setAttribute("data-cluster", all_options[i].value)
	all_options[i].value = all_options[i].text
	all_options.hidden=false
}
console.log("one time done")
}

function change_event() {
var partition_list = document.getElementById("batch_connect_session_context_bc_partition");
  var cluster_v = document.getElementById("batch_connect_session_context_cluster").value;
  var current_cluster = cluster_v.value;
  var all_options = partition_list.options
  console.log(all_options)
  console.log("hello")
 for (var i = 0; i< all_options.length; i ++)
  {
	if (all_options[i].getAttribute("data-cluster")  != cluster_v)
	{
		all_options[i].hidden = true;
	}
	else
	{
		all_options[i].hidden = false
		all_options.selectedIndex = i;;
 	 }

  }


}


$(document).ready(function() {
  // Set the max value to be what was set in the last session
one_time()
change_event();
register_listner();
});
