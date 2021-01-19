const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const posts = require('./data')

app.set('view engine', 'njk')

app.use(express.static('public'))

nunjucks.configure('views', {
    express:app
})

app.get('/', function(req, res) {
    return res.render('contents', { posts })
})

app.get('/about', function(req, res) {
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

app.use('/post/:id', function(req, res) {
    const id = req.params.id

    const post = posts.find(function(post) {
        return post.id == id
    })

    if (!post) {
        return res.send('Post not found!')
    }

    return res.render('post', { item: post })
})

app.use(function(req, res) {
    res.status(404).render("not-found");
});

app.listen('5000', function(req, res) {
    console.log('server is running!')
})