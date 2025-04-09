import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

export interface Document {
  id: string
  filename: string
  content: string
}

export interface DocumentCreationAttributes extends Optional<Document, 'id'> {}

export interface DocumentInstance
  extends Model<Document, DocumentCreationAttributes>,
    Document {}

export const Document = database.define<
  DocumentInstance,
  DocumentCreationAttributes
>('Document', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  filename: {
    allowNull: false,
    type: DataTypes.STRING
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT
  }
})
