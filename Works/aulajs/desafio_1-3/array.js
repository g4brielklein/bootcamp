// Desafio 1-3: Funções e estruturas de repetição
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome 
// e suas tecnologias (novo array).

const usuarios = [
    { nome: 'Carlos', tecs: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecs: ['JavaScript','CSS'] },
    { nome: 'Tuane', tecs: ['HTML', 'Node.js'] }
]

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela 
// as informações dos usuários:

for ( let i = 0; i < usuarios.length; i++ ) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecs.join(', ')}`)
}
