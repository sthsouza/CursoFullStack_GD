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

let clientes = ['João', 'Maria', 'Fernanda', 'Pedro']

// //SORT  - Modifica a ordem da lista
// clientes.sort();
// //Quando não definimos nehhum parametros ele é ordenando de maneira crescente
// console.log(clientes);

//ordem crescente
clientes.sort((a, b) => {
    //Retorna -1, 0, 1

    if(a < b) {
        return -1
    }
    if (a == b) {
        return 0
    }
    if (a > b) {
        return 1
    }
})

//ordem decrescente
clientes.sort((a, b) => {
    //Retorna -1, 0, 1

    if(a > b) {
        return -1
    }
    if (a == b) {
        return 0
    }
    if (a < b) {
        return 1
    }
})

//Simplificado
clientes.sort((a, b) => {
    //Retorna -1, 0, 1

    if(a < b) {
        return -1
    } 
    
    return 1
    
})

console.log(clientes);

recados.sort ((a, b) => {
    if(a.id > b.id) {
        return -1
    }
    return 1
})

console.log(recados);

console.log('ATIVIDADE 1  -----');
let nomes = ['Carços', 'Ana', 'Mariana', 'Felipe', 'João']
nomes.sort ((a, b) => {
    if (a < b) {
        return -1
    }
    return 1
})
console.log(nomes);

console.log('ATIVIDADE 2  -----');
let clienteLista = [
    { nome: 'Pedro', idade: 28 },
    { nome: 'Joana', idade: 25 },
    { nome: 'Maria', idade: 12 },
    { nome: 'Cleide', idade: 65 }
    
]

clienteLista.sort ((a, b) => {
    if (a.idade < b.idade) {
        return -1
    }
    return 1
})
console.log(clienteLista);




