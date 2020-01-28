// Desafio 01-1. Primeiros passos com JS

const nome = 'Gabriel'
const peso = 80
const altura = 1.80

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    if (imc < 29.9) {
        console.log(`${nome} você não está acima do peso`)
    }
}

const sexo = 'M'
const idade = 20
const contribuicao = 1

const soma = idade + contribuicao

if (sexo == 'M') {
    if (soma >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
} else {
    if (sexo == 'F') {
        if (soma >= 85) {
            console.log(`${nome}, você pode se aposentar!`)
        } else {
            console.log(`${nome}, você não pode se aposentar!`)
        }
    }
}
