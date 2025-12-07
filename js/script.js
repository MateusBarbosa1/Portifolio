var div = document.querySelector(".info div");

function getTec() {
  div.innerHTML = `<h1 style="font-weight: bold;">Technologies</h1>
                    <br>
                    <p style="padding: 3px 0;">JavaScript - Nodejs</p>
                    <p style="padding: 3px 0;">Java - Spring Boot</p>
                    <p style="padding: 3px 0;">Databases - (Mysql,Postgresql,MongoDB)</p>
                    <p style="padding: 3px 0;">GIT / GIT HUB</p>
                    <p style="padding: 3px 0;">HTML/CSS</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`;
}
function getAbout() {
  div.innerHTML = `<h1 style="font-weight: bold;">Sobre mim</h1>
                    <br>
                    <p style="padding: 3px 0;">Comecei a estudar programação aos 11 anos, impulsionado pela curiosidade em entender como a tecnologia funciona por trás das telas. Ao longo desses 7 anos, fui aprofundando meus estudos, criando projetos pessoais e explorando diferentes áreas do desenvolvimento. Com o tempo, descobri meu interesse pelo back-end e passei a me dedicar cada vez mais a construir sistemas e resolver problemas de forma lógica e eficiente.</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`;
}
function home() {
  div.innerHTML = `<h1 id="title1">Bem vindo(a)!</h1>
        <br />
        <p id="p1">
          Eu sou um programador Web focado mais no back-end, <br>
          que atualmente procura emprego na área!!
        </p>
        <br />
        <button><a href="/Portifolio/projects">Ver Projetos</a></button>
        <button onclick="getTec()"><a>Conhecimento Tecnico</a></button>
        <button onclick="getAbout()"><a>Sobre mim</a></button>`;
}
