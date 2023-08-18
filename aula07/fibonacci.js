const iterations = 10;

const fib = (numero, memo = new Map()) => {
  numero === 1 || numero === 2
    ? (resultado = 1)
    : (resultado =
        memo[numero] || fib(numero - 1, memo) + fib(numero - 2, memo));
  memo[numero] = resultado;
  return resultado;
};

const fibSemRecursividade = (numero) => {
  const fibArray = new Array();
  for (let i = 0; i <= numero; i++) {
    if (i < 2) {
      fibArray[i] = i;
      continue;
    }
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
};

console.log(fib(iterations));
console.log(fibSemRecursividade(iterations));
