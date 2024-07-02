import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import { database } from './database'
import { router } from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

const PORT = process.env.PORT || 3030

app.use(router)

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log(`Database connection successful.`)
  })
  console.log(
    `Server started successfully at port ${PORT} : https://localhost:${PORT}`
  )
})
