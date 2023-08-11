// Exercicio 5 (concat)

const lista1 = ["banana", "pera", "melancia"];
const lista2 = ["alface", "tomate", "rucula"];
const lista3 = ["limao", "laranja", "acerola"];
const lista4 = ["pimenta", "pimentao", "alho"];

let listaConcat1 = lista1.concat(lista2);

console.log(`Listas 1 e 2 concatenadas:\n${listaConcat1}`);
console.log(`Tamanho lista concatenada: ${listaConcat1.length}`);

listaConcat1 = listaConcat1.concat(lista3, lista4);

console.log(`Listas 1, 2, 3 e 4 concatenadas:\n${listaConcat1}`);
console.log(`Tamanho lista concatenada: ${listaConcat1.length}`);
