const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

exports.create = function(req, res) {
    return res.render('members/create')
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Fill all fields")
        }
    }

    birth = Date.parse(req.body.birth)

    let id = 1;
    const lastMember = data.members[data.members.lenght - 1]

    if (lastMember != 0) {
        id = lastMember + 1
        console.log("oii")
    }

    data.members.push({
        id
        , ...req.body
        , birth
    }) 

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) {
            return res.send("Write file error")
        }

        return res.redirect("/members")
    })
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) {
        return res.send('Member not found')
    }

    let blood_type = foundMember.blood_type

    if (foundMember.blood_type == 'A1') {
        blood_type = "A+"
    } else if (foundMember.blood_type == 'A0') {
        blood_type = "A-"
    } else if (foundMember.blood_type == 'B1') {
        blood_type = "B+"
    } else if (foundMember.blood_type == 'B0') {
        blood_type = "B-"
    } else if (foundMember.blood_type == 'AB1') {
        blood_type = "AB+"
    } else if (foundMember.blood_type == 'AB0') {
        blood_type = "AB-"
    } else if (foundMember.blood_type == 'O0') {
        blood_type = "O-"
    } else if (foundMember.blood_type == 'O1') {
        blood_type = "O+"
    }
    
    const member = {
        ...foundMember
        , age: age(foundMember.birth)
        , blood_type: blood_type
    }

    return res.render('members/show', { member })
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) {
        return res.send('Member not found')
    }

    const member = {
        ...foundMember
        , birth: date(foundMember.birth)
    }

    return res.render('members/edit', { member })
}

exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundMember = data.members.find(function(member, foundIndex) {
        if (id == member.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember) {
        return res.send('Member not found')
    }

    const member = {
        ...foundMember
        , ...req.body
        , birth: Date.parse(req.body.birth)
        , id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile('data.json', JSON.stringify(data, null, 2),  function(err) {
        if (err) {
            return res.send('Error writing file')
        }

        return res.redirect(`/members/${id}`)
    })
}

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function(member) {
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Write file error')
        }

        return res.redirect('/members')
    })
}

exports.index = function(req, res) {
    return res.render("members/index", { members: data.members })
}