import http from 'http'
import app from './app.js'
import { mongoConnect } from './services/mongo.js'

const server = http.createServer(app)
async function startServer() {
  await mongoConnect()
  server.listen(5000, () => console.log('Sever is running on port 5000'))
}
startServer()
