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

// Percorre o array de usuários
for (let usuario of  usuarios) {
    // Imprime a mensagem abaixo
    console.log(`O usuário(a) ${usuario.nome} usa as tecnologias ${usuario.tecs.join(', ')}.`)
}