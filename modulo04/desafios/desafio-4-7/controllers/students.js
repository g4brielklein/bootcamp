const fs = require('fs')
const data = require('../data.json')
const { age, date, graduation } = require('../utils')

exports.index = function(req, res) {
    return res.render("teachers/index", { data })
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Fill all fields")
        }
    }

    let { avatar_url, name, birth, education, modality, classes } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)
    classes = classes.split(", ")

    data.teachers.push({
        id
        , avatar_url
        , name
        , birth
        , education
        , modality
        , classes
        , created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Error writing file')
        }

        return res.redirect("/teachers")
    })
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(student) {
        return student.id == id
    })

    if (!foundTeacher) {
        return res.send('Student not found :(')
    }

    const student = {
        ...foundTeacher
        , age: age(foundTeacher.birth)
        , created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
        , education: graduation(foundTeacher.education)
    }

    return res.render('teachers/show', { student })
}

exports.edit = function(req, res) {
    const { id } = req.params;

    const foundTeacher = data.teachers.find(function(student) {
        return student.id == id
    })

    if (!foundTeacher) {
        return res.send('Student not found.')
    }

    const student = {
        ...foundTeacher
        , birth: date(foundTeacher.birth)
    }

    return res.render('teachers/edit', { student })
}

exports.update = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(student, foundIndex) {
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) {
        return res.send('Student not found! :(')
    }

    const student = {
        ...foundTeacher
        , ...req.body
        , id: Number(req.body.id)
        , birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = student

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Error writing file :(')
        }

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(student) {
        return student.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if(err) {
            return res.send('Error writing file :(')
        }

        return res.redirect('/teachers')
    })
}