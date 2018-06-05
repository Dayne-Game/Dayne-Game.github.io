
function aboutContent() {
    document.querySelector('.right-content').innerHTML = `<h1>Will this work!</h1>
    <h5>Hello guys, my name is Dayne</h5>`
}

const aboutbtn = document.querySelector('#aboutbtn');

aboutbtn.addEventListener('click', function() {
  aboutContent();  
})