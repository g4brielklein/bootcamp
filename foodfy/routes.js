const express = require('express')
const routes = express.Router()
const user = require('./controllers/user')
const recipes = require('./controllers/recipes')

routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipe/:id', user.recipesIndex)

routes.get('/admin/recipes', recipes.index); // Mostrar a lista de receitas
routes.get('/admin/recipes/create', recipes.create); // Mostrar formulário de nova receita
routes.get('/admin/recipe/:id', recipes.show); // Exibir detalhes de uma receita
routes.get('/admin/recipe/:id/edit', recipes.edit); // Mostrar formulário de edição de receita

routes.post('/admin/recipes', recipes.post); // Cadastrar nova receita
routes.put('/admin/recipes', recipes.put); // Editar uma receita
routes.delete('/admin/recipes', recipes.delete); // Deletar uma receita

module.exports = routes