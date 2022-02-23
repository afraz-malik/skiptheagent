const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const {
  registerUser,
  loginUser,
  updateUser,
} = require('../controllers/user.controller')
const { validateToken } = require('../services/jwt')

const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
//  Private Routes
userRouter.use(
  expressAsyncHandler(async (req, res, next) => {
    try {
      if (validateToken(req.headers.authorization)) next()
    } catch (error) {
      throw new Error(error.message)
    }
  })
)
userRouter.post('/update', updateUser)
module.exports = userRouter
