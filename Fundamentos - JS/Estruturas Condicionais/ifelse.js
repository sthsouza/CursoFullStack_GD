const estaChovendo = true

if (estaChovendo) {
    console.log ("Está chovendo, é melhor levar o guarda chuva!")
}

const nome = 'Ana'
const email = ''

if (email == '' || nome == '') {
    console.log('Por favor insira a informação')
}


console.log ("ATIVIDADE 1 ---------")
const num = 44
if (num%2 ==0) {
    console.log ('Ebaa, seu número é par!!')
}

console.log ("ATIVIDADE 2 ------------")
const numNegativo = -21
if (numNegativo < 0) {
    console.log ('Eita, seu número é negativo!!')
}

console.log ("ATIVIDADE 3 ------------")
const valorReal = 1000
const limiteCredito = 100
if (valorReal > limiteCredito) {
    console.log ('Ooops, o valor excede o limite!!')
}

//-----------------------------

console.log ("--------ELSE-----------")

const estaEnsolarado = true

if (estaEnsolarado) {
    console.log ("Não precisa levar guarda chuva!")
} else {
    console.log ("Leve um guarda chuva")
}

const resultado = estaEnsolarado ? 'Não levar guarda chuva' : 'levar guarda chuva'

console.log (resultado)