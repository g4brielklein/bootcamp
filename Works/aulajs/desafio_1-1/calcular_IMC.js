// Desafio 1-1: Primeiros passos com JS

// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa.
const nome = 'Gabriel'
const peso = 80
const altura = 1.80

// A partir desses dados armazene em uma constante chamada imc 
// o cálculo do índice de massa corporal definido pela fórmula: peso / (altura * altura);
const imc = peso / ( altura * altura )

// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
} else {
    console.log(`${nome}, você não está acima do peso`)
}