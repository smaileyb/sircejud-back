import { Request, Response } from 'express'
import { rulingService } from '../services/rulingService'
import { AuthenticatedRequest } from '../middlewares/auth'

export const rulingsController = {
  // GET /rulings
  index: async (request: Request, response: Response) => {
    try {
      const allRulings = await rulingService.getAll()
      if (!response.status(200))
        throw new Error('Entendimentos não encontrados.')
      return response.status(200).json(allRulings)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // POST /rulings
  create: async (request: AuthenticatedRequest, response: Response) => {
    const userId = request.user!.id
    const { title, content } = request.body

    const rulingAlreadyExists = await rulingService.findByTitle(title)
    if (rulingAlreadyExists)
      throw Error('Já existe um entendimento com esse título cadastrado.')
    const ruling = await rulingService.createNew({
      title,
      content,
      userId
    })
    return response.status(201).json(ruling)
  },
  // PUT /rulings/:id
  update: async (request: AuthenticatedRequest, response: Response) => {},
  // DELETE /rulings/:id
  delete: async (request: AuthenticatedRequest, response: Response) => {}
}
