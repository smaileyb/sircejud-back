import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

export interface Topic {
  id: number
  title: string
  content: string
  rulingId: number
}

export interface TopicCreationAttributes extends Optional<Topic, 'id'> {}

export interface TopicInstance
  extends Model<Topic, TopicCreationAttributes>,
    Topic {}

export const Topic = database.define<TopicInstance, TopicCreationAttributes>(
  'Topic',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rulingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'rulings', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  }
)
