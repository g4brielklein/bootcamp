// Crie um programa que calcula a soma de receitas e despesas de usuários
// e no fim retorna o saldo (receitas - despesas).

// Utilize o array de usuários abaixo:
const usuarios = [
    { nome: 'Salvio', receitas: [115.3, 48.7, 98.3, 14.5], despesas: [85.3, 13.5, 19.9] },
    { nome: 'Marcio', receitas: [24.6, 214.3, 45.3], despesas: [185.3, 12.1, 120.0] },
    { nome: 'Lucia', receitas: [9.8, 120.3, 340.2, 45.3], despesas: [450.2, 29.9] }
]

// Percorra o array de usuários e para cada usuário chame uma função chamada 
// calculaSaldo que recebe como parâmetro as receitas e despesas do usuário.

function calculaSaldo(usuario) {
    let receitaTotal = 0, despesaTotal = 0
    for (let receita of usuario.receitas) {
        receitaTotal = receitaTotal + receita
    }
    for (let despesa of usuario.despesas) {
        despesaTotal = despesaTotal + despesa
    }
    return receitaTotal - despesaTotal
}

for (let usuario of usuarios) {
    console.log(`${usuario.nome} possui ${calculaSaldo(usuario)}`)
}