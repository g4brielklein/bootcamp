// Operadores relacionais
console.log(5 > 4) // true
console.log(5 < 4) // false
console.log(5 >= 4) // true
console.log(4 <= 4) // true
console.log(4 == '4') // true
console.log(4 === '4') // false
console.log(4 != '5') // true
console.log(4 !== '5') // true

// Operadores lógicos
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log( 5 == 5 || 6 == 6 ) // true 
console.log( 5 == 5 || 6 != 6 ) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false

// Operadores ariméticos
console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0

// Desafio 1
const idade = 17
// Verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (idade >= 18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if (idade == 17) {
    console.log('Volte quando fizer 18 anos')
}

// Desafio 1 (utilizando operadores lógicos)
/*
if (!(idade >= 18) || (idade === 17)) {
    console.log('Bloquear a entrada')    
} else {
    console.log('Deixar entrar')
}
*/
