//&& - e - conjunção
// || - ou - disjunção
// ! - não - negação

console.log("Atividade 1 -------------")
const idadePessoa = 19
const podeVotar = idadePessoa >= 16 && idadePessoa < 18
console.log (podeVotar)
const deveVotar = idadePessoa > 18 && idadePessoa < 70
console.log (deve)

console.log("Atividade 2 -------------")
console.log ("Você tem acesso ao disconto?")
const clienteCompra = 102
const clienteVip = false
console.log ("-----------REGRAS----------")
console.log ("----- Ser cliente VIP------")
console.log ("-----------OU--------------")
console.log ("----- Sua compra ultrapassar o valor de R$100,00")
console.log ("---------------------")

const temDesconoto = clienteVip == true || clienteCompra >= 100
console.log (`Seu resultado: ${temDesconoto}`)
console.log ("---------------------")
console.log ("-------FALSE: Sem desconto")
console.log ("-------TRUE: Com desconto")