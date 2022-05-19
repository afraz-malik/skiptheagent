import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    loginId: {
      type: Schema.Types.ObjectId,
      ref: 'logins',
      required: [true, 'loginId. id is a required field'],
    },
    email: {
      type: String,
      required: [true, 'Email. id is a required field'],
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
    zip: {
      type: String,
      required: false,
      default: '',
    },
    username: {
      type: String,
      required: false,
      default: '',
    },
    city: {
      type: String,
      required: false,
      default: '',
    },
    country: {
      type: String,
      required: false,
      default: '',
    },
    imgUrl: {
      type: String,
      required: false,
      default: '',
    },
    likedAds: {
      type: Array,
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
export default mongoose.model('users', userSchema)
