import { Request, Response } from 'express'
import { rulingService } from '../services/rulingService'

export const rulingsController = {
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
  }
}
