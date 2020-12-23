const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./courses')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
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
                name: 'JavaScript'
            },
            {
                name: 'Node.js'
            },
            {
                name: 'React.js'
            },
            {
                name: 'React Native'
            }
        ],
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/rocketseat'
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com/rocketseat_oficial'
            },
            {
                name: 'Facebook',
                url: 'https://facebook.com/rocketseat'
            }
        ]
    }

    return res.render('about', { about })
})

server.get('/post', function(req, res) {
    const id = req.query.id

    const post = posts.find(function(post) {
        return post.id == id
    })

    if (!post) {
        return res.send('post not found!')
    }

    return res.render('post', { item: post })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function() {
    console.log('server is running')
})