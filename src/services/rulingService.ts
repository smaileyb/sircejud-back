import { Ruling } from '../models'

export const rulingService = {
  getAll: async () => {
    const rulings = await Ruling.findAll({
      attributes: ['id', 'title', 'content'],
      include: {
        association: 'User',
        attributes: ['name']
      }
    })
    return rulings
  }
}
