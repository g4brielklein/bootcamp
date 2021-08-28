const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

exports.show = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) {
        return res.send('Member not found')
    }
    
    const member = {
        ...foundMember
        , age: age(foundMember.birth)
    }

    return res.render('members/show', { member })
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Fill all fields")
        }
    }

    let { avatar_url
        , name
        , email
        , birth
        , gender
        , blood_type
        , weight
        , height
    } = req.body

    birth = Date.parse(birth)

    let id = 1;
    const lastId = data.members[data.members.lenght - 1].id

    if (lastId) {
        id = lastId + 1
    }

    data.members.push({
        id
        , avatar_url
        , name
        , email
        , birth
        , gender
        , blood_type
        , weight
        , height
    }) 

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) {
            return res.send("Write file error")
        }

        return res.redirect("/members")
    })
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

exports.create = function(req, res) {
    return res.render('members/create')
}