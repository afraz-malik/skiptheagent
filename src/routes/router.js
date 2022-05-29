// import adsRouter from './ads.routes.js'
// import userRouter from './user.route.js'
import express from 'express'
import { getAd, getAds, getLatestAds } from '../controllers/ads.controller.js'
import {
  forgetPassword,
  getUser,
  googleLoginController,
  loginUser,
  registerUser,
  resetPassword,
  updateUser,
} from '../controllers/login.controller.js'
import expressAsyncHandler from 'express-async-handler'
import { validateToken } from '../services/jwt.js'
import {
  createAd,
  deleteAd,
  editAd,
  getUserAds,
  getUserLikedAds,
} from '../controllers/userAds.controller.js'
import path from 'path'
import { uploadImages } from '../controllers/misc.controller.js'
import { upload } from '../services/multer.js'
const __dirname = path.resolve()

let router = express.Router()

router
  //Serve Static Images
  .use('/images/', express.static(path.join(__dirname, 'public/images')))
  //Public Ads Routes
  .get('/ads/latest', getLatestAds)
  .get('/ads/', getAds)
  .get('/ads/:id', getAd)
  // User Routes
  .get('/user/getuser/:id', getUser)
  .post('/user/register', registerUser)
  .post('/user/login', loginUser)
  .post('/user/login/google', googleLoginController)
  .post('/user/forget', forgetPassword)
  .post('/user/reset-password', resetPassword)

// Private
router.use(
  expressAsyncHandler(async (req, res, next) => {
    try {
      if (validateToken(req.headers.authorization)) next()
    } catch (error) {
      throw new Error(error.message)
    }
  })
)

router
  //Upload Images and get link
  .post('/upload', upload.array('photo'), uploadImages)
  .get('/user/ads/', getUserAds)
  .post('/user/ads/', createAd)
  .put('/user/ads/', editAd)
  .delete('/user/ads/:id', deleteAd)
  .post('/user/update', updateUser)
  .get('/user/ads/liked', getUserLikedAds)
export default router
