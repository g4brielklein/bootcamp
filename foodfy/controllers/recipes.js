const data = require('../data')

exports.index = function (req, res) {
    return res.render('./recipes/recipes', { data })
}

exports.create = function (req, res) {
    return res.render('./recipes/create')
}

exports.show = function (req, res) {
    const recipes = data;
    const recipeIndex = req.params.id;
  
    return res.render('./recipes/recipe', { item: recipes[recipeIndex] })
}

exports.edit = function(req, res) {
    return res.send('// Mostrar formulário de edição de receita')
}

exports.post = function (req, res) {
    return res.send('// Cadastrar nova receita')
}

exports.put = function (req, res) {
    return res.send('// Editar uma receita')
}

exports.delete = function (req, res) {
    return res.send('// Deletar uma receita')
}

// -----

exports.index = function (req, res) {
    return res.render('./recipes/recipes', { data })
}

exports.create = function (req, res) {
    return res.render('./recipes/create')
}

exports.show = function (req, res) {
    const recipes = data;
    const recipeIndex = req.params.id;
  
    return res.render('./recipes/recipe', { item: recipes[recipeIndex] })
}