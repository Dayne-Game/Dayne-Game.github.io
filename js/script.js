// Grab Sidebar from HTML Pages
var sidebar = document.querySelector(".popout-sidebar");

// Function that Opens Sidebar
function openSidebar() {
  sidebar.style.width = "100%";
}

// Function that Closes Sidebar
function closeSidebar() {
  sidebar.style.width = "0%";
}

// Function that Closes Overlay

window.setTimeout("closeOverlay()", 2000);

function closeOverlay() {
  document.querySelector(".overlay").style.display = "none";
}
