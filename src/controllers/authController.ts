import { Request, Response } from 'express'
import { userService } from '../services/userService'
import { jwtService } from '../services/jwtService'

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
  },
  // POST /auth/login
  login: async (request: Request, response: Response) => {
    const { email, password } = request.body

    try {
      const user = await userService.findByEmail(email)
      if (!user) throw new Error('E-mail não registrado.')
      user.checkPassword(password, (error, isSame) => {
        if (error) return response.status(400).json({ message: error.message })
        if (!isSame)
          return response.status(401).json({ message: 'Senha incorreta.' })

        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }

        const token = jwtService.signPayload(payload, '7d')

        return response.json({ authenticated: true, user, token })
      })
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
}
