import { Request, Response } from 'express'
import { rulingService } from '../services/rulingService'
import { AuthenticatedRequest } from '../middlewares/auth'
import { topicService } from '../services/topicService'
import { Topic } from '../models'

export const topicsController = {
  // POST /rulings/:id/topic
  create: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params
    const { title, content } = request.body

    try {
      const topicAlreadyExists = await topicService.findByTitle(title)
      if (topicAlreadyExists)
        throw Error('Já existe um tópico com esse título cadastrado.')
      const topic = await topicService.createNew({
        title,
        content,
        rulingId: Number(id)
      })
      return response.status(201).json(topic)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
  // GET /rulings
  // getOne: async (request: AuthenticatedRequest, response: Response) => {
  //   const { id } = request.params
  //   try {
  //     const oneRuling = await rulingService.findById(Number(id))
  //     if (!response.status(200)) throw new Error('Entendimento não encontrado.')
  //     return response.status(200).json(oneRuling)
  //   } catch (error) {
  //     if (error instanceof Error)
  //       return response.status(400).json({ message: error.message })
  //   }
  // },
  // // PUT /rulings/:id
  // update: async (request: AuthenticatedRequest, response: Response) => {
  //   const userId = request.user!.id
  //   const { id } = request.params
  //   const { title, content } = request.body
  //   try {
  //     const rulingExists = await rulingService.findById(Number(id))
  //     if (!rulingExists)
  //       throw new Error(
  //         'Não há entendimento cadastrado com o identificador informado.'
  //       )
  //     const updatedRuling = await rulingService.updateById(Number(id), {
  //       title,
  //       content,
  //       userId
  //     })
  //     return response.status(200).json(updatedRuling)
  //   } catch (error) {
  //     if (error instanceof Error)
  //       return response.status(400).json({ message: error.message })
  //   }
  // },
  // // DELETE /rulings/:id
  // delete: async (request: AuthenticatedRequest, response: Response) => {
  //   const { id } = request.params

  //   try {
  //     const rulingExists = await rulingService.findById(Number(id))
  //     if (!rulingExists)
  //       throw new Error(
  //         'Não há entendimento cadastrado com o identificador informado.'
  //       )

  //     await rulingService.deleteById(Number(id))
  //     return response.status(204).send()
  //   } catch (error) {
  //     if (error instanceof Error)
  //       return response.status(400).json({ message: error.message })
  //   }
  // }
}
