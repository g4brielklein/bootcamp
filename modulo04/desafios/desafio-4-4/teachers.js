const fs = require('fs')
const { url } = require('inspector')
const data = require('./data.json')

// create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Fill all fields")
        }
    }

    let { avatar_url, name, birth, education, modality, classes } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

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

// show
exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) {
        return res.send('Teacher not found.')
    }

    const teacher = {
        ...foundTeacher
        , created_at: foundTeacher.created_at
    }

    return res.render('teachers/show', { teacher })
}

// edit
exports.edit = function(req, res) {
    const id = req.params.id;

    let foundTeacher = 0;

    for (teacher of data.teachers) {
        if (teacher.id == id) {
            foundTeacher = teacher
            return res.render('teachers/edit', { teacher: foundTeacher })
        }
    }
}