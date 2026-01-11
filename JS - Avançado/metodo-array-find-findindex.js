let recados = [
    {
        id: 312,
        descricao: 'Estudar JavaScript',
        urgente: true
    },
    {
        id: 412,
        descricao: 'Fazer os execicios',
        urgente: true
    },
    {
        id: 89,
        descricao: 'Entender listas',
        urgente: false
    },
    {
        id: 2,
        descricao: 'Comparar JavaScript com Python',
        urgente: false
    }
];

let recadoListas = recados.find (item => item.id === 89);
console.log(recadoListas);

let recadoUrgente = recados.find (item => item.urgente);
console.log(recadoUrgente);
//Sempre retorna no máximo um registo, mesmo que a condição atenda a mais que um registro

let recadoInexistente = recados.find (item => item.id == 2)//999)
console.log(recadoInexistente);

// if (!recadoInexistente) {
//     alert ('Erro: O recado não existe!')
// }

//FINDINDEX
//Acha a posição

let posicaoRecadoLista = recados.findIndex (item => item.id === 2 )
console.log(posicaoRecadoLista);

let posicaoRecadoInexistente = recados.findIndex (item => item.id == 99)
console.log(posicaoRecadoInexistente);
  
// if (posicaoRecadoInexistente < 0) {
//     alert('Eita, deu erro! Esse item não existe, assim como sua vontade de levantar da cama em plena segunda para trabalhar ;)')
// }

console.log(recados[posicaoRecadoLista].descricao);


console.log('ATIVIDADE 1 -----');
const numeros = [1, 3, 7, 8, 9, 12, 20, 21]
let primeiroNumeroPar = numeros.findIndex (numero => numero %2 == 0)
console.log(primeiroNumeroPar);

console.log('ATIVIDADE 2 -----');
const produtos = [
    { nome: 'caneta', preeco: 5, estoque: 6 },
    { nome: 'caderno', preeco: 20, estoque: 20 },
    { nome: 'Mochila', preeco: 150, estoque: 2 },
    { nome: 'Borracha', preeco: 3, estoque: 1 },
    { nome: 'Lápis', preeco: 2, estoque: 12 }
]

let primeiroProdutoCaro = produtos.find (produto => produto.preeco >= 100)
console.log(primeiroProdutoCaro);

let primeiroProdutoSemEstoque = produtos.find (produto => produto.estoque == 0)
console.log(primeiroProdutoSemEstoque)
if (!primeiroProdutoSemEstoque) {
    alert('Produto não encontrado!')
};

let primeiroProdutoComEstoque10 = produtos.find (produto => produto.estoque >= 10)
console.log(primeiroProdutoComEstoque10);









