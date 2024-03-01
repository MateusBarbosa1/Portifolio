var div = document.querySelector(".info div");

function getTec() {
  div.innerHTML = `<h1 style="font-weight: bold;">Technologies</h1>
                    <br>
                    <p style="padding: 3px 0;">JavaScript - Nodejs</p>
                    <p style="padding: 3px 0;">Databases - (Mysql,Postgresql,MongoDB)</p>
                    <p style="padding: 3px 0;">Design Patterns</p>
                    <p style="padding: 3px 0;">Conhecimentos de Infraestrutura</p>
                    <p style="padding: 3px 0;">Java - (Aprendendo)</p>
                    <p style="padding: 3px 0;">HTML/CSS</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`;
}
function getAbout() {
  div.innerHTML = `<h1 style="font-weight: bold;">Sobre mim</h1>
                    <br>
                    <p style="padding: 3px 0;">Olá, Minha história na área de tecnologia começa aos 10 anos quando assisti um filme que falava sobre hackers, achei incrível, depois descobri programação, comecei a aprender Python, mas quando vi desenvolvimento web achei que era muito legal então comecei a estudar todos os dias e resolvi focar no back-end, e não demorou muito para começar a vender sites para familiares e empreendedores da minha cidade.</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`;
}
function home() {
  div.innerHTML = `<h1 id="title1">Welcome!</h1>
    <br>
    <p id="p1">I'm a back-end developer who works mainly with nodejs!</p>
    <br>
    <button><a href="/projects.html">Ver Projetos</a></button>
    <button onclick="getTec()"><a>Conhecimentos Tecnicos</a></button>
    <button onclick="getAbout()"><a>Sobre mim</a></button>`;
}
