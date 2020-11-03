// Desafio 1-1: Primeiros passos com JS

// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
/*
const nome = 'Gabriel'
const peso = 82
const altura = 1.80

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
} else {
    console.log(`${nome}, você não está acima do peso`)
}
*/

// Crie um programa para calcular a aposentadoria de uma pessoa.
const nome = 'Gabriel'
const sexo = 'M'
const idade = 21
const contrib = 1

const somaIdadeContrib = idade + contrib

if ((sexo == 'M' && contrib >= 35 && somaIdadeContrib >= 95)
|| (sexo == 'F' && contrib >= 30 && somaIdadeContrib >= 85)) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
   console.log(`${nome}, você ainda não pode se aposentar!`)
}