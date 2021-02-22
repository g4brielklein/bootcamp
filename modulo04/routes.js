const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect('/instructors')
})

routes.get('/instructors', function(req, res) {
    return res.render('instructors/index')
})

routes.get('/members', function(req, res) {
    return res.render('members')
})

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.post('/instructors', function(req, res) {
    // Validação dos dados
    const keys = Object.keys(req.body)

    for (key of keys) {
        // req.body.key == ""
        if (req.body[key] == '') {
            return res.send(`Please, fill the ${key} field.`)
        }
    }

    return res.send(req.body)
})

module.exports = routes