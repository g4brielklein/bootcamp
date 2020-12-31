const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./public/scripts/data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure('src/views', {
    express: server,
    autoescape: false,
    nocache: true
})

server.get('/', function (req, res) {
    res.render("courses", { courses })
})

server.get('/about', function (req, res) {
    const about = {
        logo: "/assets/rocketseat.jpg",
        title: "Sobre a Rocketseat",
        description1: "Mais do que uma plataforma de educação em tecnologia, a Rocketseat é uma comunidade incrível de programadores em busca do próximo nível 🚀",
        description2: "A Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador.",
        infoTechnologies: "Principais Tecnologias",
        infoSocials: "Redes Sociais",
        links: [
            { id: "github", url: "https://github.com/Rocketseat", class: "fab fa-github" },
            { id: "facebook", url: "https://www.facebook.com/rocketseat", class: "fab fa-facebook" },
            { id: "insta", url: "https://www.instagram.com/rocketseat_oficial", class: "fab fa-instagram" }
        ],
        images: [
            { src: "/assets/javascript.svg", name: "JavaScript" },
            { src: "/assets/nodejs.svg", name: "Node JS" },
            { src: "/assets/reactjs.svg", name: "React JS" },
            { src: "/assets/react-native.svg", name: "React Native" }
        ]
    }



    res.render("about", { about })
})

server.get('/course/:id', function (req, res) {
    const id = req.params.id

    const course = courses.find(function (course) {
        if (course.id == id) {
            return true
        }
    })

    if (!course) {
        return res.send("Course not found")
    }


    res.render("course", { course })
})

server.use(function (req, res) {
    res.status(404).render("not-found")
})



server.listen('5000', function () {
    console.log("Server is running")
})