console.log(4 == "4") // true
console.log(4 === "4") // false
console.log(4 != "5") // true
console.log(4 !== "5") // true

//DESAFIO 1
//Verificar se a pessoa é maior de idade
const idade = 17
if (idade >= 18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}
if (idade === 17) {
    console.log('Volte quando tiver 18')
}

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5>6)) // true
console.log(!(5 < 6)) // false
