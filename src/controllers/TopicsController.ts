import { Response } from 'express'
import { AuthenticatedRequest } from '../middlewares/auth'
import { topicService } from '../services/topicService'

export const topicsController = {
  // POST /rulings/:id/topic
  create: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params
    const { title, content } = request.body

    try {
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
  },
  // // PUT /rulings/topic/:id
  update: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params
    const { title, content } = request.body
    try {
      const topicExists = await topicService.findById(Number(id))
      if (!topicExists)
        throw new Error(
          'Não há tópico cadastrado neste entendimento com o identificador informado.'
        )
      const updatedTopic = await topicService.updateById(Number(id), {
        title,
        content
      })
      return response.status(200).json(updatedTopic)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // // DELETE /rulings/topic/:id
  delete: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params

    try {
      const topicExists = await topicService.findById(Number(id))
      if (!topicExists)
        throw new Error(
          'Não há tópico cadastrado com o identificador informado.'
        )

      await topicService.deleteById(Number(id))
      return response.status(204).send()
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
}
