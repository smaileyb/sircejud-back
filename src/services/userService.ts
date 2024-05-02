import { User } from '../models'
import { UserCreationAttributes } from '../models/User'

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      attributes: ['id', 'name', 'email', 'password'],
      where: { email }
    })
    return user
  },
  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes)
    return user
  },
  update: async (
    userId: number,
    newAttributes: {
      name: string
      email: string
    }
  ) => {
    const [affectedRows, updatedUsers] = await User.update(newAttributes, {
      where: { id: userId },
      returning: true
    })
    return updatedUsers[0]
  }
}
