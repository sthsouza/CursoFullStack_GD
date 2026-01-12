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

//JOIN - Serve para juntar os itens de uma lista em uma string
let clienteTexto = clientes.join('---')//pode ser qualquer coisa aqui!
console.log(clienteTexto);

let recadosTexto = recados
    .filter (item => item.urgente)
    .map (item => item.descricao)
    .join ('---')

console.log(recadosTexto);

//INCLUDES - Verfifica se algo está incluso
let existeClienetJoao = clientes.includes('João')
console.log(existeClienetJoao);

//REVERSE -  Inverte a ordem de uma lista
clientes.reverse()
console.log(clientes);

console.log('ATIVIDADE 1 -------');
let ingredientes = ['Farinha', 'Açúucar', 'Ovos', 'Leite', 'Manteiga']

let ingredientesTexto = ingredientes.join (', ')
console.log(ingredientesTexto);

console.log('ATIVIDADE 2 -------');
let jogadoresINscritos = ['Lucas', 'Mariana', 'Felipe', 'Tatiane', 'Roberto']
let jogadoresParaVerificar = 'Felipe'

let existeJogadorFelipe = jogadoresINscritos.includes(jogadoresParaVerificar)

console.log(existeJogadorFelipe);

console.log('ATIVIDADE 3 -------');
let tarefasDoCapeonato = [
    'Divulgar o evento',
    'Definir as equipes',
    'Comprar os prêmios',
    'Escolher o local do jogo',
    'Criar as regras do torneio'
]

tarefasDoCapeonato.reverse()
console.log(tarefasDoCapeonato);





