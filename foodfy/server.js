const express = require('express')
const nunjucks = require('nunjucks')
const user = require('./controllers/user')
const admin = require('./controllers/admin')

const routes = express()
app.use(express.static('public'))
app.set('view engine', 'njk')
nunjucks.configure('views', {
    express:app,
    autoescape: false,
    noCache: true
})

app.listen(5000, function() {
    console.log('Server is running!')
})