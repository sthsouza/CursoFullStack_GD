const horaDia = 12

if (horaDia >= 5 && horaDia <=11) {
    console.log ('Manhã')
} else if (horaDia >= 12 && horaDia <= 17) {
    console.log ('Tarde')
} else if (horaDia >= 18 && horaDia <= 22) {
    console.log ('Noite')
} else {
    console.log ('Hora inválida :(')
}

//é preferivel o if pois tm expressões booleanas

console.log ('ATIVIDADE 2-----------')
const corDefinida = 'vermelho'

switch (corDefinida) {
    case 'vermelho':
        console.log ('Você escolheu a cor da paixão.')
        break
    case 'azul':
        console.log ('Você escolheu a cr da tranquildade!')
        break
    case 'verde':
        console.log ('Você escolheu a cor da natureza.')
        break
    default:
        console.log ('Cor não encontrada!')
}

//Como vou testar o valor, uso o switch case