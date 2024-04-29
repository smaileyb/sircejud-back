import { database } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
}

export interface UserCreationAttributes extends Optional<User, 'id'> {}

export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {}

export const User = database.define<UserInstance, User>('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING
  }
})
