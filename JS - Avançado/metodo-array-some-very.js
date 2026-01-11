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

//SOME ENCONTRA PELO MENOS UMA OCORRENCIA
let existeRecadoUrgente = recados.some((item) => item.urgente);
console.log(existeRecadoUrgente);
let existeRecadoJavaScript = recados.some(item => item.descricao.includes ('JavaScript'))
console.log(existeRecadoJavaScript);

//every - REFERENTE A TODAS AS OCORRENCIAS
let todosRecadosSaoUrgentes = recados.every(item => item.urgnte)
console.log(todosRecadosSaoUrgentes);

console.log('ATIVIDADE 1 -----------');
let pessoas = [
    { nome: 'Lucas', idade: 16 },
    { nome: 'Andressa', idade: 43 },
    { nome: 'João', idade: 1 },
    { nome: 'Vitor', idade: 25 },
    { nome: 'Maria', idade: 8 }
]

let pessoaAdulta = pessoas.some (pessoa => pessoa.idade > 18)
console.log(pessoaAdulta);

console.log('ATIVIDADE 2 -----------');
let tarefasEstudos = [
    { descricao: 'Estudar Matemática', concluido: true },
    { descricao: 'Revisar Física', concluido: true },
    { descricao: 'Fazer exercicios de quimica', concluido: true },
    { descricao: 'Ler capitulo de biologia', concluido: false }
]

let tarefasEstaoConcluidas = tarefasEstudos.every (item => item.concluido)
if (tarefasEstaoConcluidas) {
    console.log('Todas as tarefas estão concluidas!');
} else {
    console.log('Ainda há tarefas pendentes.');
    
}




