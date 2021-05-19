const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    const data = {
        avatar_url: 'https://avatars0.githubusercontent.com/u/22963494?s=460&u=3f020d4a9f9041ada4585a645cd8721b99a9fcc0&v=4',
        name: 'Gabriel Klein',
        role: 'Data Engineer at <a href="http://cadastra.com" target="_blank">Cadastra</a>',
        description: 'Student at Rocketseat and Information Tecnology Student at Ulbra',
        links: [
            {
                url: 'https://github.com/g4brielklein',
                name: 'GitHub'
            },
            {
                url: 'https://linkedin.com/in/g4brielklein',
                name: 'LinkedIn'
            }
        ]
    }

server.listen(5000, function() {
    console.log('Server is running!')
})