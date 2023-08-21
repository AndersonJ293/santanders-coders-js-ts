const carros = require("../data/carros");
const tiposCarros = require("../data/tiposCarros");

const montaEmail = (nome) => {
  const primeiroNome = nome.split(" ").at(0);

  const tipoAleatorio = () => {
    const id = Math.round(Math.random() * 7 + 1);
    return tiposCarros[id];
  };

  const tipo = tipoAleatorio();

  const assunto = `Descubra as novidades e ofertas exclusivas para você na CarStore, ${primeiroNome}!
  `;

  const corpo = `
Prezado(a) ${nome},

Esperamos que este e-mail o encontre bem. Na CarStore, estamos comprometidos
em proporcionar a melhor experiência automotiva para nossos clientes mais 
estimados, como você. Queremos expressar nossa sincera gratidão por nos escolher
como sua escolha confiável quando se trata de encontrar o veículo dos seus sonhos.
  
É com grande entusiasmo que trazemos as novidades e as ofertas que temos preparado
especialmente para você. Durante o último mês, tivemos a honra de recebê-lo em 
nossas lojas, e queremos mantê-lo informado sobre as emocionantes atualizações do
mundo automotivo.

Descubra as Novidades para Você:
Temos o prazer de apresentar os lançamentos mais recentes que selecionamos especialmente
com base nas suas preferências. Sabemos que você valoriza ${tipo}, e estamos 
animados para mostrar a você os modelos mais avançados e elegantes que temos disponíveis.

Sugestões Personalizadas:
Com base nas suas visitas anteriores e em suas preferências, nossa equipe de especialistas 
selecionou uma lista de veículos que acreditamos serem ideais para você. Aqui estão algumas 
opções que combinam com o seu estilo:

1. ${carros[tipo].nome1} - ${carros[tipo].descricao1}
2. ${carros[tipo].nome2} - ${carros[tipo].descricao2}
3. ${carros[tipo].nome3} - ${carros[tipo].descricao3}


Ofertas Exclusivas para Você:
Queremos tornar sua próxima compra conosco ainda mais especial. Como agradecimento por
escolher a CarStore, estamos oferecendo condições exclusivas de financiamento e pacotes
de manutenção personalizados. Nossa prioridade é atender às suas necessidades automotivas
de maneira única.

Agradecemos novamente por sua confiança na CarStore. Esperamos recebê-lo novamente em breve 
e ajudá-lo a encontrar o veículo perfeito para suas aventuras rodoviárias.

Atenciosamente,
A Equipe CarStore\n
`;

  return { assunto, corpo };
};

module.exports = montaEmail;
