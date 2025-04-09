import { Ruling, Topic, User } from '../models'
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
  updateById: async (
    rulingId: string,
    newAttributes: {
      title: string
      content: string
      userId: number
    }
  ) => {
    const [affectedRows, updatedRulings] = await Ruling.update(newAttributes, {
      where: { id: rulingId },
      returning: true
    })
    return updatedRulings[0]
  },
  deleteById: async (rulingId: string) => {
    await Ruling.destroy({ where: { id: rulingId } })
  },
  findByTitle: async (title: string) => {
    const ruling = await Ruling.findOne({
      where: {
        title
      }
    })
    return ruling
  },
  findById: async (id: string) => {
    const ruling = await Ruling.findOne({
      where: {
        id
      },
      attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
      include: [
        { model: User, as: 'User', attributes: ['name'] },
        {
          model: Topic,
          as: 'Topics',
          attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt']
        }
      ]
    })
    return ruling
  }
}
