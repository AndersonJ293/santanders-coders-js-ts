// Exercicio 13 (some)

const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

console.log(
  `Pelo menos um empregado tem salário maior ou igual a R$ 1500,00?\n${empregados.some(
    (empregado) => empregado.salario >= 1500
  )}`
);

console.log(
  `Pelo menos um empregado tem salário menos ou igual a R$ 1000,00?\n${empregados.some(
    (empregado) => empregado.salario <= 1000
  )}`
);
