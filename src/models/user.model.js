import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    loginId: {
      type: Schema.Types.ObjectId,
      ref: 'admins',
      required: [true, 'loginId. id is a required field'],
    },
    displayName: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: false,
      default: '',
    },
    gender: {
      type: String,
      required: false,
      default: '',
    },
    dob: {
      type: String,
      required: false,
      default: '',
    },
    phone: {
      type: String,
      required: false,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('users', userSchema)
