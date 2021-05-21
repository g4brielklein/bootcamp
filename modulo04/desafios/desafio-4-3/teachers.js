const fs = require('fs')
const data = require('./data.json')

// create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send(`Please, fill all fields!`)
        }
    }

    let { full_name, age, education, class_modality, subjects } = req.body

    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        full_name,
        age,
        education,
        class_modality,
        subjects,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Error writing file!')
        }

        return res.redirect('/teacher')
    })
}
// update

// delete