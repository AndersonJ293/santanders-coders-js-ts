// Exercicio 8 (find)

const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

console.log(
  `Primeiro lugar que tenha capacidade máxima >= 10:\n${JSON.stringify(
    lugares.find((lugar) => lugar.capacidade >= 10),
    null,
    2
  )}`
);

console.log(
  `Primeiro lugar que tenha capacidade máxima >= 25:\n${JSON.stringify(
    lugares.find((lugar) => lugar.capacidade >= 25),
    null,
    2
  )}`
);

console.log(
  `Primeiro lugar que tenha capacidade máxima >= 40:\n${JSON.stringify(
    lugares.find((lugar) => lugar.capacidade >= 40),
    null,
    2
  )}`
);
