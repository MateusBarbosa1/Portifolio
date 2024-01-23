var div = document.querySelector('.info div')


function getTec() {
    div.innerHTML = `<h1 style="font-weight: bold;">Technologies</h1>
                    <br>
                    <p style="padding: 3px 0;">JavaScript - Nodejs</p>
                    <p style="padding: 3px 0;">Databases - (Mysql,Postgresql,MongoDB)</p>
                    <p style="padding: 3px 0;">Design Patterns - MVC</p>
                    <p style="padding: 3px 0;">Infrastructure knowledge</p>
                    <p style="padding: 3px 0;">HTML/CSS</p>
                    <br>
                    <h1 style="font-size: 20px;font-weight: bold;">Main Frameworks</h1>
                    <br>
                    <p style="padding: 3px 0;">Express</p>
                    <p style="padding: 3px 0;">Prisma</p>
                    <p style="padding: 3px 0;">Body-Parser</p>
                    <p style="padding: 3px 0;">Next JS</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`
}
function getAbout() {
    div.innerHTML = `<h1 style="font-weight: bold;">About me</h1>
                    <br>
                    <p style="padding: 3px 0;">Hi, My history in the technology area begins at the age of 10 when I watched a film that talked about hackers, I thought it was incredible, it didn't take long for me to discover the area of ​​programming, I started learning Python, but it didn't take long for me to discover web development so I started studying every day and decided to focus on the back end, and it didn't take long to start selling websites to family members and entrepreneurs in my city.</p>
                    <p>Anyway, I believe that technology can save the world and I want to take a closer look at this event!</p>
                    <p><span style="font-weight: bold;">REMEMBERING:</span> programmers are those who solve problems, so don't get attached to one language because technology is constantly changing and at any time you will have to learn another language to better solve your problem :)</p>
                    <br>
                    <button onclick="home()" ><a>Home</a></button>`
}
function home() {
    div.innerHTML = `<h1 id="title1">Welcome!</h1>
    <br>
    <p id="p1">I'm a back-end developer who works mainly with nodejs!</p>
    <br>
    <button><a href="/projects.html">View Projects</a></button>
    <button onclick="getTec()"><a>Technical knowledge</a></button>
    <button onclick="getAbout()"><a>About me</a></button>`
}