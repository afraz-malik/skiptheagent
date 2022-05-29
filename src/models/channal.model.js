import mongoose from 'mongoose'
const Schema = mongoose.Schema

const channelSchema = new Schema(
  {
    users: { type: [Schema.Types.ObjectId], required: true },
    lastMessage: { type: String },
    unreadCount: Object,
    lastMessageTime: Date,
  },
  {
    timestamps: true,
    // toJSON: { virtuals: true },
  }
)
// userSchema.virtual('email').get(function () {
//   return this._id
// })
export default mongoose.model('channals', channelSchema)
