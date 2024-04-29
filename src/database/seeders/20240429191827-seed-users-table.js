'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Smailey',
          email: 'smailey.behm@gmail.com',
          password: 'smailey',
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Vanessa',
          email: 'vbs@tjpr.jus.br',
          password: 'vbs',
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
