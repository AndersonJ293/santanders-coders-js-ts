/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

const numero = 5;

function fatorialRecursivo(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * fatorialRecursivo(num - 1);
}

function fatorialSemRecursao(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(`Fatorial Recursivo de ${numero} = ${fatorialRecursivo(numero)}`);
console.log(
  `Fatorial sem Recursivividade de ${numero} = ${fatorialSemRecursao(numero)}`
);
