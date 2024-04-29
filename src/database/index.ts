import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'sircejud_development',
  username: 'sircejud',
  password: 'sircejud',
  define: {
    underscored: true
  }
})
