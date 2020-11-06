// Desafio 1-3: Funções e estruturas de repetição

// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array).
const usuarios = [
    { nome: 'Michael', tecs: ['JavaScript', 'React'] },
    { nome: 'Dwight', tecs: ['PHP', 'Laravel'] },
    { nome: 'Jim', tecs: ['HTML', 'CSS'] }
]

// Percorra a lista de usuários com uma estrutura de repetição 
// imprimindo em tela as informações dos usuários:

// for (i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecs.join(', ')}`)
// }

// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna 
// SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
function checaSeTrabalhaComCSS(usuario) {
    for (let i = 0; i < usuario.tecs.length; i++) {
        if (usuario.tecs[i] == 'CSS') {
            return true
        }
    }
    return false
}

for (let j = 0; j < usuarios.length; j++) {
    if (checaSeTrabalhaComCSS(usuarios[j])) {
        // console.log(`O usuário ${usuarios[j].nome} trabalha com CSS!`)
    }
}

// Crie um programa que calcula a soma de receitas e despesas de usuários 
// e no fim retorna o saldo (receitas - despesas).
const funcionarios = [
    { nome: 'Pam', receitas: [115.3, 48.7, 98.3, 14.5], despesas: [85.3, 13.5, 19.9] },
    { nome: 'Oscar', receitas: [24.6, 214.3, 45.3], despesas: [185.3, 12.1, 120.0] },
    { nome: 'Ryan', receitas: [9.8, 120.3, 340.2, 45.3], despesas: [450.2, 29.9] }
]

// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que 
// recebe como parâmetro as receitas e despesas do usuário:
for (let k = 0; k < funcionarios.length; k++) {
    const saldo = (calculaSaldo(funcionarios[k].receitas, funcionarios[k].despesas))
    if (saldo >= 0) {
        console.log(`${funcionarios[k].nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${funcionarios[k].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}


function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumeros(receitas)
    const totalDespesas = somaNumeros(despesas)

    const saldo = totalReceitas - totalDespesas

    return saldo
}

function somaNumeros(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    return soma
}