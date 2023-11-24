//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {
  var block_id = document.getElementById("block_id").value;
  var colour_id = document.getElementById("colour_id").value;
  var block = document.getElementById(block_id);
  block.style.backgroundColor = colour_id;
  var grid_items = document.getElementsByClassName("grid-item");
  for (var i = 0; i < grid_items.length; i++) {
    if (grid_items[i].id != block_id) {
      grid_items[i].style.backgroundColor = "transparent";
    }
  }
});
document.getElementById("reset_button").addEventListener("click", function() {
  var grid_items = document.getElementsByClassName("grid-item");
  for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].style.backgroundColor = "transparent";
  }
});