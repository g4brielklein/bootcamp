const fs = require('fs')
const data = require('./data.json')

// create
exports.post = function(req, res) {
    // Validação dos dados
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send(`Please, fill the ${key} field.`)
        }
    }

    let { avatar_url, name, birth, education, type, subjects } = req.body

    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education,
        type,
        subjects
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Houston we have a problem')
        }

        return res.redirect('/teachers')
    })
}

// show
exports.show = function(req, res) {
    const { id } = req.params

    let findTeacher = function(id) {
        for (let teacher in data.teachers) {
            if (teacher.id == id) {
                return teacher
            }
        }     
    }
    

    // return res.render('teachers/show')
    return res.send(`nome do professor: ${findTeacher.name}`)
}

// // edit
// exports.edit = function(req, res) {
//     const { id } = req.params

//     const foundInstructor = data.instructors.find(function(instructor) {
//         return instructor.id == id
//     })

//     if (!foundInstructor) {
//         return res.send('Instructor not found!')
//     }

//     const instructor = {
//         ...foundInstructor,
//         birth: date(foundInstructor.birth)
//     }

//     return res.render('instructors/edit', { instructor })
// }