import { User } from '../models'
import { UserCreationAttributes } from '../models/User'

export const userService = {
  isEmailAuthorized: async (email: string) => {
    const preAuthorizedUsers = [
      'smailey.behm@gmail.com',
      'vbs@tjpr.jus.br',
      'julianabeckerquirino@gmail.com',
      'leofds@gmail.com',
      'gianluca.pezzini@gmail.com',
      'robert.tomal.1@gmail.com',
      'paulobielen@gmail.com',
      'jamilebaruki@gmail.com',
      'suelenluczynskiflorentino@gmail.com'
    ]
    const isInTheList = preAuthorizedUsers.find(
      userEmail => userEmail === email
    )
    console.log(isInTheList)

    return isInTheList
  },
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
  },
  updatePassword: async (userId: number, password: string) => {
    const [affectedRows, updatedUsers] = await User.update(
      { password },
      {
        where: { id: userId },
        returning: true,
        individualHooks: true
      }
    )
    return updatedUsers[0]
  }
}
