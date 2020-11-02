const nome = 'Gabriel'
const sexo = 'M'
const idade = 21
const contribuicao = 1

const soma = (idade + contribuicao) 

if ((sexo == 'M') && (contribuicao >= 35) && (soma >= 95)
 || (sexo == 'F') && (contribuicao >= 30) && (soma >= 85)) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`)
}