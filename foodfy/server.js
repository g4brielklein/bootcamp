const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('views', {
    express:app
})

app.get('/', function(req, res)  {
    return res.render('index', { data })
})

app.get('/about', function(req, res) {
    return res.render('about')
})

app.get('/recepis', function(req, res) {
    return res.render('recepis', { data })
})

app.get('/recepi:id', function(req, res) {
    return res.send('recepi')
})

app.listen(5000, function() {
    console.log('server is running!')
})