import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import {
  registerUser,
  loginUser,
  updateUser,
  googleLoginController,
  forgetPassword,
  resetPassword,
} from '../controllers/login.controller.js'
import { validateToken } from '../services/jwt.js'
import userAdsRouter from './userAds.routes..js'

const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/login/google', googleLoginController)
userRouter.post('/forget', forgetPassword)
userRouter.post('/reset-password', resetPassword)
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
userRouter.use('/ads', userAdsRouter)
export default userRouter
