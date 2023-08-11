// Exercicio 7 (filter)

const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const alunosMaiorDezoito = alunos.filter((aluno) => aluno.idade >= 18);
console.log(
  `Alunos com idade maior ou igual a 18:\n${JSON.stringify(
    alunosMaiorDezoito,
    null,
    2
  )}`
);

const alunosMenorVinte = alunos.filter((aluno) => aluno.idade < 20);
console.log(
  `Alunos com idade menor que 20:\n${JSON.stringify(alunosMenorVinte, null, 2)}`
);

const alunosComecaComJ = alunos.filter((aluno) => aluno.nome.charAt(0) === "J");
console.log(
  `Alunos que nome começa com "J":\n${JSON.stringify(
    alunosComecaComJ,
    null,
    2
  )}`
);
