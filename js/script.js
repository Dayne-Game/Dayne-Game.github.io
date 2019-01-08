function myFunction() {
    var x = document.querySelector('.link-box');
    if (x.className === "link-box") {
        x.className += " responsive";
    } else {
        x.className = "link-box";
    }
}