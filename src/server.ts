import express from 'express'
import { database } from './database'
import { router } from './routes'

const app = express()

app.use(express.static('public'))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(router)

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log(`Database connection successful.`)
  })
  console.log(
    `Server started successfully at port ${PORT} : https://localhost:${PORT}`
  )
})
