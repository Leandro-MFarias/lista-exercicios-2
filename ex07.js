/*
  7. Mapeamento e Ordenação
  Dado um array produtos = [{ nome, preco }, …], crie uma função que
  retorne um novo array apenas com os nomes, ordenados por preço
  crescente, usando map, sort.
*/

const produtos = [
  {nome: "Teclado", preco: 1000},
  {nome: "PC", preco: 3000},
  {nome: "Jogo", preco: 300},
]

function orderedList(list) {
  let newArray = [...list]
  let ordered = newArray.sort((a, b) => a.preco - b.preco)
  let names = ordered.map(item => item.nome)
  
  return names
}

console.log(orderedList(produtos));