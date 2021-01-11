const express = require('express')
const nunjucks = require('nunjucks')
const posts = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    return res.render('contents', { posts })
})

server.get('/about', function(req, res) {
    const about = {
        img_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        name: 'Rocketseat',
        title: 'Evolua rápido como a tecnologia.',
        title_tecs: 'Principais tecnologias utilizadas: ',
        tecs: ['JavaScript', 'Node.js', 'React.js', 'React Native'],
        links: [
            { url: 'https://github.com/rocketseat', name: 'Github' },
            { url: 'https://instagram.com/rocketseat_oficial', name: 'Instagram' },
            { url: 'https://facebook.com/rocketseat', name:'Facebook' }
        ]
    }

    return res.render('about', { about })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen('5000', function(req, res) {
    console.log('server is running')
})