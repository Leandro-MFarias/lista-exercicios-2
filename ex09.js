/* 
  9. Conversão Entre Formatos
  Escreva duas funções:
    1. paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
    2. objetoParaPares(obj) faz o inverso, retornando um array de pares.
*/

const pares = [
  ["nome", "Leandro"],
  ["nome1", "Joe"],
  ["nome2", "Doe"],
]

let obj = {}

function paresParaObjeto(pares) {
  obj = Object.fromEntries(pares)
  return obj
}

console.log("Array para Objeto", paresParaObjeto(pares));

// OBJETO PARA ARRAY 

function objetoParaPares(obj) {
  const arr = Object.entries(obj)
  return arr
}

console.log("Objeto para Array: ", objetoParaPares(obj));