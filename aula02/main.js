/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e 
você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salarioOriginal = 1400;
let porcentagemAumento;

function reajustaSalario(salario, aumento) {
  const reajuste = salario * (aumento / 100);
  const salarioReajustado = salario + reajuste;


  console.log(`Salario antes do reajuste: R$${salario.toFixed(2)};`);
  console.log(`Percentual aplicado: ${aumento}%;`);
  console.log(`Valor do aumento: R$${reajuste.toFixed(2)};`);
  console.log(`Salario após o aumento: R$${salarioReajustado.toFixed(2)}.`);
}

if (salarioOriginal <= 1500) {
  porcentagemAumento = 20;
} else if (salarioOriginal <= 1700) {
  porcentagemAumento = 15;
} else if (salarioOriginal <= 2000) {
  porcentagemAumento = 10;
} else {
  porcentagemAumento = 5;
}

reajustaSalario(salarioOriginal, porcentagemAumento)


