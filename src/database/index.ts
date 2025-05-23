import { Sequelize } from 'sequelize'
import { DATABASE_URL } from '../config/environment'

export const database = new Sequelize(DATABASE_URL, {
  define: {
    underscored: true
  },
  ssl: true,
  dialectModule: require('pg'),
  dialectOptions: {
    useNativeUUID: true
  }
})
