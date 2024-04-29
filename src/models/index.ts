import { Ruling } from './Ruling'
import { User } from './User'

User.hasMany(Ruling)

Ruling.belongsTo(User)

export { User, Ruling }
