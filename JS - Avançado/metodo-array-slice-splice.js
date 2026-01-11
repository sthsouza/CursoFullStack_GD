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

//SLICE recebe dois parametros, inicial e final
let recadosRestantes = recados.slice(1)
console.log(recadosRestantes);
///A LISTA ORIGINAL ---NÃO---É ALTERADA


//SPLICE
//altera a lista original
//2 parametros: posição inicial e quantos elementos eu quero remover
recados.splice (0, 2)
console.log(recados);

let elementoRemovido = recados.splice (2, 1)
console.log(elementoRemovido);


console.log('ATIVIDADE 1 ---------');
let frutas = ['Maça', 'Banana', 'Laranja', 'Uva', 'Abacaxi']
frutas.splice (3)
console.log(frutas);

console.log('ATIVIDADE 2 ---------');
let tarefas = ["Estudar para a prova", "Revisar os exercícios", 'Assistir as aulas', 'Ler um livro']

let tarefasRestantes = tarefas.slice (2)
console.log(tarefasRestantes);

tarefas.splice (0, 2)
console.log(tarefas);


