import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const loginSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      require: true,
      enum: ['User', 'Admin'],
    },
  },
  {
    timestamps: true,
  }
)
loginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
loginSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
    console.log('next')
  }
  console.log('salting')
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  console.log('salting done')
})

export default mongoose.model('logins', loginSchema)
