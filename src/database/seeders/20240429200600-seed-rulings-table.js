'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'rulings',
      [
        {
          title: 'Agravo Interno',
          content: `a Dra. Vanessa entendeu que como os demais juízes tem entendido que os AI podem ser interpostos de decisões interlocutórias monocráticas (como é o caso dos indeferimentos de JG), deveríamos adotar também essa posição. É o caso de, a partir de agora, processar o AI e fazer a decisão que será submetida ao colegiado.
          Nos casos de JG - O AI será julgado e, se mantida a decisão de indeferimento será concedido novo prazo de pagamento do preparo (48h), determinaremos a abertura de conclusão do RI correspondente, com cópia do acórdão. A reabertura do prazo para pagamento de custas será feita diretamente no RI e ocorrerá assim que for certificado o trânsito em julgado da decisão do AI.          
          Se eventualmente o AI contra decisão que indeferiu JG não for conhecido, não será reaberto o prazo para preparo.`,
          user_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Perícia Grafotécnica',
          content: `A ideia é que a gente tente, na medida do possível, evitar o acolhimento da alegação de perícia em casos bancários no qual a fidedignidade é questionada, "escapando" da imprescindibilidade de perícia falando que o banco poderia fazer provas de outras modalidades, como propondo a oitiva de algum funcionário que acompanhou a contratação, a juntada de câmeras da agência no dia (identificando a pessoa), entre outros.`,
          user_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rulings', null, {})
  }
}
