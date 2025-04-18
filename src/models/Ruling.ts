import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

export interface Ruling {
  id: string
  title: string
  content: string
  userId: number
}

export interface RulingCreationAttributes extends Optional<Ruling, 'id'> {}

export interface RulingInstance
  extends Model<Ruling, RulingCreationAttributes>,
    Ruling {}

export const Ruling = database.define<RulingInstance, RulingCreationAttributes>(
  'Ruling',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  }
)
