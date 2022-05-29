import http from 'http'
import app from './src/app.js'
import { mongoConnect } from './src/services/mongo.js'
import { Server } from 'socket.io'

import {
  deleteChannal,
  getAllUnreadCount,
  getChannals,
  getMessages,
  seenMessages,
  sendMessage,
} from './src/controllers/chat.controller.js'
const server = http.createServer(app)

export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
var clients = io.sockets.adapter.rooms
io.on('connection', (socket) => {
  socket.on('join', async (userId, callback) => {
    socket.join(userId)
    console.table(clients)
    console.log('User ' + userId + ' joined ')
    callback('User ' + userId + ' joined')
  })

  socket.on('getUnreadCount', async (userid, callback) =>
    io
      .to(userid.toString())
      .emit('unreadCount', await getAllUnreadCount(userid))
  )
  socket.on('fetchChannals', async (userId, callback) => {
    let channals = await getChannals(userId)
    callback({ channals })
  })
  socket.on('fetchMessages', async ({ user, authUser }, callback) => {
    const messages = await getMessages(user, authUser)
    if (messages.length > 0) {
      // socket.join(messages[0].channalId.toString())
    }
    callback({ messages })
  })
  socket.on('createChannal', async (payload, callback) => {
    const message = await sendMessage(payload)
    // socket.join(message.channalId.toString())
    io.to(message.channalId.toString()).emit('message', message)
    callback()
  })
  socket.on('sendMessage', async (payload, callback) => {
    const message = await sendMessage(payload)
    // io.to(message.channalId.toString()).emit('message', message)
    console.log(
      'Messaged recieved from ' +
        message.senderId.toString() +
        ' to ' +
        message.receiverId.toString()
    )

    io.to(message.senderId.toString()).emit('message', message)
    io.to(message.receiverId.toString()).emit('message', message)
    io.to(message.receiverId.toString()).emit(
      'unreadCount',
      await getAllUnreadCount(message.receiverId)
    )

    callback()
  })
  socket.on('deleteChannal', async (payload, callback) => {
    const response = await deleteChannal(payload)
    callback(response)
  })
  socket.on('seenMessages', async (payload, callback) => {
    const response = await seenMessages(payload)
    io.to(payload.authUser.toString()).emit(
      'unreadCount',
      await getAllUnreadCount(payload.authUser)
    )
    callback(response)
  })
  socket.on('disconnect', (reason) => console.log(reason))

  socket.on('destroy', () => {
    socket.disconnect()
  })
  // socket.on('fetchConversations', (userId, callback) => {
  //   const conversations = getUserConversations(userId)
  //   console.log(conversations)
  //   callback(conversations)
  // })
})
async function startServer() {
  await mongoConnect()
  server.listen(5000, () => console.log('Sever is running on port 5000'))
}
startServer()
