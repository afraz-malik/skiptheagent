import mongoose from 'mongoose'

mongoose.connection.once('open', () => {
  console.log('Mongoose connection ready')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

export async function mongoConnect() {
  console.log('Connecting Mongo Db...')
  await mongoose.connect(process.env.MONGO_URL)
}
export async function mongoDisconnect() {
  await mongoose.disconnect()
}
