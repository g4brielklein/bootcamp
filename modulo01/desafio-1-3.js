// Desafio 1-3: Funções e estruturas de repetição

// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário 
// tem um nome e suas tecnologias (novo array).
const usuarios = [
    {
        nome: 'Dwight',
        tecnologias: ['JavaScript', 'React']
    },
    {
        nome: 'Michael',
        tecnologias: ['PHP', 'Laravel']
    },
    {
        nome: 'Jim',
        tecnologias: ['HTML', 'CSS']
    }
]

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

console.log('==================================')
// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o 
// usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
function checaSeTrabalhaComCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }

    return false
}

// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS 
// utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
for (let usuario of usuarios) {
    if (checaSeTrabalhaComCSS(usuario)) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS!`)
    }
}

console.log('==================================')
// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
// Utilize o array de usuários abaixo:
const clientes = [
    {
        nome: 'Pam',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Oscar',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Ryan',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    },
    {
        nome: 'Andrew',
        receitas: [1200],
        despesas: [1200]
    }
]

// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo 
// que recebe como parâmetro as receitas e despesas do usuário:

let saldo = 0

for (let cliente of clientes) {
    saldo = calculaSaldo(cliente.receitas, cliente.despesas)

    if (saldo > 0) {
        console.log(`${cliente.nome} possui saldo POSITIVO de ${saldo}`)
    }

    if (saldo < 0) {
        console.log(`${cliente.nome} possui saldo NEGATIVO de ${saldo}`)
    }

    if (saldo == 0) {
        console.log(`${cliente.nome} não possui nenhum saldo.`)
    }
}

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    saldo = somaReceitas - somaDespesas
    
    return saldo.toFixed(2)
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles 
// e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas 
// e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.
// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO.