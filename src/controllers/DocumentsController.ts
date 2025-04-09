import { Request, Response } from 'express'
import { documentService } from '../services/documentService'
import { AuthenticatedRequest } from '../middlewares/auth'

export const documentsController = {
  // GET /documents
  index: async (request: Request, response: Response) => {
    try {
      const allDocumentsFilename = await documentService.getAllFilenames()
      if (!response.status(200)) throw new Error('Arquivos não encontrados.')
      return response.status(200).json(allDocumentsFilename)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  },
  // GET /documents/[id]
  getOne: async (request: AuthenticatedRequest, response: Response) => {
    const { id } = request.params
    try {
      const oneDocument = await documentService.findById(id)
      if (!response.status(200)) throw new Error('Documento não encontrado.')
      return response.status(200).json(oneDocument)
    } catch (error) {
      if (error instanceof Error)
        return response.status(400).json({ message: error.message })
    }
  }
}
