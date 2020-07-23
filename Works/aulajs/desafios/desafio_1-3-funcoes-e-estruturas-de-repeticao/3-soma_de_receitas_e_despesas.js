// Crie um programa que calcula a soma de receitas e despesas de usuários
// e no fim retorna o saldo (receitas - despesas).

// Cria o array de usuários
const usuarios = [
    // Insere um usuário no array
    { nome: 'Salvio', receitas: [115.3, 48.7, 98.3, 14.5], despesas: [85.3, 13.5, 19.9] },
    { nome: 'Marcio', receitas: [24.6, 214.3, 45.3], despesas: [185.3, 12.1, 120.0] },
    { nome: 'Lucia', receitas: [9.8, 120.3, 340.2, 45.3], despesas: [450.2, 29.9] }
]

// Percorra o array de usuários e para cada usuário chame uma função chamada 
// calculaSaldo que recebe como parâmetro as receitas e despesas do usuário.
function calculaSaldo(receitas, despesas) {
    const receitaTotal = somaNumeros(receitas)
    const despesaTotal = somaNumeros(despesas)

    return receitaTotal - despesaTotal
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a 
// para calcular a soma de receitas e despesas dentro da função calculaSaldo.
// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e 
// despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// Cria uma função para somar os numeros recebidos pela função calculaSaldo(receitas e despesas do usuário)
function somaNumeros(numeros) {
    // Cria um variável para armazenar a soma dos numeros recebidos na função
    let soma = 0
    // Percorre o array de numeros
    for (let numero of numeros) {
        // Soma todos os numeros do array
        soma = soma + numero
    }
    // Retorna a soma dos numeros do array
    return soma
}

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO.
// Percorre o array de usuários
for (let usuario of usuarios) {
    // Cria uma constante para armazenar o saldo do usuário
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    // Verifica se o saldo do usuário é positivo ou negativo
    if (saldo > 0) {
        // Se for positivo, exibe a mensagem abaixo
        console.log(`${usuario.nome} possui saldo POSITIVO de R$ ${saldo}`)
    } else {
        // Se for negativo, exibe a mensagem abaixo
        console.log(`${usuario.nome} possui saldo NEGATIVO de R$ ${saldo}`)
    }
}