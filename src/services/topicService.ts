import { Topic } from '../models'
import { TopicCreationAttributes } from '../models/Topics'

export const topicService = {
  createNew: async (attributes: TopicCreationAttributes) => {
    const newTopic = Topic.create(attributes)
    return newTopic
  },
  updateById: async (
    topicId: number,
    newAttributes: {
      title: string
      content: string
    }
  ) => {
    const [affectedRows, updatedTopics] = await Topic.update(newAttributes, {
      where: { id: topicId },
      returning: true
    })
    return updatedTopics[0]
  },
  deleteById: async (topicId: number) => {
    await Topic.destroy({ where: { id: topicId } })
  },
  findByTitle: async (title: string) => {
    const topic = await Topic.findOne({
      where: {
        title
      }
    })
    return topic
  },
  findById: async (id: number) => {
    const topic = await Topic.findOne({
      where: {
        id
      },
      attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
      include: {
        association: 'Ruling',
        attributes: ['id', 'title']
      }
    })
    return topic
  }
}
