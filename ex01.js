/*
  1. Validação de Datas
  Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
  formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
*/

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ehDataValida(dia, mes, ano) {
  if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12)
    return console.log("dia ou mes inválido");
  if (ano.toString().length < 4) return console.log("ano inválido");

  if (ano % 4 === 0) {
    if (ano % 100 !== 0 || ano % 400 === 0) {
      let anoBissexto = [...meses]
      anoBissexto[1] = 29
      if (dia > anoBissexto[mes - 1]) return false;
      return true
    }
  }

  if (dia > meses[mes - 1]) return false;
  return true
}

console.log(ehDataValida(29, 2, 2024));
