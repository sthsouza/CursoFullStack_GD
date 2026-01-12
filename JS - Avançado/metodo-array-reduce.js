const listaDeCompras = [
    { id: 55, descricao: 'Arroz', valor: 20.0, categoria: 'Alimentação'},
    { id: 90, descricao: 'Feijão', valor: 10.0, categoria: 'Alimentação'},
    { id: 74, descricao: 'Macarrão', valor: 8.5, categoria: 'Alimentação'},
    { id: 11, descricao: 'Óleo', valor: 12.0, categoria: 'Bazar'},
]

//Reduz uma lista a um outro valor
//reduzo a lista a um valor numerico, por exemplo
//Ou um objeto

let soma = listaDeCompras
    .reduce((somaAtual, item) => {
        return somaAtual + item.valor
    }, 0)

console.log(soma);

//rece 2 parametros. a função e o valor inicial antes de ocmeçar as rodas de soma

let categorias = listaDeCompras.reduce ((atual, item) => {
    if(!atual[item.categoria]) {
        atual[item.categoria] = []
    }

    atual[item.categoria].push(item)
    return atual;
}, {})

console.log(categorias);

console.log('ATIVIDADE 1 ------');
let vendas = [150.75, 200.5, 50.25, 80.0, 120];
let totalVendas = vendas.reduce ((total, item) => {
    return total + item
}, 0);
console.log(totalVendas);


console.log('ATIVIDADE 2 ------')
let pontosJogadores = [
    { jogador: 'Pedro', pontos: 20 },
    { jogador: 'Maria', pontos: 50 },
    { jogador: 'Cleide', pontos: 5 },
    { jogador: 'Pedro', pontos:  150 },
    { jogador: 'Maria', pontos: 298 }
]

let somaPontosPartidas = pontosJogadores
    .reduce((somaAtual, item) => {
        return somaAtual + item.pontos
    }, 0)

console.log(somaPontosPartidas);

