const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')

nunjucks.configure('views', {
    express:server
})

app.get('/', function(req, res) {
    return res.render('index')
})

app.listen('5000', function(req, res) {
    console.log('server is running!')
})