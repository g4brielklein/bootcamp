// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Cria um array de objetos chamado 'usuarios'
const usuarios = [
    // Cria os objetos dentro do array
    { nome: 'Carlos', tecs: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecs: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecs: ['HTML', 'Node.js'] }
]

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário 
// trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:
// function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
// }

// * Método 1 * 

// * Funcão explicada passo a passo *
// Cria a função recebendo um usuario
function verificaSeUsuarioTrabalhaComCSS(usuario) {
    // Percorre o array de tecnologias do usuario
    for (let j = 0; j < usuario.tecs.length; j++) {
        // Verifica se entre as tecnologias existe 'CSS'
        if ( (usuario.tecs[j] == 'CSS') || (usuario.tecs[j] == 'css') ) {
            // Caso ache, retorna true da função, e encerra a mesma
            return true
        }
    }
    // Se passar por todo o array e não achar, retorna false e encerra a função
    return false
}

// // Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS
// //  utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.

// Percorre o array de usuários
for (i = 0; i < usuarios.length; i++) {
    // Chama a funcão que verifica se o usuário trabalha com CSS e recebe a resposta (true ou false)
    if (verificaSeUsuarioTrabalhaComCSS(usuarios[i])) {
        // Caso receba 'true', exibe a mensagem abaixo
        console.log(`O usuário(a) ${usuarios[i].nome} trabalha com CSS`)
    }
}

// * Método 2 *
// Cria uma função que verifica se o usuário trabalha com CSS e recebe um usuário
// function verificaSeOUsuarioTrabalhaComCSS(usuario) {
//     // Percorre o array de tecnologias do usuário
//     for (let tec of usuario.tecs) {
//         // Verifica se existe 'CSS' entre as tecnologias do usuário
//         if ( (tec == 'CSS') || (tec == 'css') ) {
//             // Se achar, retorna 'true', e encerra a função
//             return true
//         }
//     }
//     // Se percorrer o array de tecnologias e não houver 'CSS' retorna 'false' e encerra a função
//     return false
// }

// // Percorre o array de usuários
// for (let usuario of usuarios) {
//     // Verifica se o usuário trabalha com 'CSS' e retorna 'true' ou 'false'
//     if (verificaSeOUsuarioTrabalhaComCSS(usuario)) {
//         // Caso retorne 'true', exibe a mensagem abaixo
//         console.log(`O usuário(a) ${usuario.nome} trabalha com CSS`)
//     }
// }
