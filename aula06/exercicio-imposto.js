/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto,
  que é a quantia de imposto sobre vendas expressa em
  porcentagem e custo, que é o custo de um item antes do imposto. 
  A função calcula o valor com o imposto sobre vendas e retorna o 
  valor de custo e o novo valor.
*/

const valor = 319.8;
const taxa = 60;

const somaImposto = (custo, taxaImposto) => {
  const valorDoImposto = custo * (taxaImposto / 100);
  const custoDepois = custo + valorDoImposto;
  return {
    custoAntes: custo,
    taxaImposto: taxaImposto,
    valorDoImposto: valorDoImposto,
    custoDepois: custoDepois,
  };
};

// console.log(somaImposto(valor, taxa));

const imprimeImposto = (valor, taxa) => {
  const { custoAntes, taxaImposto, valorDoImposto, custoDepois } = somaImposto(
    valor,
    taxa
  );
  console.log(`Valor sem imposto: R$${custoAntes.toFixed(2)}`);
  console.log(`Porcentagem de imposto: ${taxaImposto}%`);
  console.log(`Valor do imposto: R$${valorDoImposto.toFixed(2)}`);
  console.log(`Valor com imposto: R$${custoDepois.toFixed(2)}`);
};

imprimeImposto(valor, taxa);
