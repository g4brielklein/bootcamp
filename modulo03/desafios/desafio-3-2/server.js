const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./courses')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res) {
    return res.render('courses', { courses })
})

server.get('/about', function(req, res) {
    const about = {
        image: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        name: 'Rocketseat',
        title: 'Evolua rápido como a tecnologia.',
        title_tecs: 'Principais tecnologias utilizadas:',
        tecs: [
            {
                tec: 'JavaScript'
            },
            {
                tec: 'Node.js'
            },
            {
                tec: 'React.js'
            },
            {
                tec: 'React Native'
            }
        ]
    }

    return res.render('about', { about })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

 server.listen(5000, function() {
     console.log('server is running')
 })