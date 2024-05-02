import { Response } from 'express'
import { AuthenticatedRequest } from '../middlewares/auth'
import { userService } from '../services/userService'

export const usersController = {
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
  }
}
