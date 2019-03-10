function myFunction() {
    var x = document.querySelector('.link-box');
    if (x.className === "link-box") {
        x.className += " responsive";
        document.querySelector('.navbar').style.backgroundColor = "#333";
    } else {
        x.className = "link-box";
        document.querySelector('.navbar').style.backgroundColor = "transparent";
    }
}

window.onscroll = function () { stickyNav() };
var nav = document.querySelector('.navbar');
var sticky = nav.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

