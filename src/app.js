import express from 'express'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router.js'
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

// if (process.env.NODE_ENV !=== 'production') {
// app.use(express.static(path.join(__dirname, 'client/build')))

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// })
// }
app.get('/', (req, res) => res.send('Server is running'))
app.use('/api', router)
//For serving images
// app.use('/api/user', userRouter)

// app.use('/api/ads', adsRouter)
app.use(notFound)
app.use(errorHandler)

export default app
