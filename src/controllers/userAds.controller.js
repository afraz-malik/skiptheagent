import { validateToken } from '../services/jwt.js'
import asyncHandler from 'express-async-handler'
import adsModel from '../models/ads.model.js'
export const createAd = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    if (id) {
      res.status(200).json(await adsModel.create({ ...req.body, userId: id }))
    }
  } catch (error) {
    res.json(error)
  }
})
export const getUserAds = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    if (id) {
      res.status(200).json(await adsModel.find({ userId: id }))
    }
  } catch (error) {
    res.json(error)
  }
})
