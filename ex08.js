/* 
  8. Agrupamento por Propriedade
  Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
  cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const vendas = [
  { client: "Leandro", total: 10 },
  { client: "Joe", total: 20 },
  { client: "Doe", total: 30 },
  { client: "Leandro", total: 30 },
];

const somaTotal = vendas.reduce((acc, curr) => {
  acc[curr.client] ? acc[curr.client] += curr.total : acc[curr.client] = curr.total;

  return acc
}, {});

console.log(somaTotal);