const carros = {
  "Carros Esportivos": {
    nome1: "Aston Martin Vantage V12",
    descricao1: `Esse é o Vantage mais potente já produzido. São 700 cv e 76,8 kgfm na unidade
de 5,2 litros naturalmente aspirada. Segundo dados de fábrica, ele acelera de 
0 a 96 km/h em 3,4 segundos e alcança os 320 km/h.
`,
    nome2: "BMW M2",
    descricao2: `A nova geração do M2 tem um motor 3.0 de seis cilindros em linha de 460 cv e não 
traz qualquer tipo de eletrificação.. Para ir de 0 a 100 km/h, são necessários apenas 4,2 segundos.
`,
    nome3: "Ferrari Purosangue",
    descricao3: `A Purosangue tem o lendário motor V12 6.5 da marca italiana. São 725 cv a 7.750 
rpm e 73,1 kgfm a 6.250 rpm. O câmbio é de dupla embreagem e oito marchas. Com esse conjunto, 
chega aos 310 km/h de velocidade máxima, acelera de 0 a 100 km/h em 3,3 segundos e até os 200 km/h
em 10,6 segundos.
`,
  },
  "Carros Elétricos e Híbridos": {
    nome1: "Tesla Model 3",
    descricao1: `Esse é o carro elétrico mais vendido do mundo, com uma autonomia de até 568 km e 
uma aceleração de 0 a 100 km/h em 3,1 segundos. O Model 3 tem um design aerodinâmico, um painel 
minimalista e uma tela sensível ao toque de 15 polegadas que controla todas as funções do carro.
`,
    nome2: "Toyota Prius",
    descricao2: `Esse é o carro híbrido mais famoso do mercado, com um motor a gasolina de 1.8 litros 
e outro elétrico de 72 cv. O Prius tem um consumo médio de 18,9 km/l na cidade e 17 km/l na estrada, 
além de um sistema de regeneração de energia nas frenagens.
`,
    nome3: "Hyundai Ioniq",
    descricao3: `Esse é o carro que oferece três opções de motorização: elétrica, híbrida e híbrida 
plug-in. O Ioniq elétrico tem uma autonomia de 311 km e uma potência de 136 cv. O Ioniq híbrido 
tem um motor a gasolina de 1.6 litros e outro elétrico de 43 cv. O Ioniq híbrida plug-in tem o mesmo 
conjunto do híbrido, mas com uma bateria maior que permite rodar até 63 km no modo elétrico.
`,
  },
  "SUVs Familiares": {
    nome1: "Chevrolet Equinox",
    descricao1: `Esse é o SUV médio da marca americana, com um design atraente, um interior 
espaçoso e um motor turbo de 172 cv. O Equinox tem um câmbio automático de seis marchas e 
uma tração dianteira. O carro conta com itens como teto solar panorâmico, central multimídia 
com tela de 8 polegadas, câmera 360 graus, controle de cruzeiro adaptativo e alerta de colisão frontal.
`,
    nome2: "Peugeot 3008",
    descricao2: `Esse é o SUV médio da marca francesa, com um design inovador, um interior 
sofisticado e um motor turbo de 165 cv. O 3008 tem um câmbio automático de seis marchas e uma 
tração dianteira. O carro se destaca pelo painel digital com tela de 12,3 polegadas, pelo 
volante com formato achatado, pelo sistema de som Focal, pelo teto panorâmico de vidro e pelo 
assistente de permanência na faixa.
`,
    nome3: "Volkswagen Tiguan Allspace",
    descricao3: `Esse é o SUV médio da marca alemã, com um design elegante, um interior amplo e 
um motor turbo de 220 cv. O Tiguan Allspace tem um câmbio automático de seis marchas e uma tração 
integral. O carro oferece itens como capacidade para até sete passageiros, central multimídia 
com tela de 8 polegadas, painel digital com tela de 10,25 polegadas, teto solar panorâmico, controle 
de cruzeiro adaptativo e frenagem automática de emergência.
`,
  },
  "Carros Compactos Urbanos": {
    nome1: "Hyundai HB20",
    descricao1: `Esse é o carro mais vendido da marca coreana no Brasil, com um design moderno, 
um interior bem acabado e um motor turbo de 120 cv. O HB20 tem um câmbio automático de seis 
marchas e uma tração dianteira. O carro conta com itens como central multimídia com tela de 8 
polegadas, ar-condicionado digital, câmera de ré, controle de estabilidade e tração e assistente 
de partida em rampa.
`,
    nome2: "Renault Kwid",
    descricao2: `Esse é o carro mais barato do mercado brasileiro, com um design compacto, um 
interior simples e um motor 1.0 de 70 cv. O Kwid tem um câmbio manual de cinco marchas e uma 
tração dianteira. O carro se destaca pelo baixo consumo de combustível, pelo porta-malas de 
290 litros e pelo sistema multimídia com tela de 7 polegadas.
`,
    nome3: "Volkswagen Up!",
    descricao3: `Esse é o carro mais divertido e econômico da marca alemã, com um design jovem, 
um interior funcional e um motor turbo de 105 cv. O Up! tem um câmbio manual ou automatizado 
de cinco marchas e uma tração dianteira. O carro oferece itens como painel digital com tela 
de 5 polegadas, ar-condicionado, direção elétrica, controle de tração e sistema start-stop.
`,
  },
  "Caminhonetes Off-Road": {
    nome1: "Ford Ranger Raptor",
    descricao1: `Essa é a versão mais radical e aventureira da picape média da marca americana, 
com um visual agressivo, um chassi reforçado e um motor diesel biturbo de 213 cv. A Ranger Raptor 
tem um câmbio automático de 10 marchas e uma tração 4x4 com bloqueio do diferencial traseiro. 
O carro possui itens como suspensão Fox Racing Shox, pneus BF Goodrich All Terrain, freios a disco 
nas quatro rodas, central multimídia com tela de 8 polegadas, controle de cruzeiro adaptativo e 
assistente de descida.
`,
    nome2: "Toyota Hilux GR Sport",
    descricao2: `Essa é a versão mais esportiva e exclusiva da picape média da marca japonesa, com um 
visual diferenciado, uma suspensão recalibrada e um motor diesel de 177 cv. A Hilux GR Sport tem um 
câmbio automático de seis marchas e uma tração 4x4 com bloqueio do diferencial traseiro. O carro 
conta com itens como suspensão Gazoo Racing, pneus Bridgestone Dueler All Terrain, freios ABS off-road, 
central multimídia com tela de 8 polegadas, controle de estabilidade e tração e assistente de partida 
em rampa.
`,
    nome3: "Jeep Gladiator",
    descricao3: `Essa é a versão picape do famoso jipe da marca americana, com um visual icônico, uma 
caçamba versátil e um motor V6 Pentastar de 285 cv. A Gladiator tem um câmbio automático de oito marchas 
e uma tração 4x4 com bloqueio dos diferenciais dianteiro e traseiro. O carro oferece itens como capota 
conversível, portas removíveis, suspensão Dana 44, pneus Falken Wildpeak Mud Terrain, central multimídia 
com tela de 8,4 polegadas, controle de estabilidade e tração e assistente de partida em rampa.
`,
  },
  "Carros de Luxo e Elegância": {
    nome1: "Mercedes-Benz Classe S",
    descricao1: `Esse é o carro mais luxuoso e tecnológico da marca alemã, com um design refinado, 
um interior requintado e um motor V8 biturbo de 469 cv. O Classe S tem um câmbio automático de nove 
marchas e uma tração integral. O carro oferece itens como faróis de LED inteligentes, painel digital 
com tela de 12,3 polegadas, sistema de som premium, bancos com massagem e perfume, assistente de 
direção semi-autônomo e sistema de estacionamento remoto.
`,
    nome2: "Audi A8",
    descricao2: `Esse é o carro mais sofisticado e confortável da marca alemã, com um design elegante, 
um interior espaçoso e um motor V6 híbrido de 340 cv. O A8 tem um câmbio automático de oito marchas 
e uma tração integral. O carro conta com itens como faróis de laser, painel digital com duas telas 
sensíveis ao toque, sistema de som Bang & Olufsen, bancos traseiros com ajuste elétrico, massagem e 
aquecimento, assistente de direção semi-autônomo e sistema de estacionamento remoto.
`,
    nome3: "BMW Série 7",
    descricao3: `Esse é o carro mais esportivo e dinâmico da marca alemã, com um design imponente, 
um interior luxuoso e um motor V8 biturbo de 530 cv. O Série 7 tem um câmbio automático de oito marchas 
e uma tração integral. O carro dispõe de itens como faróis de LED adaptativos, painel digital com tela 
de 12,3 polegadas, sistema de som Harman Kardon, bancos com ajuste elétrico, massagem e ventilação, 
assistente de direção semi-autônomo e sistema de estacionamento remoto.
`,
  },
  "Minivans Espaçosas": {
    nome1: "Honda Odyssey",
    descricao1: `Essa é a minivan mais vendida nos Estados Unidos, com capacidade para até oito 
passageiros e um porta-malas de 929 litros. A Odyssey tem um motor V6 de 280 cv e um câmbio automático 
de 10 marchas. O carro conta com itens como teto solar, central multimídia com tela de 8 polegadas, 
câmera traseira, controle de cruzeiro adaptativo e assistente de permanência na faixa.
`,
    nome2: "Citroën Grand C4 Picasso",
    descricao2: `Essa é a minivan mais moderna e sofisticada da marca francesa, com capacidade para até 
sete passageiros e um porta-malas de 645 litros. A Grand C4 Picasso tem um motor turbo de 165 cv e um 
câmbio automático de seis marchas. O carro se destaca pelo design futurista, pelo painel digital com 
duas telas e pelo teto panorâmico de vidro.
`,
    nome3: "Fiat Doblò",
    descricao3: `Essa é a minivan mais acessível e versátil do mercado brasileiro, com capacidade para 
até sete passageiros e um porta-malas de 665 litros. O Doblò tem um motor 1.8 de 132 cv e um câmbio 
manual de cinco marchas. O carro tem um bom espaço interno, uma suspensão elevada e uma boa visibilidade.
`,
  },
  "Carros Clássicos e Antigos": {
    nome1: "Ford Mustang",
    descricao1: `Esse é o ícone dos muscle cars americanos, lançado em 1964 e com diversas gerações 
até hoje. O Mustang tem um visual esportivo, um ronco inconfundível e um motor V8 potente. O modelo 
mais famoso é o Shelby GT500, que apareceu no filme "60 Segundos".
`,
    nome2: "Volkswagen Fusca",
    descricao2: `Esse é o carro mais popular da história, produzido entre 1938 e 2003 em vários países. 
O Fusca tem um design simpático, um motor traseiro refrigerado a ar e uma mecânica simples e robusta. 
O carro foi um símbolo da cultura hippie nos anos 60 e 70.
`,
    nome3: "Chevrolet Impala",
    descricao3: `Esse é o carro mais vendido nos Estados Unidos em 1965, com mais de um milhão de 
unidades. O Impala é um sedan grande e luxuoso, com um motor V8 de até 425 cv e um câmbio automático 
de três marchas. O carro ficou famoso pela série "Supernatural", onde os protagonistas usam um Impala
preto de 1967.
`,
  },
};

module.exports = carros;
