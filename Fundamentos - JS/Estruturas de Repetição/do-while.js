//mesmo que a condição seja falsa, o bloco 'do' sempre será excutado ao menos uma vez.

console.log('DO WHILE ----------')
let contador = 1

do {
    console.log (contador)
    contador++
} while (contador <=5)

console.log ('---------------')
let totalidades = 0
let somaIdades = 0
let maioresDe21 = 0

let continuar

do {
    const idade = parseInt (prompt('Digite uma idade: '))
    totalidades++
    somaIdades += idade

    if (idade >= 21) {
        maioresDe21++
    } 

    continuar = confirm ('Deseja continuar digitando idades?')
} while (continuar)

console.log ('--------------')

const mediaIdades = somaIdades/totalidades
console.log (`A média das idades digitadas são de: ${mediaIdades}`)
console.log (`Soma das idades digitadas: ${somaIdades}`)
console.log (`Idades maiores de 21 anos: ${maioresDe21} idades!`)
console.log (`Total de idades digitadas: ${totalidades}`)

console.log ('------------------')
console.log ('ATIVIDADES DO WHILE --------------')

let somaNumeros = 0
let numPositivo = 0

do {
    numPositivo = parseInt (prompt ('Olá, digite um número inteiro positivo: '))
    
    if (numPositivo > 0) {
        somaNumeros += numPositivo
    }

} while (numPositivo > 0)

console.log ('Parece que você digitou um número que não é positivo! Aqui está soma de todos os números positivos que você digitou: ')
console.log (`A soma é de: ${somaNumeros}`)