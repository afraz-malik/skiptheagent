import asyncHandler from 'express-async-handler'
import adsModel from '../models/ads.model.js'

import { validateToken } from '../services/jwt.js'

export const getAds = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel
      // .aggregate([
      //   {
      //     $match: { isDeleted: false },
      //   },
      //   {
      //     $sort: {
      //       // ...(req.params.sortBy === 'recent' && { createdAt: -1 }),
      //       ...(req.params.sortBy === 'price-high' && { 'selling.price': -1 }),
      //       // ...(req.params.sortBy === 'recent' && { createdAt: -1 }),
      //       // ...(req.params.sortBy === 'recent' && { createdAt: -1 }),
      //     },
      //   },
      // ])
      .find()
      .where({ isDeleted: false })
      .sort({
        ...(req.query.sortBy === 'recent' && { createdAt: -1 }),
        ...(req.query.sortBy === 'popularity' && { createdAt: 1 }),
        ...(req.query.sortBy === 'price-low' && { 'selling.price': 1 }),
        ...(req.query.sortBy === 'price-high' && { 'selling.price': -1 }),
      })
    return res.status(200).json(ads)
  } catch (error) {
    res.json(error)
  }
})
export const getAd = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel.findById(req.params.id)
    return res.status(200).json(ads)
  } catch (error) {
    throw new Error(error.message)
  }
})
export const getLatestAds = asyncHandler(async (req, res) => {
  try {
    let ads = await adsModel
      .find()
      .where({ isDeleted: false })

      .limit(4)
    return res.status(200).json(ads)
  } catch (error) {
    throw new Error(error.message)
  }
})
