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

    try {
      const rulingAlreadyExists = await rulingService.findByTitle(title)
      if (rulingAlreadyExists)
        throw Error('Já existe um entendimento com esse título cadastrado.')
      const ruling = await rulingService.createNew({
        title,
        content,
        userId
      })
      return response.status(201).json(ruling)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // PUT /rulings/:id
  update: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params
    const { title, content } = request.body
    try {
      const rulingExists = await rulingService.findById(Number(id))
      if (!rulingExists)
        throw new Error(
          'Não há entendimento cadastrado com o identificador informado.'
        )
      const updatedRuling = await rulingService.updateById(Number(id), {
        title,
        content
      })
      return response.status(200).json(updatedRuling)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // DELETE /rulings/:id
  delete: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params

    try {
      const rulingExists = await rulingService.findById(Number(id))
      if (!rulingExists)
        throw new Error(
          'Não há entendimento cadastrado com o identificador informado.'
        )

      await rulingService.deleteById(Number(id))
      return response.status(204).send()
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
}
