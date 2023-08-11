// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos)
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao fonal, imprimir o nome do aluno e a sua média

const alunos = [
  { nome: "aluno1", nota1: 8.5, nota2: 9 },
  { nome: "aluno2", nota1: 2.4, nota2: 9 },
  { nome: "aluno2", nota1: 6.3, nota2: 9 },
  { nome: "aluno4", nota1: 4.7, nota2: 9 },
  { nome: "aluno5", nota1: 6.4, nota2: 9 },
  { nome: "aluno6", nota1: 7.1, nota2: 9 },
  { nome: "aluno7", nota1: 5.2, nota2: 9 },
  { nome: "aluno8", nota1: 8.8, nota2: 9 },
  { nome: "aluno9", nota1: 10, nota2: 9 },
];

// alunos.forEach((aluno) => {
//   console.log(
//     `Aluno: ${aluno.nome}\nMedia: ${(aluno.nota1 + aluno.nota2) / 2}\n`
//   );
// });

for (let index = 0; index < alunos.length; index++) {
  const element = alunos[index];
  console.log(
    `Aluno: ${element.nome}\nMedia: ${(element.nota1 + element.nota2) / 2}\n`
  );
}
