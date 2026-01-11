//Operações
let numero = 42
console.log (Math.pow(numero, 2)) //42 elevado ao quadrado
console.log (Math.sqrt(numero)) //Raiz quadrda de 42
console.log (Math.abs(-numero))

//Parsing
let decimal = parseFloat('10.5') //Transforma em number msm se tiver letras dps do number
console.log(decimal)
console.log(typeof decimal)

let inteiro = parseInt('300.7990')
console.log(inteiro) //Conversão de um numero para inteiro
console.log(typeof inteiro) //Transforma em number msm se tiver letras dps do number

let numeroReal = Number('9.5')
console.log (numeroReal)
console.log (typeof numeroReal)
//Se assemelha mais ao parseFloat, mas se tiver letras na string já não reconhece como number

//verficações
console.log (Number.isInteger(inteiro))
console.log (Number.isInteger(decimal))
console.log (Number.isNaN(numeroReal))

//arredondamento
let taxaDeJuros = 1.89898983337
console.log(taxaDeJuros);
console.log(Math.floor(taxaDeJuros)); //arredonda sempre para baixo
console.log(Math.ceil(taxaDeJuros)) //arredonda sempre para cima
console.log(Math.round(taxaDeJuros)); //Arredonda para o numero mais próximo

//Conversão
console.log(taxaDeJuros.toString()); //Transforma em string
console.log(taxaDeJuros.toFixed(3)); //Transforma em String mas com a quantidade de casas decimais definida
console.log(taxaDeJuros.toPrecision(5)); //Mostra exatamente X digitos no total

//MAX E MIN
let nota1 = 9
let nota2 = 7.5
let nota3 = 8

let maiorNota = Math.max(nota1, nota2, nota3)
console.log (maiorNota)

let menorNota = Math.min(nota1, nota2, nota3)
console.log(menorNota);

//Random
let aleatorio = Math.random() //Entre 0 e 1
console.log(aleatorio);

let aleatorioEntre0e100 = (aleatorio * 1000) % 100
console.log(aleatorioEntre0e100);

console.log('ATIVIDADE 1 -------------');
let numProjeto = 5
let numPotencia = 3
console.log(Math.pow(numProjeto, numPotencia));

console.log('ATIVIDADE 2 -------------');
let idadeFormulario = parseInt('25 anos')
console.log(idadeFormulario);
console.log(typeof idadeFormulario);

console.log('ATIVIDADE 3 -------------');
let numeroTaxaEmprestimo = 8.8989855655
console.log(numeroTaxaEmprestimo.toFixed(2));

console.log('ATIVIDADE 4 -------------');
const temperatura1 = 78
const temperatura2 = -4
const temperatura3 = 67

const maiorTemperatura = Math.max (temperatura1, temperatura2, temperatura3)
console.log(maiorTemperatura);











