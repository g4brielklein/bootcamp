const fs = require('fs')

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

    fs.writeFile('data.json', JSON.stringify(req.body), function(err) {
        if (err) {
            return res.send('Write file error!')
        }

        return res.redirect('/instructors')
    })
}