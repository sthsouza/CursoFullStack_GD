//Sei quantas vezes preciso repetir (iterações)?
    //SIM: Uso FOR
    //NÃO:
        //Vou precisar testar a condição antes de executar o trecho de código?
            //SIM: Uso WHILE
            //NÃO: Uso DO WHILE (Vai executar o código pelo menos uma vez)


console.log ('ATIVIDADE 1 ----------')
for (let i = 1; i <= 10; i++) {
    console.log (i)
}

console.log ('ATIVIDADE 2 ----------')
//Como eu fiz primeiramente
const palavraUser = 0

while (palavraUser != 'sair') {
    const palavraUser = prompt('Digite palavras (OBS: Para sair digite "sair"): ')

    if (palavraUser == 'sair') {
        break
    }
    console.log (`Palavra digitada: ${palavraUser}`)
}

//correção
let palavra = prompt ('Insira uma palavra: ')

while (palavra !== 'sair') {
    console.log (`Você digitou a palavra ${palavra}`)
    palavra = prompt ('Insira uma palavra: ')
}


console.log ('ATIVIDADE 3 ----------')
//Como fiz
let aceitoTermos

do {
    aceitoTermos = confirm (' -----TERMOS E CONDIÇÕES ------- Ao utilizar esta plataforma, o usuário declara ter lido, compreendido e aceito integralmente os presentes termos, comprometendo-se a utilizá-la de forma lícita, ética e compatível com a legislação vigente. O acesso e a permanência estão condicionados ao respeito às regras aqui estabelecidas, podendo a plataforma, a seu exclusivo critério, suspender ou encerrar contas que violem tais disposições, sem aviso prévio. Os conteúdos disponibilizados destinam-se exclusivamente ao uso pessoal e intransferível, sendo vedada sua reprodução, modificação ou distribuição sem autorização expressa. A plataforma não se responsabiliza por danos diretos ou indiretos decorrentes do uso inadequado, de falhas técnicas ou de indisponibilidade temporária dos serviços, reservando-se o direito de alterar estes termos a qualquer tempo.')

    if (aceitoTermos == true) {
        console.log ('Você aceitou os termos!')
    }

} while (aceitoTermos == false)

//correção
let confirmacao

do {
    confirmacao = prompt ('Digite "Aceito" para confirmar os termos: ')
} while (confirmacao !== 'Aceito')

console.log ('Você aceitou os termos!')

