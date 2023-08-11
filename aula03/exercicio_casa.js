// EXERCICIO
// você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena) . O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60 .
// Para gerar um número aleatório, pode—se utilizar o método random() , da biblioteca Math:
// Math. round (Math . random() * 10)
const aposta = ["02", "10", "15", "56", "28", "31"];
let resultado = [];

function geraResultado() {
  while (resultado.length < 6) {
    let numero = Math.floor(Math.random() * 60 + 1).toLocaleString("pt-BR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    resultado.includes(numero) ? "" : resultado.push(numero);
  }
}

function confereResultado(aposta, resultado) {}

geraResultado();
console.log(`Os números foram sorteados foram:\n${resultado}`);
