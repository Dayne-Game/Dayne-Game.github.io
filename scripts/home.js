
function homeContent() {
    document.querySelector('.right-content').innerHTML = `
    <h1> Welcome to my Portfolio</h1>
    <h5>Hi my name is Dayne Game and im 16 years old and from Auckland, New Zealand</h5>
    <div class="box">
        <div class="border-box">
            <h3><i class="fab fa-slack"></i> Slack</h3>
        </div>
        <div class="border-box">
            <h3><i class="far fa-envelope"></i> Email</h3>
        </div>
        <div class="border-box">
            <h3><i class="fab fa-bitbucket"></i> Bitbucket</h3>
        </div>
        <div class="border-box">
            <h3><i class="fab fa-github"></i> Github</h3>
        </div>
        <div class="border-box bottom">
            <h3><i class="fas fa-mobile"></i> Mobile</h3>
        </div>
    </div>
    <div class="box two">
        <div class="border-box">
            <h3>dayne-game</h3>
        </div>
        <div class="border-box answer">
            <h3>daynegame024@gmail.com</h3>
        </div>
        <div class="border-box">
            <a href="https://bitbucket.org/danogamo/" class="link" target="_blank"><h3>DanoGamo</h3></a>
        </div>
        <div class="border-box">
        <a href="https://github.com/Dayne-Game" class="link" target="_blank"><h3>Dayne-Game</h3></a>
        </div>
        <div class="border-box bottom">
            <h3>021 029 93594</h3>
        </div>
    </div>
    <br>
    <h5>I attended Tuakau College before dropping out at age 15 to pursue computer programming and Web Development. My main goal is to become a full-stake Web Developer. I attend Toi-Ohomai in March of 2017, in the level 4 IT Essentials program. I passed that course with an A+ Average. I currently have a A average.</h5>
    <br>
    <div class="JS-example">
        <span class="var">var</span>
        <span class="name">Name = </span>
        <span class="dayne">'Dayne'</span>
        <span class="semi-colon">;</span>
        <br>
        <span class="var">var</span>
        <span class="name">message = </span>
        <span class="dayne">'Hi '</span>
        <span class="name"> + Name + </span>
        <span class="dayne">','</span>
        <span class="semi-colon">;</span>
    </div>
    `
}



const homebtn = document.querySelector('#homebtn');

window.onload = homeContent();
homebtn.addEventListener('click', function() {
    homeContent();
})