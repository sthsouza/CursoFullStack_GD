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

console.log ("ATIVIDADE 1 ---------")

const nomePessoa = prompt("Olá, insira seu nome: ")
const idadePessoa = prompt ("Insira sua idade: ")
const numeroCompras = prompt ("Insira o númro de compras que fizeste até agora (Apenas números): ")
const membroVip = prompt ('É membro VIP (Coloque N para NÃo e S para SIM): ')

console.log (`Seu nome: ${nomePessoa}`)
console.log (`Sua idade: ${idadePessoa}`)
console.log (`Número de compras: ${numeroCompras}`)
console.log (`É membro VIP: ${membroVip}`)

const resultadoPremio = (idadePessoa >= 18 && numeroCompras >= 5) ||membroVip == 'S' ? 'Eba, você pode retirar o prêmio!' : 'Ooops, você não poded retirar o prêmio!'

console.log (resultadoPremio)

console.log ("ATIVIDADE 2 ---------")
const idadeMotorista =  prompt ('Sua idade (apenas números): ')
const carteiraHabilitcao = prompt ('Possui carteira de habilitação? S para SIM e N para NÃO: ')

const podeDirigir = idadeMotorista >= 18 && carteiraHabilitcao == 'S' ? 'Você pode dirigir.' : 'Você não pode dirigir.'

console.log (podeDirigir)