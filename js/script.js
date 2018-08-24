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

/****************************/
/** This is the Github API **/
/****************************/

const url = `https://api.github.com/users/dayne-game/repos?per_page=100&client_id=ec569ac44c7094ee0173&client_secret=6a39853312e1467b8331b7106e0be31b9f01250e`;

fetch(url).then(function(response) {
  return response.json();
});
