import adsRouter from './ads.routes.js'
import userRouter from './user.route.js'
import express from 'express'

let router = express.Router()

router.use('/ads', adsRouter)
router.use('/user', userRouter)

export default router
