// Dropdown Menu Functionality

var dropDownMenu = document.getElementById("dropdown");

function dropListShow() {
  if (dropDownMenu.style.visibility === "visible") {
  dropDownMenu.style.visibility = "hidden";
  } else {
    dropDownMenu.style.visibility = "visible";
  }
}


