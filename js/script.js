// These are for the nav to function when in mobile view!
const iconBtn = document.querySelector(".icon");
const linkbox = document.querySelector(".link-box");
const active = document.querySelector(".active");
const toggler = document.querySelector(".toggler");

function show_hide_menu() {
  linkbox.classList.toggle("active");
}
function change_image() {
  toggler.classList.toggle("togglerChange");
}
