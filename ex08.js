/* 
  8. Agrupamento por Propriedade
  Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
  cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const vendas = [
  { client: "Leandro", total: 10 },
  { client: "Joe", total: 20 },
  { client: "Doe", total: 40 },
];

const totalVendas = vendas.reduce((acc, curr) => acc + curr.total, 0)
console.log("reduce", totalVendas);