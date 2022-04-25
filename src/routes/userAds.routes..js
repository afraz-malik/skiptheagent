import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { createAd, getUserAds } from '../controllers/userAds.controller.js'

import { validateToken } from '../services/jwt.js'

const userAdsRouter = express.Router()
//  Private Routes
userAdsRouter.use(
  expressAsyncHandler(async (req, res, next) => {
    try {
      if (validateToken(req.headers.authorization)) next()
    } catch (error) {
      throw new Error(error.message)
    }
  })
)
userAdsRouter.get('/', getUserAds).post('/', createAd)
// module.exports = userAdsRouter
export default userAdsRouter
