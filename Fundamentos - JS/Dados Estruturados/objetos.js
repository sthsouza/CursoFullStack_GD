//Tipo de dado que permita agrupar várias variáveis. Uma coleção ordenada de chave, valor e pares.

const carro = {
    marcaCarro: 'Toyota',
    modeloCarro: 'Corola',
    anoCarro: 2010
}

console.log(typeof carro)
console.log(carro)

//A comunidade gosta e usar camel case

const aviao = {}
aviao.ano = 2001
aviao.marca = 'Embraer'

//Nesse exemplo: aviao, é a vaiável; Ano, é a propriedade; 2001, é o valor.

console.log (aviao)

const tituloLivro = 'Crime e Castigo'
const autorLivro = 'Dostoievski'
const dataLivro = 1866

const livro = {
    tituloLivro,
    autorLivro,
    ano: dataLivro
}

console.log (livro)

//Se o nome da variavel for igual a da variavel no objeto, é possivel fazer a utilização da sintaxe curta, em que apenas se repete o nome da variável. como nos dois primeiros itens do objeto anterior

//para acessar valores em objetos há 2 opções:
const bebida = {
    marcaBebida: 'Fanta',
    saborBebida: 'Uva',
    dataValidade: 2025,
    id: 1
}

const key = 'id'

console.log(bebida)
//propriedade ponto
console.log('MArca da bebida: '+bebida.marcaBebida)

//Notação Conchetes
console.log('Sabor da bebida: '+bebida['saborBebida'])

//para alterar valores

bebida.dataValidade = 2026
console.log('A nova data de validade é: ' + bebida.dataValidade)

console.log('Ler propriedades dinamicas-----------')
console.log (bebida.key)
console.log(bebida[key])

console.log('ATIVIDADE /////////////////')

const aluno = {
    nomeAluno: 'Stheffany',
    idadeAluno: 15,
    notaAluno: 100,
    cursoAluno: 'Eletronica'
}

console.log(aluno)
console.log('Noem do aluno: ' + aluno.nomeAluno)
console.log ('Idade do aluno: ' + aluno.idadeAluno)
console.log ('Nota do aluno: ' + aluno.notaAluno)
console.log ('Curso do aluno: ' + aluno.cursoAluno)