import asyncHandler from 'express-async-handler'
import adsModel from '../models/ads.model.js'

import { validateToken } from '../services/jwt.js'

export const getAds = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel.find()
    return res.status(200).json(ads)
  } catch (error) {
    res.json(error)
  }
})
export const getAd = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel.findById(req.params.id)
    console.log(ads)
    return res.status(200).json(ads)
  } catch (error) {
    throw new Error(error.message)
  }
})
export const getLatestAds = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel.find().limit(4)
    return res.status(200).json(ads)
  } catch (error) {
    throw new Error(error.message)
  }
})
