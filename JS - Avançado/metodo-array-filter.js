let numeros  = [1, 7, 19, 20, 6, 109, 77, 42, 6, 1.5, 200]

let numerosGrandes = numeros.filter((numero) => {
    // if (numero >= 20) {
    //     return true
    // } else {
    //     return false
    // }

    return numero > 20;
})

console.log(numeros);
console.log(numerosGrandes);

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

console.table (recados);

let recadosUrgentes = recados.filter((recado) => recado.urgente)

console.table(recadosUrgentes)


let recadosJavaScript = recados
    .filter((recado) => recado.descricao.includes('JavaScript'))
console.table(recadosJavaScript)

console.log('ATIVIDADE 1 ------------');
let numerosTodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosPares = numerosTodos.filter((numero) => numero %2 == 0)
console.log(numerosPares);


console.log('ATIVIDADE 2 ------------');
let nomes = ['João', 'Maria', 'Daphne', 'Pedro', 'João Pedro', 'Ana', 'José']
let nomesJoao = nomes.filter((nome) => nome.startsWith('João'))
console.log(nomesJoao);

console.log('ATIVIDADE 3 ------------');
let itens = [
    { nome: 'item 1', catgoria: 'Eletrônicos', urgente: 5 },
    { nome: 'item 2', catgoria: 'Livros', urgente: 3 },
    { nome: 'item 3', catgoria: 'Alimentos', urgente: 4 },
    { nome: 'item 4', catgoria: 'Roupas', urgente: 2 },
    { nome: 'item 5', catgoria: 'Ferramentas', urgente: 5 }
]

let itensIUrgentes = itens.filter ((item) => item.urgente >= 3)
console.log(itensIUrgentes);

console.log('ATIVIDADE 4 ------------');
let cidades = [
    { nome: 'POA', estado: 'RS'},
    { nome: 'Pelotas', estado: 'RS'},
    { nome: 'Caxias do Sul', estado: 'RS'},
    { nome: 'Curitiba', estado: 'PR'},
    { nome: 'Florianópolis', estado: 'SC'}
]

let cidadeSul = cidades.filter ((cidade) => cidade.estado == 'RS');
console.log(cidadeSul);

