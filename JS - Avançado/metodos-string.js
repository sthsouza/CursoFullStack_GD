let nome = '    Paulo Cardoso   '
console.log (nome)
console.log (nome.trim())
console.log (nome.trimEnd())
console.log (nome.trimStart())

let titulo = 'Práticas avançadas em JS!!!'
console.log (titulo.toUpperCase())
console.log (titulo.toLowerCase())

let tituloPython = titulo.replace('JS', 'Python')
console.log (tituloPython)

let tituloSemLetraA = titulo.replaceAll('a', 'x')
console.log (tituloSemLetraA)
//O replace substitui apenas a primeira ocorrencia! Para substituir todas as ocorrencias, usamos relaceAll

console.log ('INDICES -----------')
let posicaoIndex = titulo.indexOf('JS');
console.log (posicaoIndex)

console.log ('SUBSTRINGS -----------')
let subtitulo = titulo.substring(posicaoIndex)
console.log (subtitulo)

subtitulo = titulo.slice(posicaoIndex)
console.log(subtitulo)

console.log (' -----------')
let nomeCliente = 'Maria Joana';
console.log(nomeCliente)
console.log(nomeCliente.startsWith('Maria'))
console.log(nomeCliente.startsWith('Joana'))
console.log(nomeCliente.endsWith('Joana'))
console.log(nomeCliente.includes('Silva'))

let clienteSiva = nomeCliente.includes ('da Silva')
if (clienteSiva) {
    console.log ('Você é um silva!')
} else {
    console.log ('Não é silva!')
}

let disciplinas = 'frontend, banco de dados, backend'
let listaDisciplinas = disciplinas.split(', ')
console.log  (listaDisciplinas)
console.log (disciplinas)
console.log (listaDisciplinas [1])

disciplinas = disciplinas.concat(', react, python')
console.log (disciplinas)

console.log ('ATIVIDADE 1 ----------')
let nomeDoCliente = '      João    '
console.log (`Seu nome é: ${nomeDoCliente}`)
console.log (`OOps, vimos que seu nome contém vários espaços, aqui está a versão corrigida: ${nomeDoCliente.trim()}`)

console.log ('ATIVIDADE 2 ----------')
const nomeAluna = 'ANA'
console.log (`Nome da aluna em letras maiusculas: ${nomeAluna.toUpperCase()}`)

console.log ('ATIVIDADE 3 ----------')
const livroDoPaulo = 'O livro antigo foi revisado. A capa do livro antigo também foi revisada!'
console.log (livroDoPaulo.replaceAll('antigo', 'novo'))

console.log ('ATIVIDADE 4 ----------')
const resposta1 = 'Resposta: A capital do Brasil é Brasilia.'
const resposta2 = 'Mnha resposta: A capital do Brasil é Brasilia.'
if (resposta1.startsWith('Resposta')){
    console.log('A resposta 1 começa com a palavra "Resposta"')
} else {
    console.log ('A Resposta 1 não começa com a palavra "Resposta"')
}
if (resposta2.startsWith('Resposta')){
    console.log('A resposta 2 comça com a palavra "Resposta"')
} else {
    console.log ('A Resposta 2 não começa com a palavra "Resposta"')
}

console.log ('ATIVIDADE 5 ----------')
let saudacaoUser = 'Olá, como vai'
saudacaoUser = saudacaoUser.concat('!')
console.log(saudacaoUser)

