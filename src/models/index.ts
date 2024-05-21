import { Ruling } from './Ruling'
import { Topic } from './Topics'
import { User } from './User'

User.hasMany(Ruling)

Ruling.belongsTo(User)
Ruling.hasMany(Topic)

Topic.belongsTo(Ruling)

export { User, Ruling, Topic }
