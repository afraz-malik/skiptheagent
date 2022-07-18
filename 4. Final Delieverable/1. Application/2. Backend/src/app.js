import express from 'express'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router.js'
import path from 'path'
let __dirname = path.resolve()
dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
// app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  next()
})

app.use(express.static(path.join(__dirname, 'client/build')))
// app.get('/', (req, res) => res.send  ('Server is running'))
app.use('/api', router)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
app.use(notFound)
app.use(errorHandler)

export default app
