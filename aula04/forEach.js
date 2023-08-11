// Exercicio 9 (forEach)

const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

pizzas.forEach((pizza) => {
  console.log(
    `Sabor: ${pizza.sabor}\n  Preço: ${pizza.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`
  );
});
