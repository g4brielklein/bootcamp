// Desafio 1-3: Funções e estruturas de repetição

// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array).
const usuarios = [
    { nome: 'Michael', tecs: ['JavaScript', 'CSS'] },
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
    for (i = 0; i < usuario.tecs.length; i++) {
        if (usuario.tecs[i] == 'CSS') {
            return true
        }
    }
    return false
}

for (i = 0; i < usuarios.length; i++) {
    if (checaSeTrabalhaComCSS(usuarios[i])) {
        console.log('sim')
    } else {
        console.log('não')
    }
}