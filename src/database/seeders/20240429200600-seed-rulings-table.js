'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'rulings',
      [
        {
          title: 'INSCRIÇÕES E MANUTENÇÕES INDEVIDAS',
          content:
            '<p>A média de valores indenizatórios acordados com os demais membros da Turma foi:</p><ul><li>10 mil para os casos de inscrição indevida contra instituições financeiras;</li><li>7 a 8 mil contra operadoras de telefonia (6 mil contra a Oi, em recuperação judicial) e Copel;</li><li>Entre 5 e 10 mil para os demais casos, a depender da capacidade econômica da parte ré;</li><li>Para manutenção indevida, aplicamos metade desses valores.</li></ul>',
          user_id: 1,
          created_at: '2024-07-04 21:12:00.598+00',
          updated_at: '2024-10-08 12:41:37.651+00'
        },
        {
          title: 'PRAZO PRESCRICIONAL -  ITBI, FUNREJUS, AFINS.',
          content:
            'PRAZO PRESCRICIONAL DECENAL – ITBI, FUNREJUS E CARTÓRIO: a Dra. entende ser aplicável o prazo decenal para aquelas demandas que as partes pretendem receber os valores pagos a título de ITBI, Funrejus e registro de Cartório (são casos que até hoje sempre envolveram a MRV). ',
          user_id: 1,
          created_at: '2024-07-04 21:14:47.713+00',
          updated_at: '2024-07-04 21:23:05.271+00'
        },
        {
          title: 'FILA DE BANCO',
          content:
            '<h2>Tema 1156/STJ – Tese:</h2><p class="ql-indent-1">“<em>O simples descumprimento do prazo estabelecido em legislação específica para a prestação de serviço bancário não gera por si só dano moral in re ipsa.</em>"</p><p>Aguardando o julgamento do IRDR.</p>',
          user_id: 1,
          created_at: '2024-07-05 21:18:40.894+00',
          updated_at: '2024-10-07 19:58:10.26+00'
        },
        {
          title: 'PLANTAÇÃO DE FUMO - DANO MORAL',
          content:
            '<p>Entendemos pela inexistência de dano moral nos casos de perda do produto de plantação de fumo em caso de falta de energia da Copel.</p>',
          user_id: 1,
          created_at: '2024-07-09 15:04:26.645+00',
          updated_at: '2024-10-08 12:45:43.243+00'
        },
        {
          title: 'AGRAVO INTERNO',
          content:
            '<p>A Dra. Vanessa entendeu que os AI podem ser interpostos de decisões interlocutórias monocráticas (como é o caso dos indeferimentos de JG).</p><p><br></p><p>É o caso de processar o AI e fazer a decisão que será submetida ao colegiado.</p><p>Via de regra a decisão do AI será <strong><u>sempre</u></strong> submetida ao colegiado.</p><p><br></p><ul><li><strong>Multa</strong></li></ul><p class="ql-indent-1">Apenas nos casos em que a decisão é unânime e quando é evidente o não cabimento ou o desprovimento.</p><ul><li><strong>Justiça Gratuita</strong></li></ul><p class="ql-indent-1"><span style="background-color: rgb(255, 255, 255); color: windowtext;">&nbsp;AI será julgado e, se mantida a decisão de indeferimento será concedido novo prazo de pagamento do preparo (48h), determinaremos a abertura de conclusão do RI correspondente, com cópia do acórdão. A reabertura do prazo para pagamento de custas será feita diretamente no RI e ocorrerá assim que for certificado o trânsito em julgado da decisão do AI.&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-07-29 18:07:48.21+00',
          updated_at: '2024-10-07 20:16:07.759+00'
        },
        {
          title: 'BANCÁRIO - PERÍCIA GRAFOTÉCNICA',
          content:
            '<p>Via de regra não é necessária a realização de perícia grafotécnica em casos bancários no qual a fidedignidade é questionada. </p><p>É encargo das instituições financeiras demonstrar a higidez da assinatura ou da declaração de vontade, podendo fazer provas de diversas modalidades, como propondo a oitiva de algum funcionário que acompanhou a contratação, a juntada de câmeras da agência no dia (identificando a pessoa), entre outros.</p>',
          user_id: 1,
          created_at: '2024-07-29 18:16:17.889+00',
          updated_at: '2024-10-07 20:03:15.608+00'
        },
        {
          title: 'PARCELAMENTO/REDUÇÃO DE PREPARO',
          content:
            'Entendemos pela possibilidade de parcelamento/redução do preparo, como uma forma de deferimento parcial da JG. Se for o caso de indeferimento da JG integral, já analisamos a possibilidade de parcelamento/redução na decisão que indeferir a JG integral, intimando a parte recorrente para que faça o recolhimento parcelado em X parcelas ou reduzido em X%.',
          user_id: 1,
          created_at: '2024-07-29 18:21:09.466+00',
          updated_at: '2024-07-29 18:21:09.466+00'
        },
        {
          title: 'EMBARGOS PROTELATÓRIOS',
          content:
            '<p><strong>Embargos declaratórios</strong> - a fixação da multa por embargos protelatórios não depende especificamente da demonstração de uma <em>intencionalidade</em>, basta que fique demonstrada a pretensão de protelar objetivamente.</p>',
          user_id: 1,
          created_at: '2024-10-07 17:49:43.958+00',
          updated_at: '2024-10-07 17:49:43.958+00'
        },
        {
          title: 'COPEL',
          content:
            '<p><strong>Interrupção de energia</strong> - Dano moral quando supera 24h de serviço indisponível.</p>',
          user_id: 1,
          created_at: '2024-10-07 18:40:59.197+00',
          updated_at: '2024-10-07 18:40:59.197+00'
        },
        {
          title: 'SEGURO PRESTAMISTA',
          content:
            '<p><span style="background-color: rgb(255, 255, 255); color: windowtext;">O entendimento atual é de que não basta um termo apartado de seguro, já que no Tema 972 há uma espécie de "</span><em style="background-color: rgb(255, 255, 255); color: windowtext;">qualificação extra</em><span style="background-color: rgb(255, 255, 255); color: windowtext;">" da venda casada. </span></p><p><span style="background-color: rgb(255, 255, 255); color: windowtext;"><span class="ql-cursor">﻿</span>O que importa é que conste no contrato de seguro prestamista/apólice alguma </span><u style="background-color: rgb(255, 255, 255); color: windowtext;">cláusula de que a parte foi cientificada de que poderia contratar o seguro com outra seguradora</u><span style="background-color: rgb(255, 255, 255); color: windowtext;">.&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-10-07 19:36:14.753+00',
          updated_at: '2024-10-07 19:36:58.061+00'
        },
        {
          title: 'HONORÁRIOS ADVOCATÍCIOS',
          content:
            '<p>Estamos adotando a interpretação dada pela Primeira Seção do STJ ao art. 55 da Lei 9.099/1995 no julgamento do PUIL nº 3.874/PR.</p><p>Assim, a condenação do recorrente ao pagamento de verba honorária só será cabível quando o recurso não for conhecido e quando for integralmente desprovido.</p><p>Não há mais condenação em casos de parcial provimento.</p>',
          user_id: 1,
          created_at: '2024-10-07 19:40:06.262+00',
          updated_at: '2024-10-07 19:40:06.262+00'
        },
        {
          title: 'SERASA LIMPA NOME',
          content:
            '<p><span style="color: rgb(51, 51, 51); background-color: transparent;">Não há dano moral&nbsp;</span><em style="color: rgb(51, 51, 51); background-color: transparent;">in re ipsa</em><span style="color: rgb(51, 51, 51); background-color: transparent;">&nbsp;em razão da cobrança extrajudicial de dívida prescrita/inexistente por meio da plataforma Serasa Limpa Nome, por não se confundir com a negativação em si do débito. Caso haja pedido e a dívida de fato esteja prescrita ou inexista, não há óbice para eventual declaração de inexigibilidade.&nbsp;</span></p><p><span style="color: rgb(51, 51, 51); background-color: transparent;"><span class="ql-cursor">﻿</span>(Nos casos de dívida prescrita, lembrar do </span><strong style="color: rgb(51, 51, 51); background-color: transparent;">TEMA 1264 do STJ</strong><span style="color: rgb(51, 51, 51); background-color: transparent;"> - "</span><em style="color: rgb(66, 79, 84); background-color: rgb(255, 255, 255);">Definir se a dívida prescrita pode ser exigida extrajudicialmente, inclusive com a inscrição do nome do devedor em plataformas de acordo ou de renegociação de débitos</em><span style="color: rgb(66, 79, 84); background-color: rgb(255, 255, 255);">." - há suspensão de todos os processos.)&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-10-07 19:41:19.23+00',
          updated_at: '2024-10-07 19:41:19.23+00'
        },
        {
          title: 'VÍCIO OCULTO EM MOTOR DE CARRO USADO',
          content:
            '<p><span style="color: rgb(0, 0, 0); background-color: inherit;">Quando se tratar de vício no motor de veículo usado, ainda que o veículo tenha uma idade avançada (15 anos), vamos exigir que a ré comprove que o problema manifestado pode ser enquadrado como um desgaste natural. </span></p><ol><li><span style="color: rgb(0, 0, 0); background-color: inherit;">A ideia é que, por se tratar de um motor - cuja vida útil/durabilidade é sabidamente mais longa, depende do alcance de uma quilometragem específica, etc - não seria razoável nós, sem um mínimo de prova, concluirmos automaticamente pelo simples decurso do tempo x que é um desgaste natural. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;">Então, o ideal é que a ré prove que o problema em questão seria esperado no motor daquele tipo de veículo, que o problema foi por falta de manutenção, que a vida útil do motor é de x anos ou y quilometragem. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;">Bastaria, por ex, se a gente soubesse que foi vendido pela quilometragem 150 mil km e que no manual do veículo consta vida útil de 100 mil quilômetros. Não é uma prova muito difícil para as garagens e afins, que têm expertise, produzirem. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;"><span class="ql-cursor">﻿</span>Em itens de mecânica mais "normais", como correia dentada, vela, embreagem, etc, caso não haja alguma promessa de perfeito estado ou que o item recentemente foi trocado, alguma outra peculiaridade do gênero, poderíamos de forma mais tranquila estabelecer aquele raciocínio de que incumbia ao comprador vistoriar o veículo e que a quebra da correia dentada de um veículo de 15 anos, por ex, seria desgaste natural.</span></li></ol>',
          user_id: 1,
          created_at: '2024-10-08 12:36:55.023+00',
          updated_at: '2024-10-08 12:36:55.023+00'
        },
        {
          title: 'INSCRIÇÕES E MANUTENÇÕES INDEVIDAS',
          content:
            '<p>A média de valores indenizatórios acordados com os demais membros da Turma foi:</p><ul><li>10 mil para os casos de inscrição indevida contra instituições financeiras;</li><li>7 a 8 mil contra operadoras de telefonia (6 mil contra a Oi, em recuperação judicial) e Copel;</li><li>Entre 5 e 10 mil para os demais casos, a depender da capacidade econômica da parte ré;</li><li>Para manutenção indevida, aplicamos metade desses valores.</li></ul>',
          user_id: 1,
          created_at: '2024-07-04 21:12:00.598+00',
          updated_at: '2024-10-08 12:41:37.651+00'
        },
        {
          title: 'PRAZO PRESCRICIONAL -  ITBI, FUNREJUS, AFINS.',
          content:
            'PRAZO PRESCRICIONAL DECENAL – ITBI, FUNREJUS E CARTÓRIO: a Dra. entende ser aplicável o prazo decenal para aquelas demandas que as partes pretendem receber os valores pagos a título de ITBI, Funrejus e registro de Cartório (são casos que até hoje sempre envolveram a MRV). ',
          user_id: 1,
          created_at: '2024-07-04 21:14:47.713+00',
          updated_at: '2024-07-04 21:23:05.271+00'
        },
        {
          title: 'FILA DE BANCO',
          content:
            '<h2>Tema 1156/STJ – Tese:</h2><p class="ql-indent-1">“<em>O simples descumprimento do prazo estabelecido em legislação específica para a prestação de serviço bancário não gera por si só dano moral in re ipsa.</em>"</p><p>Aguardando o julgamento do IRDR.</p>',
          user_id: 1,
          created_at: '2024-07-05 21:18:40.894+00',
          updated_at: '2024-10-07 19:58:10.26+00'
        },
        {
          title: 'PLANTAÇÃO DE FUMO - DANO MORAL',
          content:
            '<p>Entendemos pela inexistência de dano moral nos casos de perda do produto de plantação de fumo em caso de falta de energia da Copel.</p>',
          user_id: 1,
          created_at: '2024-07-09 15:04:26.645+00',
          updated_at: '2024-10-08 12:45:43.243+00'
        },
        {
          title: 'AGRAVO INTERNO',
          content:
            '<p>A Dra. Vanessa entendeu que os AI podem ser interpostos de decisões interlocutórias monocráticas (como é o caso dos indeferimentos de JG).</p><p><br></p><p>É o caso de processar o AI e fazer a decisão que será submetida ao colegiado.</p><p>Via de regra a decisão do AI será <strong><u>sempre</u></strong> submetida ao colegiado.</p><p><br></p><ul><li><strong>Multa</strong></li></ul><p class="ql-indent-1">Apenas nos casos em que a decisão é unânime e quando é evidente o não cabimento ou o desprovimento.</p><ul><li><strong>Justiça Gratuita</strong></li></ul><p class="ql-indent-1"><span style="background-color: rgb(255, 255, 255); color: windowtext;">&nbsp;AI será julgado e, se mantida a decisão de indeferimento será concedido novo prazo de pagamento do preparo (48h), determinaremos a abertura de conclusão do RI correspondente, com cópia do acórdão. A reabertura do prazo para pagamento de custas será feita diretamente no RI e ocorrerá assim que for certificado o trânsito em julgado da decisão do AI.&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-07-29 18:07:48.21+00',
          updated_at: '2024-10-07 20:16:07.759+00'
        },
        {
          title: 'BANCÁRIO - PERÍCIA GRAFOTÉCNICA',
          content:
            '<p>Via de regra não é necessária a realização de perícia grafotécnica em casos bancários no qual a fidedignidade é questionada. </p><p>É encargo das instituições financeiras demonstrar a higidez da assinatura ou da declaração de vontade, podendo fazer provas de diversas modalidades, como propondo a oitiva de algum funcionário que acompanhou a contratação, a juntada de câmeras da agência no dia (identificando a pessoa), entre outros.</p>',
          user_id: 1,
          created_at: '2024-07-29 18:16:17.889+00',
          updated_at: '2024-10-07 20:03:15.608+00'
        },
        {
          title: 'PARCELAMENTO/REDUÇÃO DE PREPARO',
          content:
            'Entendemos pela possibilidade de parcelamento/redução do preparo, como uma forma de deferimento parcial da JG. Se for o caso de indeferimento da JG integral, já analisamos a possibilidade de parcelamento/redução na decisão que indeferir a JG integral, intimando a parte recorrente para que faça o recolhimento parcelado em X parcelas ou reduzido em X%.',
          user_id: 1,
          created_at: '2024-07-29 18:21:09.466+00',
          updated_at: '2024-07-29 18:21:09.466+00'
        },
        {
          title: 'EMBARGOS PROTELATÓRIOS',
          content:
            '<p><strong>Embargos declaratórios</strong> - a fixação da multa por embargos protelatórios não depende especificamente da demonstração de uma <em>intencionalidade</em>, basta que fique demonstrada a pretensão de protelar objetivamente.</p>',
          user_id: 1,
          created_at: '2024-10-07 17:49:43.958+00',
          updated_at: '2024-10-07 17:49:43.958+00'
        },
        {
          title: 'COPEL',
          content:
            '<p><strong>Interrupção de energia</strong> - Dano moral quando supera 24h de serviço indisponível.</p>',
          user_id: 1,
          created_at: '2024-10-07 18:40:59.197+00',
          updated_at: '2024-10-07 18:40:59.197+00'
        },
        {
          title: 'SEGURO PRESTAMISTA',
          content:
            '<p><span style="background-color: rgb(255, 255, 255); color: windowtext;">O entendimento atual é de que não basta um termo apartado de seguro, já que no Tema 972 há uma espécie de "</span><em style="background-color: rgb(255, 255, 255); color: windowtext;">qualificação extra</em><span style="background-color: rgb(255, 255, 255); color: windowtext;">" da venda casada. </span></p><p><span style="background-color: rgb(255, 255, 255); color: windowtext;"><span class="ql-cursor">﻿</span>O que importa é que conste no contrato de seguro prestamista/apólice alguma </span><u style="background-color: rgb(255, 255, 255); color: windowtext;">cláusula de que a parte foi cientificada de que poderia contratar o seguro com outra seguradora</u><span style="background-color: rgb(255, 255, 255); color: windowtext;">.&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-10-07 19:36:14.753+00',
          updated_at: '2024-10-07 19:36:58.061+00'
        },
        {
          title: 'HONORÁRIOS ADVOCATÍCIOS',
          content:
            '<p>Estamos adotando a interpretação dada pela Primeira Seção do STJ ao art. 55 da Lei 9.099/1995 no julgamento do PUIL nº 3.874/PR.</p><p>Assim, a condenação do recorrente ao pagamento de verba honorária só será cabível quando o recurso não for conhecido e quando for integralmente desprovido.</p><p>Não há mais condenação em casos de parcial provimento.</p>',
          user_id: 1,
          created_at: '2024-10-07 19:40:06.262+00',
          updated_at: '2024-10-07 19:40:06.262+00'
        },
        {
          title: 'SERASA LIMPA NOME',
          content:
            '<p><span style="color: rgb(51, 51, 51); background-color: transparent;">Não há dano moral&nbsp;</span><em style="color: rgb(51, 51, 51); background-color: transparent;">in re ipsa</em><span style="color: rgb(51, 51, 51); background-color: transparent;">&nbsp;em razão da cobrança extrajudicial de dívida prescrita/inexistente por meio da plataforma Serasa Limpa Nome, por não se confundir com a negativação em si do débito. Caso haja pedido e a dívida de fato esteja prescrita ou inexista, não há óbice para eventual declaração de inexigibilidade.&nbsp;</span></p><p><span style="color: rgb(51, 51, 51); background-color: transparent;"><span class="ql-cursor">﻿</span>(Nos casos de dívida prescrita, lembrar do </span><strong style="color: rgb(51, 51, 51); background-color: transparent;">TEMA 1264 do STJ</strong><span style="color: rgb(51, 51, 51); background-color: transparent;"> - "</span><em style="color: rgb(66, 79, 84); background-color: rgb(255, 255, 255);">Definir se a dívida prescrita pode ser exigida extrajudicialmente, inclusive com a inscrição do nome do devedor em plataformas de acordo ou de renegociação de débitos</em><span style="color: rgb(66, 79, 84); background-color: rgb(255, 255, 255);">." - há suspensão de todos os processos.)&nbsp;</span></p>',
          user_id: 1,
          created_at: '2024-10-07 19:41:19.23+00',
          updated_at: '2024-10-07 19:41:19.23+00'
        },
        {
          title: 'VÍCIO OCULTO EM MOTOR DE CARRO USADO',
          content:
            '<p><span style="color: rgb(0, 0, 0); background-color: inherit;">Quando se tratar de vício no motor de veículo usado, ainda que o veículo tenha uma idade avançada (15 anos), vamos exigir que a ré comprove que o problema manifestado pode ser enquadrado como um desgaste natural. </span></p><ol><li><span style="color: rgb(0, 0, 0); background-color: inherit;">A ideia é que, por se tratar de um motor - cuja vida útil/durabilidade é sabidamente mais longa, depende do alcance de uma quilometragem específica, etc - não seria razoável nós, sem um mínimo de prova, concluirmos automaticamente pelo simples decurso do tempo x que é um desgaste natural. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;">Então, o ideal é que a ré prove que o problema em questão seria esperado no motor daquele tipo de veículo, que o problema foi por falta de manutenção, que a vida útil do motor é de x anos ou y quilometragem. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;">Bastaria, por ex, se a gente soubesse que foi vendido pela quilometragem 150 mil km e que no manual do veículo consta vida útil de 100 mil quilômetros. Não é uma prova muito difícil para as garagens e afins, que têm expertise, produzirem. </span></li><li><span style="color: rgb(0, 0, 0); background-color: inherit;"><span class="ql-cursor">﻿</span>Em itens de mecânica mais "normais", como correia dentada, vela, embreagem, etc, caso não haja alguma promessa de perfeito estado ou que o item recentemente foi trocado, alguma outra peculiaridade do gênero, poderíamos de forma mais tranquila estabelecer aquele raciocínio de que incumbia ao comprador vistoriar o veículo e que a quebra da correia dentada de um veículo de 15 anos, por ex, seria desgaste natural.</span></li></ol>',
          user_id: 1,
          created_at: '2024-10-08 12:36:55.023+00',
          updated_at: '2024-10-08 12:36:55.023+00'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rulings', null, {})
  }
}
