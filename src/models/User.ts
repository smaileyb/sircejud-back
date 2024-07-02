import { database } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'
import bcrypt from 'bcryptjs'

type CheckPasswordCallback = (
  error: Error | undefined | null,
  isSame: boolean
) => void

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
    User {
  checkPassword: (
    password: string,
    callbackFunction: CheckPasswordCallback
  ) => void
}

export const User = database.define<UserInstance, User>(
  'Users',
  {
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
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.isNewRecord || user.changed('password')) {
          user.password = await bcrypt.hash(user.password.toString(), 10)
        }
      }
    }
  }
)

// @ts-ignore
User.prototype.checkPassword = function (
  password: string,
  callbackFunction: CheckPasswordCallback
) {
  // @ts-ignore
  bcrypt.compare(password, this.password, (error, isSame) => {
    if (error) {
      callbackFunction(error, false)
    } else {
      callbackFunction(error, isSame)
    }
  })
}
