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
function set_link()
{
  var form_root = document.getElementById("img_1").parentElement;
  var div = document.createElement("div");
  var img = document.getElementById("img_1");
  div.innerHTML = "<br><a href=\"https://canvas.vt.edu/courses/137474\"> <b>Canvas Link</a><br> <a href=\"https://github.com/GeoPythonVT/geosf21\"> GitHub Link</a></b> ";
  img.insertAdjacentElement("afterend",div);
}

function set_image()
{
  try {

    var form = document.getElementById("new_batch_connect_session_context").parentElement;
    let divholder=document.createDocumentFragment();
    let img=document.createElement("img");
    img.src = 'https://raw.githubusercontent.com/AdvancedResearchComputing/ARC-ondemand-apps/master/bc_vt_geos6104fall21/werth_class_pic.jpg';
    img.id = "img_1";
    img.class="img-responsive";
    divholder.appendChild(img);
    form.insertBefore(img,form.firstElementChild);

    
  } catch (error) {
    console.error(error);
  }
 
}

$(document).ready(function() {
  // Set the max value to be what was set in the last session

  fix_num_cores();
  set_node_type_change_handler();
 // set_image();
//  set_link();
  
});