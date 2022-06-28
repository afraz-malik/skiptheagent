import mongoose from 'mongoose'
const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    channalId: {
      type: Schema.Types.ObjectId,
      ref: 'channels',
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // toJSON: { virtuals: true },
  }
)
// userSchema.virtual('email').get(function () {
//   return this._id
// })
export default mongoose.model('messages', messageSchema)
