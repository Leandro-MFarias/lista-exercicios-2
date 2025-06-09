/*
  3. Palavras Únicas
  Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
  todas as palavras únicas e exibi-las em um array.
*/

let str = "olá olá mundo mundo";
let words = str.split(" ");
let unique = [];

for (let i = 0; i < words.length; i++) {
  let count = 0

  for (let j = 0; j < words.length; j++) {
    if (words[i] === words[j]) {
      count++
    }
  }

  if (count === 1) {
    unique.push(words[i])
  }
}

console.log(unique);