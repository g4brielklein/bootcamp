console.log(4 == "4") // true
console.log(4 === "4") // false
console.log(4 != "5") // true
console.log(4 !== "5") // true

//Desafio 1
//Verificar se a pessoa é maior de idade
const idade = 20
if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5>6)) // true
console.log(!(5 < 6)) // false

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0
