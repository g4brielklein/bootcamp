exports.index = function (req, res) {
    return res.send('// Mostrar a lista de receitas')
}

exports.create = function (req, res) {
    return res.send('// Mostrar formulário de nova receita')
}

exports.show = function (res, res) {
    return res.send('// Exibir detalhes de uma receita')
}

exports.edit = function(req, res) {
    return res.send('// Mostrar formulário de edição de receita')
}