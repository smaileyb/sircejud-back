import express from 'express'
import { database } from './database'

const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log(`Database connection successful.`)
  })
  console.log(
    `Server started successfully at port ${PORT} : https://localhost:${PORT}`
  )
})
