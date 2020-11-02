// Criar um programa que calcula a média
// das notas entre os alunos e envia
// uma mensagem do cáculo da média.

const aluno01 = 'Gabriel'
const notaAluno01 = 1.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor do que 5')
}