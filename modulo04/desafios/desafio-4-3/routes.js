const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')
const data = require('./data.json')

routes.get('/', function(req, res) {
    return res.redirect('teachers')
})

routes.get('/teachers', function(req, res) {
    return res.render('teachers/index', { data }) 
})

routes.get('/students', function(req, res) {
    return res.render('students') 
})

routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create')
})

routes.post('/teachers', teachers.post)

module.exports = routes