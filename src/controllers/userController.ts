import { Response } from 'express'
import { AuthenticatedRequest } from '../middlewares/auth'
import { userService } from '../services/userService'

export const userController = {
  // PUT /users/current
  update: async (request: AuthenticatedRequest, response: Response) => {
    const userId = request.user!.id
    const { name, email } = request.body
    try {
      const updatedUser = await userService.update(userId, {
        name,
        email
      })
      return response.status(200).json(updatedUser)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // PUT /users/current/password
  updatePassword: async (request: AuthenticatedRequest, response: Response) => {
    const user = request.user!
    console.log(user)
    const { currentPassword, newPassword } = request.body

    user.checkPassword(currentPassword, async (error, isSame) => {
      try {
        if (error) throw new Error('Erro de verificação.')
        if (!isSame) throw new Error('Senha incorreta!')
        await userService.updatePassword(user.id, newPassword)
        return response
          .status(200)
          .json({ message: 'Senha atualizada com sucesso!' })
      } catch (error) {
        if (error instanceof Error)
          return response.status(400).json({ message: error.message })
      }
    })
  }
}
