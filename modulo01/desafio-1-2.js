// Desafio 1-2: Lidando com objetos e vetores

// Crie um programa que armazena dados da empresa Rocketseat 
// dentro de um objeto chamado empresa. 
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em 
    ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Crie um programa com um objeto para armazenar dados de um programador como nome, 
// idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, 
// por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade.
const programador = {
    nome: 'Gabriel',
    idade: 21,
    tecs: [
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        },
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'C++',
            especialidade: 'Desktop'
        }
    ]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} 
    anos e usa a tecnolgia ${programador.tecs[0].nome} com especialidade em 
        ${programador.tecs[0].especialidade}`)