const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect("/teachers")
})

routes.get('/teachers', teachers.index)
routes.get('/students', function(req, res) {
    return res.send("students")
})
routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create')
})
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.update)
routes.delete('/teachers', teachers.delete)
routes.post('/teachers', teachers.post)

routes.get('/students', students.index)
routes.get('/students', function(req, res) {
    return res.send("students")
})
routes.get('/students/create', function(req, res) {
    return res.render('students/create')
})
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.put('/students', students.update)
routes.delete('/students', students.delete)
routes.post('/students', students.post)

module.exports = routes