console.log ('ATIVIDADE 1 ---------------')
let numMaiorQue10 = 0

do {
    numMaiorQue10 = parseInt (prompt('Digite um número Inteiro maior que 10: '))
} while (numMaiorQue10 < 10)

console.log ('ATIVIDADE 2 ---------------')
numerosUser = 0
somaNumerosUser = 0

do {
    numerosUser = parseInt (prompt ('Digite números: '))
    somaNumerosUser += numerosUser

} while (numerosUser != 0 && somaNumerosUser <= 100)
console.log (`A soma os números que você informou é: ${somaNumerosUser}`)

console.log ('ATIVIDADE 3 ---------------')

let numInteirosUser = 0
let numUserPositivo  = 0
let numUserNegativo = 0
let totalNumUser = 0

do {
    numInteirosUser = parseInt (prompt ('Digiite um número inteiro: '))
    if (numInteirosUser > 0) {
        numUserPositivo++
    }
    if (numInteirosUser < 0) {
        numUserNegativo ++
    }
    totalNumUser++
} while (numInteirosUser > 0)

console.log (`Você digitou ${totalNumUser} números.`)
console.log (`Você digitou ${numUserPositivo} números positivos.`)
console.log (`Você digitou ${numUserNegativo} números negativos.`)

console.log ('ATIVIDADE 4 ---------------')

let senhaUser = 0

do {
    senhaUser = parseInt (prompt ('Digite sua senha: '))
} while (senhaUser != 1234)

console.log ('Parabéns, você logou em sua conta!')

console.log ('ATIVIDADE 5 ---------------')
console.log ('A principal diferença do "do while" para o while é a inversão dos comandos, enquanto o while começa com um bloco já com a condição (enquanto tal condição for executada) o "do while" começa primeiro com a tarefa a ser executada e termina com a condição.')
console.log ('Hoje cometi o erro de declarar uma varável dentro do escopo do bloco do "do" e tentar usá-lo dentro do escopo do while, o que não funcionou obviamente.')
console.log ('O "do while" é a melhor escolha quando há a necessidade de executar a ação ao menos uma vez independentemente se a condição for verdadeira ou falsa.')


