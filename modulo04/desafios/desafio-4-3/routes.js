const express = require('express')
const routes = express.Router()
const fs = require('fs')

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
    fs.writeFile('data.json', JSON.stringify(req.body), function(err) {
        if (err) {
            return res.send('Housten we hava a problem')
        }

        return res.redirect('/teachers')
    })
})

module.exports = routes