import express from 'express'
import { getAds, getAd, getLatestAds } from '../controllers/ads.controller.js'

const adsRouter = express.Router()
adsRouter.get('/latest', getLatestAds)
adsRouter.get('/:id', getAd)
adsRouter.get('/', getAds)

export default adsRouter
