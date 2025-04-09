'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rulings', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rulings')
  }
}
