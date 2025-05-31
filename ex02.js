/*
  2. Jogo de Adivinhação
  Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/
const prompt = require("prompt-sync")();

let numRandom = Math.floor(Math.random() * 100) + 1;
let counter = 1;
let answer = null;

while (answer != numRandom) {
  console.log(`tentativa: ${counter}`);
  answer = parseInt(prompt("Adivinhe o número de 1 a 100:"));
  if (answer === numRandom) return console.log("Você acertou!!");

  answer < numRandom ? console.log("mais alto \n") : console.log("mais baixo \n");

  counter++;
}

// Function para auxiliar e confirmar que o 100 e 1 são inclusivo.   

// function verificao() {
//   let numRandom = Math.floor(Math.random() * 100) + 1;
//   if (numRandom === 100) {
//     console.log("Terminou: " + numRandom)
//   } else {
//     console.log("Errou: " + numRandom);
//     returnNum()
//   }
// }

// returnNum()