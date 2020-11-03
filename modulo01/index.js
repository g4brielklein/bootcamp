// Criar um programa que calcula a média
// das notas entre os alunos e envia
// uma mensagem do cáculo da média.

const aluno01 = {
    nome: 'Gabriel',
    nota: 9
}

const aluno02 = {
    nome: 'Diego',
    nota: 10
}

const aluno03 = {
    nome: 'Mayk',
    nota: 9.8
}

const media = (aluno01.nota + aluno01.nota + aluno03.nota) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor do que 5')
}

// console é um objeto, log é um metódo (funcionalidades dentro de um objeto se chamam métodos)
console.log()