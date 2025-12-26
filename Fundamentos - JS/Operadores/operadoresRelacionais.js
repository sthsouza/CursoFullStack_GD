//Retornam apenas valores boleanos

var num1 = 5
var num2 = 2

console.log(`-----------`)
var maiorQue = num1 > num2
console.log(`${num1} é maior que ${num2}?`)
console.log (maiorQue)

console.log(`-----------`)
var menorQue = num1 < num2
console.log(`${num1} é menor que ${num2}?`)
console.log (menorQue)

console.log(`-----------`)
var igual = num1 == num2
console.log(`${num1} é igual a ${num2}?`)
console.log (igual)

console.log(`-----------`)
var diferenteDe= num1 != num2
console.log(`${num1} é diferente de ${num2}?`)
console.log (diferenteDe)

console.log(`-----------`)
var menorIgual = num1 <= num2
console.log(`${num1} é igual ou menor que ${num2}?`)
console.log (menorIgual)

console.log(`-----------`)
const maiorIgual = num1 >= num2
console.log(`${num1} é igual ou maior que ${num2}?`)
console.log (maiorIgual)

console.log("Atividade 1 -------------")
const idadeCliente = 17
const idadeMinima = 18
const permissaoIdade = idadeCliente >= idadeMinima
console.log (`Você pode comprar o produto? ${permissaoIdade}`)

console.log("Atividade 2 -------------")
const limiteCredito = 500
const valorCompra = 300
const podeComprar = valorCompra <= limiteCredito
console.log (`Você pode comprar o produto? ${podeComprar}`)