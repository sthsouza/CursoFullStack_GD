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

//MAP

let listaAtualizada = recados.map (item => {
    return {
        id: item.id + 100,
        descricao: item.descricao,
        urgente: item.urgente
    }
})

console.log(listaAtualizada);

let listaAtualizada2 = recados.map (item => {
    return {
        idRecado: item.id + 100,
        descricao: item.descricao,
    }
})

console.log(listaAtualizada2);

let listaDescricoes = recados.map (item => item.descricao)
console.log(listaDescricoes);

//FOREACH
//Percorre item por item na lista mas não cria uma copia, sem trasnformar a lista em si

recados.forEach(item => {
    console.log(item);

});

//Se a lista for de objetos, posso alterra itens nela mesma udsano o foreach
recados.forEach(item => {
    item.id += 500
    console.log(item)
});


console.log('ATIVIDADE 1 ---------');
let produtos = [
    { nome: 'arroz', preco: 20 },
    { nome: 'Feijão', preco: 10 },
    { nome: 'Macarrão', preco: 8 },
    { nome: 'Açúcar', preco: 5 },
]

let produtosAtualizados = produtos.map (item => {
    return {
        nome: item.nome,
        preco: item.preco - (item.preco/100*10)
    }
})

console.log(produtosAtualizados);

console.log('ATIVIDADE 2 ---------');
let livros = [
    { titulo: 'O senhor do anéis', totalPaginas: 1000, paginasLidas: 320 },
    { titulo: '1984', totalPaginas: 328, paginasLidas: 100 },
    { titulo: 'O código da Vinci', totalPaginas: 96, paginasLidas: 50 },
]

let livrosPaginasQueFaltam = livros.map (item => {
    return {
        titulo: item.titulo,
        paginasQueFaltam: item.totalPaginas - item.paginasLidas
    }
})

console.log(livrosPaginasQueFaltam);

console.log('ATIVIDADE 3 ---------');
let convidados = ['João', 'Maria', 'Carlos']

convidados = convidados.forEach (item => {
    console.log(`Olá ${item}, sua presença foi confirmada com sucesso!`);
})

console.log(mensagemConfirmacao);





