'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Smailey',
          email: 'smailey.behm@gmail.com',
          password: await bcrypt.hash('smailey', 10),
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Vanessa',
          email: 'vbs@tjpr.jus.br',
          password: await bcrypt.hash('vbs', 10),
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, { where: { role: 'admin' } })
  }
}
