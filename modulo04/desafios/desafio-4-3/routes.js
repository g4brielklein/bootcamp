const express = require('express')
const routes = express.Router()
const fs = require('fs')
const { stringify } = require('querystring')
const teachers = require('./teachers')

const data = require('./data.json')

routes.get('/', function(req, res) {
    return res.redirect('teachers')
})

routes.get('/teachers', function(req, res) {
    return res.render('teachers/index') 
})

routes.get('/students', function(req, res) {
    return res.render('students') 
})

routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create')
})

routes.post('/teachers', function(req, res) {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Houston we have a problem')
        }
    })
})

module.exports = routes