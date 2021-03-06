const fs = require('fs')
const data = require('./data.json')
const { age } = require('./utils')

// show
exports.show = function(req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id
    })

    if (!foundInstructor) {
        return res.send('Instructor not found!')
    }
    
    function created_at(timestamp) {
        const creation_date = new Date(timestamp).toLocaleDateString('pt-BR')

        return creation_date
    }

    const instructor = {
        // Spread Operator
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','),
        created_at: created_at(foundInstructor.created_at)
    }

    return res.render('instructors/show', { instructor })
}

// create
exports.post = function(req, res) {
    // Validação dos dados
    const keys = Object.keys(req.body)

    for (key of keys) {
        // req.body.key == ""
        if (req.body[key] == '') {
            return res.send(`Please, fill the ${key} field.`)
        }
    }

    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Write file error!')
        }

        return res.redirect('/instructors')
    })
}