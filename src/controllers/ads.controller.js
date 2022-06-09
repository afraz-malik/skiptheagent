import asyncHandler from 'express-async-handler'
import adsModel from '../models/ads.model.js'

import { validateToken } from '../services/jwt.js'

export const getAds = asyncHandler(async (req, res) => {
  try {
    // adsModel.ensureIndexes({ description: 'car_info' })
    // const query = { $car_info: { $search: 'Ferrari' } }
    // // Return only the `title` of each matched document
    // const projection = {
    //   _id: 0,
    //   description: 1,
    // }
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
      // {}
      // .project(projection)
      .find({
        ...(req.query.keywords && {
          $text: { $search: `"${req.query.keywords}"` },
        }),
        ...(req.query.model && { model: req.query.model }),
        ...(req.query.make && { 'details.make': req.query.make }),
        ...(req.query.price && { 'selling.price': req.query.price }),
        ...(req.query.body_type && {
          'details.body_type': req.query.body_type,
        }),
        ...(req.query.mileage && { 'details.mileage': req.query.mileage }),
        ...(req.query.engine_type && {
          'details.engine_type': req.query.engine_type,
        }),
        ...(req.query.exterior_color && {
          'details.exterior_color': req.query.exterior_color,
        }),
        ...(req.query.transmission && {
          'details.transmission': req.query.transmission,
        }),
        ...(req.query.engine_capacity && {
          'details.engine_capacity': req.query.engine_capacity,
        }),
        isDeleted: false,
      })
      // .where({
      //   car_info: '2019 Fiat 124 Spider',
      // })
      .sort({
        ...(req.query.sortBy === 'recent' && { createdAt: -1 }),
        ...(req.query.sortBy === 'popularity' && { createdAt: 1 }),
        ...(req.query.sortBy === 'price-low' && { 'selling.price': -1 }),
        ...(req.query.sortBy === 'price-high' && { 'selling.price': 1 }),
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
