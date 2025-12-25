let num1 = 6
let num2 = 2

console.log(`num1 = ${num1}`)
console.log(`num2 = ${num2}`)
console.log('---------')

console.log(`Soma: ${num1 + num2}`)
console.log('---------')

num1 -= num2
console.log(`Subtração: ${num1}`)

num1 = 6
num1 *= num2
console.log(`Multiplicação: ${num1}`)

num1 = 6
num1 /= num2
console.log(`Divisão: ${num1}`)

num1 = 6
num1 %= num2
console.log(`Resto da divisão: ${num1}`)

console.log('Atividade 1 ///////////')

let nomeCliente = prompt('Olá, insira seu nome:')
let saldoCliente = 1000
console.log(`${nomeCliente}, seu saldo é de ${saldoCliente}`)
console.log('-------------------------')

saldoCliente += 200
console.log(`${nomeCliente}, seu saldo é de ${saldoCliente}`)

console.log('Atividade 2 ///////////')
let qProduto = 50
console.log (`Estoque da loja: ${qProduto *= 5}`)