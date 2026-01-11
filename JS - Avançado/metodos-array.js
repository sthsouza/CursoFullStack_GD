let listaCompras = ['arroz', 'feijão', 'pão']
console.table(listaCompras);

//Adição de itens na lista
let tamanho = listaCompras.push('água', 'café') //No final
console.table(listaCompras)
console.log(tamanho); 

listaCompras.unshift('queijo')
console.table(listaCompras)

console.log(listaCompras.length);

//Remover itens de uma lista
listaCompras.pop(); //Remove o ultimo iten da lista
console.table(listaCompras)
//também retorna o elemento removido
let itemRemovido =  listaCompras.pop(); //R
console.log(itemRemovido)

//alert(`O elemento ${itemRemovido} foi removido!`)

listaCompras.shift(); //Remove o primeiro item
console.table(listaCompras);

console.log('ATIVIDADE 1 --------------');
let listaDeCompras = ['arroz', 'feijão', 'carne']
listaDeCompras.push('água')
listaDeCompras.unshift('maça')
console.table (listaDeCompras)

console.log('ATIVIDADE 2 --------------');
let frutas = ['maçã', 'banana', 'laranja']
frutas.pop();
console.table(frutas)

console.log('ATIVIDADE 3 --------------');
let EstanteDeLivros = ['Game Of Trones', 'Harry Potter','O código da Vinci']
EstanteDeLivros.shift();
console.table(EstanteDeLivros)
