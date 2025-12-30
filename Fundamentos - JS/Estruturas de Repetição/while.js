// let contador = 1

// while (contador <= 5) {
//     console.log (contador)
//     contador++
// }

// o math random dsponibiliza numeros aleatórios de 0 a 1. O floor arredonda os números para baixo (ex: 0.20 = 0). Multiplicamos isso tudo por 10 para qu tenhamos um resultado entre 1 e 10. Como o math random não inclui o 1, adicionamos o +1 no final

// const numeroAleatorio = Math.floor(Math.random() * 10 +1 )
// let tentativas = 0

// let acertou = false

// while (!acertou) {
//     const numGuess = parseInt(prompt ('Insira o seu palpite (Um número entre 1 e 10): '))
//     tentativas ++

//     if (numGuess == numeroAleatorio) {
//         console.log (`Parabéns, você acertou o número depois de ${tentativas} tentativas!`)
//         acertou = true
//     } else {
//         alert('Tente novamente!') 
//     }
// }

console.log ('ATIVIDADE ----------')

let numUser = parseInt (prompt ('Insira um número inteiro positivo: '))

if (numUser > 0) {
    while (numUser >= 0) {
     console.log (numUser)
     numUser--
    }

    console.log ('Eba, contagem finalizada!')
} else {
    console.log ('Por favor, digite um número válido!')
}

// O jeito acima é o que fiz depois da correção, já o abaixo é a minha lógica inicial.

//let numUser = parseInt (prompt ('Insira um número inteiro positivo: '))

// while (numUser >= 0) {
    // console.log (numUser)
    // numUser--
    
//     if (numUser < 0) {
//         console.log ('Contagem finalizada!')
//     }
// }