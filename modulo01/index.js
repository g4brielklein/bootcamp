// Criar um programa que calcula a média
// das notas entre os alunos e envia
// uma mensagem do cáculo da média.

// Array de objetos
const alunosDaTurmaA = [
    // Objeto dentro do array
    {
        nome: 'Gabriel',
        nota: 9
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Mayk',
        nota: 9.8
    }
]

const nomesDeAlunos = ['Pam', 'Angela', 'Kelly']

const alunosDaTurmaB = [
    {
        nome: 'Michael',
        nota: 5.1
    },
    {
        nome: 'Dwight',
        nota: 5
    },
    {
        nome: 'Jim',
        nota: 9
    }
]

console.log(alunosDaTurmaB[2])

const media = (alunosDaTurmaA[0].nota + alunosDaTurmaA[1].nota + alunosDaTurmaA[2].nota) / 3
const mediaB = (alunosDaTurmaA[0].nota + alunosDaTurmaB[1].nota + alunosDaTurmaB[2].nota) / 3


// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor do que 5')
}

// console é um objeto, log é um metódo (funcionalidades dentro de um objeto se chamam métodos)
console.log()