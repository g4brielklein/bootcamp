const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    const about = {
        avatar_url: 'https://avatars0.githubusercontent.com/u/22963494?s=460&u=3f020d4a9f9041ada4585a645cd8721b99a9fcc0&v=4',
        name: 'Gabriel Klein',
        role: 'Data Engineer at <a href="http://cadastra.com" target="_blank">Cadastra</a>',
        description: 'Student at Rocketseat and Information Tecnology Student at Ulbra',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/g4brielklein'
            },
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/g4brielklein'
            }
        ]
    }

    return res.render('about', { about })
})

server.get('/portfolio', function(req, res) {
    return res.render('portfolio', { items: videos })
})

server.get('/video', function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send('video not found')
    }

    return res.render('video', { item: video })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function() {
    console.log('server is running')
})