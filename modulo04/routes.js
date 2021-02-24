const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')
const data = require('./data.json')

routes.get('/', function(req, res) {
    return res.redirect('/instructors')
})

routes.get('/instructors', function(req, res) {
    return res.render('instructors/index', { data })
})

routes.get('/members', function(req, res) {
    return res.render('members')
})

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.post('/instructors', instructors.post)

module.exports = routes