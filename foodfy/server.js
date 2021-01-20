const express = require('express')
const { Server } = require('http')
const nunjucks = require('nunjucks')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('views', {
    express:app
})

app.get('/', function(req, res)  {
    return res.render('index')
})

app.get('/about', function(req, res) {
    return res.render('about')
})

app.get('/recepis', function(req, res) {
    return res.render('recepis')
})

app.listen(5000, function() {
    console.log('server is running!')
})