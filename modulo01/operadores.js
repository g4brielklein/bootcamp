// Operadores de comparação
/*
console.log( 4 == "4" ) // true
console.log( 4 === "4" ) // false
console.log( 4 != "5" ) // true
console.log( 4 !== "5" ) // true
console.log( 4 !== "4" ) // false
*/

/*
const idade = 21

if (idade >= 18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}

if (idade == 17) {
    console.log('Volte quando fizer 18 anos')
}
*/

// Operadores lógicos 
console.log(5 == 5 && 6 == 6)
console.log(5 == 5 && 6 != 6)

console.log(5 != 5 || 6 == 6)
console.log(5 == 5 || 6 != 6)

console.log(!(5 > 6))
console.log(!(5 < 6))

const idade = 21

if (!(idade >= 18 || idade == 17)) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

// Operadores aritméticos
console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0