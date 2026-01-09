//mais concisa e moderna

// const somar = function (a, b) {
//     return a + b
// }

// const somar = (a, b) => {
//     return a + b
// }

// console.log (somar(3, 4))

// const somar = (a, b) => {
//   a + b
// }

const somar = (a, b) => a + b

console.log (somar(3, 4))

console.log ('-----')
const multiplicar = numero => numero+2
console.log (multiplicar(2, 3))

console.log ('---APENAS COM UM TERMO--')
const dizerOla = nome => `Olá, ${nome}!`
console.log (dizerOla('Mariah'))

console.log ('---SEM TERMOS--')
const boasVindas = () => 'Seja bem-vindo(a)!'
console.log (boasVindas())

console.log ('-----FUNÇÃO COMO PARAMETRO DE OUTRA FUNÇÃO-----')
function mostrarBoasVindas (gerarBoaMensagem) {
    const mensagem = gerarBoaMensagem('Mariana')
    console.log (mensagem)
}

mostrarBoasVindas(nome => `Bem-vindo(a) ${nome}!`)

console.log ('---FUNÇÃO IMEDIATAMENTE INVOCADA--');
(nome => {
    console.log(`Olá, ${nome}!`)
}) ('fernanda');

console.log ('------ATIVIDADE-------')
const calcularPrecoComDesconto = (precoOriginal, desconto) => {
    const precoFinal = precoOriginal - (precoOriginal*desconto/100)
    return precoFinal.toFixed(2)
    
}

console.log (calcularPrecoComDesconto(100, 10))