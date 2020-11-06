// Criar um programa que calcula a média
// das turmas de alunos e envia
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

const alunosDaTurmaB = [
    {
        nome: 'Michael',
        nota: 2.1
    },
    {
        nome: 'Dwight',
        nota: 1
    },
    {
        nome: 'Jim',
        nota: 9
    },
    {
        nome: 'Pam',
        nota: 10
    }
]

function calculaMedia(alunos) {
    let totalNotas = 0
    
    for (let i = 0; i < alunos.length; i++) {
        totalNotas = totalNotas + alunos[i].nota
    }
    return totalNotas / alunos.length
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} foi menor do que 5 :(`)
    }
}

enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')

// Marcar alunos como reprovado se a nota for menos
// do que 5, e, também, enviar uma mensagem.
function marcaComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviaMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} foi reprovado!`)
    }
}

function alunoReprovado(turma) {
    for (let aluno of turma) {
        marcaComoReprovado(aluno)
        enviaMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)