import { Document } from '../models'

export const documentService = {
  getAllFilenames: async () => {
    const documents = await Document.findAll({
      attributes: ['filename', 'id']
    })
    return documents
  },

  findById: async (id: string) => {
    const document = await Document.findOne({
      where: {
        id
      },
      attributes: ['id', 'filename', 'content']
    })
    return document
  }
}
