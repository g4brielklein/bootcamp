const data = require('../data')
const test = require('../data.json')
const fs = require('fs')

exports.index = function (req, res) {
    return res.render('./recipes/recipes', { test })
}

exports.create = function (req, res) {
    return res.render('./recipes/create')
}

exports.show = function (req, res) {
    const recipes = test.recipes;
    const recipeIndex = req.params.id;
  
    return res.render('./recipes/recipe', { item: recipes[recipeIndex] })
}

exports.edit = function(req, res) {
    return res.send('// Mostrar formulário de edição de receita')
}

exports.post = function (req, res) {
    const fields = Object.keys(req.body)

    for (let field of fields) {
        if (req.body[field] == "") {
            return res.send("Por favor, preencha todos os campos. :) ")
        }
    }

    let { image, title, author, ingredients, preparation, information } = req.body

    ingredients = ingredients.split(",")

    test.recipes.push({
        image 
        , title
        , author
        , ingredients
        , preparation
        , information
    }) 

    fs.writeFile("data.json", JSON.stringify(test, null, 2), function(err){
        if (err) {
            return res.send("Write file error")
        }

        return res.redirect("/admin/recipes")
    })
}

exports.put = function (req, res) {
    return res.send('// Editar uma receita')
}

exports.delete = function (req, res) {
    return res.send('// Deletar uma receita')
}