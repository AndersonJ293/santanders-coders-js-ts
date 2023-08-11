// Exercicio 6 (every)

let pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

console.log(
  `Todos os alunos tem idade >= 18?\n${pessoas.every(
    (pessoa) => pessoa.idade >= 18
  )}`
);

console.log(
  `Todos os alunos tem nome com mais de 3 caracteres?\n${pessoas.every(
    (pessoa) => pessoa.nome.length > 3
  )}`
);

console.log(
  `Todos os alunos tem nome e idade definidos?\n${pessoas.every(
    (pessoa) => pessoa.nome != undefined && pessoa.idade != undefined
  )}`
);
