const express = require('express')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')
const userRouter = require('./routes/user.route')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
// console.log(require('dotenv').config())

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
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
// }
app.get('/', (req, res) => res.send('Server is running'))
app.use('/api/user', userRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
