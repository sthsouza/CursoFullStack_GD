//'usado quando sabemos exatamente quanas vezes o bloco de código será repetido.

// for (inicialização; condicao; incremento) {

// }

for (let contador = 1; contador <= 5; contador++) {
    console.log (contador)
}

console.log ('------------------')
const frutas = ['Maça', 'Banana', 'Laranja', 'Uva', 'Abacate']

for (let contador = 0; contador < frutas.length; contador ++) {
    console.log (`Fruta ${contador + 1}: ${frutas[contador]}`)
}

console.log ('ATIVIDADE ------------')
const numMultiplicado = parseInt(prompt('OLá, inisra um número para ver a sua tabuada: '))

for (contador = 1; contador <= 10; contador++) {
    console.log (`${numMultiplicado} X ${contador} = ${numMultiplicado*contador}`)
}

//Na atividade é possivl substituir a variável "contador" por "i"