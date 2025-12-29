console.log ('---------VERIFICADOR DE NOTAS---------')
const suaNota = prompt ('Insira sua nota (apenas números): ')

if (suaNota < 50) {
    console.log ('Você foi REPROVADO!')
} else if (suaNota >= 50 && suaNota <= 69) {
    console.log ('Você está em RECUPERAÇÃO!')
} else if (suaNota >= 70 && suaNota <= 89) {
    console.log ('Você foi APROVADO!')
} else {
    console.log ('Você foi APROVADO com EXCELÊNCIA!')
}

console.log ('ATIVIDADE 1 -------------')
let valorProduto = Number(prompt ('Insira aqui o valor o produto: '))

if (valorProduto < 100) {
    console.log ('Sem desconto :(')

} else if (valorProduto >= 100 && valorProduto < 500){
    let produtoDesconto = valorProduto -  (valorProduto*0.1)
    console.log (`Você recbeu 10% de desconto, o valor final do produto é de: R$${produtoDesconto.toFixed(2)}`)

} else if (valorProduto > 500) {
    let produtoDesconto = valorProduto -  (valorProduto*0.2)
    console.log (`Você recbeu 20% de desconto, o valor final do produto é de: R$${produtoDesconto.toFixed(2)}`)

} else {
    console.log ('Por favor, insira um valor numérico válido!')
}