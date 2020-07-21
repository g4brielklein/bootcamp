// Baseado no desafio anterior, utilize a mesma lista de usuários construída.
const usuarios = [
    { nome: 'Carlos', tecs: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecs: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecs: ['HTML', 'Node.js'] }
]

for (let i = 0; i < usuarios.length; i++) {
    // console.log(`O usuário ${usuarios[i].nome} trabalha com ${usuarios[i].tecs.join(', ')}`)
}

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário 
// trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
// }

function buscaPorTecnologia(usuario) {

        for (let j = 0; j < usuario.tecs.length; j++) {
            // Vai passar por todas as tecs do usuário
            if (usuario.tecs[j] == 'CSS') {
                return true
            } else {
                return false
            }
        }

}

for (let i = 0; i < usuarios.length; i++) {
    const trabalhaComCSS = buscaPorTecnologia(usuarios[i])
    if (trabalhaComCSS) {
        // console.log(`O usuário(a) ${usuarios[i].nome} trabalha com CSS`)
    }
}

if (buscaPorTecnologia(usuarios[0])) {
    console.log('true')
} else {
    console.log('false')
}


