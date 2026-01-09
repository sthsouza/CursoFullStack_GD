//funções que não tem nome
//podemos atribuir uma função em uma variável

const multiplicar = function(a, b) {
    return a * b
}

// const resultado = multiplicar(4, 5)
// console.log (resultado)

console.log (multiplicar(4, 5))

//Também é possível usar uma função anonima como parametro de outra função

function exibirBoasVindas (gerarMensagem) {
    const mensagem = gerarMensagem('Maria')
    console.log (mensagem)
}

exibirBoasVindas(function(nome) {
    return `Boas-vindas, ${nome}`
} )

//A função anonima pode ser executada imediatamnte após a sua definição

(function() {
    const mensagemImediata = 'Função executa imediatamente'
    console.log (mensagemImediata)
}) ()
