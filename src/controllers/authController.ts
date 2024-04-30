import { Request, Response } from 'express'
import { userService } from '../services/userService'

export const authController = {
  // POST /auth/register
  register: async (request: Request, response: Response) => {
    const { name, email, password } = request.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)
      if (userAlreadyExists) throw new Error('Este e-mail já está cadastrado.')
      const user = await userService.create({
        name,
        email,
        password,
        role: 'user'
      })

      return response.status(201).json(user)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
}
