//if else ou switch case?

console.log ('SWITCH CASE ---------')

const clima = 'nublado'
let mensagem

switch (clima) {
    case 'sol':
        mensagem = 'Aproveite o dia!'
        break
    case 'chuva':
        mensagem = 'Está chovendo, Pegue seu guarda-chuva!'
        break
    case 'nublado':
        mensagem = 'Está nublado, o tempo pode mudar!'
        break
    default:
        mensagem = 'Clima desconhecido!'
}
console.log (mensagem)

console.log ('ATIVIDADE 1 ----------')

let mensagemUser
const notaUser = prompt ('Insira sua nota (A, B, C, D, F): ')

switch (notaUser) {
    case 'A':
        mensagem = 'Excelente!'
        break
    case 'B':
        mensagem = 'Muito bom!'
        break
    case 'C':
        mensagem = 'Bom!'
        break
    case 'D':
        mensagem = 'Precisa melhorar.'
        break
    case 'F':
        mensagem = 'Reprovado.'
        break
    default:
        mensagem = 'Nota invalida.'
}

console.log (mensagem)

