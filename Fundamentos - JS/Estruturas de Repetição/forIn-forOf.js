const pessoa = {
    nome: 'Ana',
    idade: '30',
    profissao: 'Dev'
}

// for (const chave in objeto) {

// }

for (const propriedade in pessoa) {
    console.log (`${propriedade}: ${pessoa[propriedade]}`)
}

//o for in é usado para percorrer as propriedades de um objeto. Percorre os nomes, não os valores

// FOR OF

//percorre elementos de um array, ideial para quando precisamos acessar diretamente os valores de um array
 
//for (const valor of array) {
    //trecho código
//}

const numeros = [1, 2, 3, 4, 5]

for (const numero of numeros) {
    console.log (numero + 2)
}

console.log ("ATIVIDADE 1 ------------")
const anosEmQueBrasilGanhouCopa = [1959, 1962, 1994, 2002]

for (const anoEmQueBrasilGanhouCopa of anosEmQueBrasilGanhouCopa) {
    console.log (`O Brasil ganhou a copa de ${anoEmQueBrasilGanhouCopa}`)
}

console.log ("ATIVIDADE 2 ------------")

const original = {
    nome: 'Beatriz',
    idade: 59,
    cidade: 'Alphaville'
}

const copia = {}

for (const chave in original) {
    copia[chave] = original [chave]
}

 console.log (copia)
