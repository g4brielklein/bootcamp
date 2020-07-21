// Desafio 1-3: Funções e estruturas de repetição
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome 
// e suas tecnologias (novo array).

// Cria um array de objetos chamado 'usuarios'
const usuarios = [
    // Cria um objeto dentro do array, com nome e tecnologias, que é um novo array
    { nome: 'Carlos', tecs: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecs: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecs: ['HTML', 'Node.js'] }
]
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela 
// as informações dos usuários:

// * Método 1 *
// Percorre o array de usuários
for (let i = 0; i < usuarios.length; i++) {
    // Imprime a mensagem abaixo
    console.log(`O usuário(a) ${usuarios[i].nome} usa as tecnologias ${usuarios[i].tecs.join(', ')}`)
}

// * Método 2 *
// const tec_separator = ', '
// // Percorre o array de usuários
// for (let usuario of usuarios) {
//     // Imprime a mensagem abaixo
//     console.log(`O usuário(a) ${usuario.nome} usa as tecnologias ${usuario.tecs.join(`${tec_separator}`)}`)
// }
