import { Ruling } from '../models'
import { RulingCreationAttributes } from '../models/Ruling'

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
  },
  createNew: async (attributes: RulingCreationAttributes) => {
    const newRuling = Ruling.create(attributes)
    return newRuling
  },
  updateById: async () => {},
  deleteById: async () => {},
  findByTitle: async (title: string) => {
    const ruling = await Ruling.findOne({
      where: {
        title
      }
    })
    return ruling
  }
}
