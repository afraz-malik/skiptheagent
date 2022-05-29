import { validateToken } from '../services/jwt.js'
import asyncHandler from 'express-async-handler'
import adsModel from '../models/ads.model.js'
import userModel from '../models/user.model.js'
export const createAd = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    let userId = await userModel.findOne({ loginId: id })

    if (id) {
      res
        .status(200)
        .json(await adsModel.create({ ...req.body, userId: userId._id }))
    }
  } catch (error) {
    res.json(error)
  }
})
export const editAd = asyncHandler(async (req, res) => {
  try {
    validateToken(req.headers.authorization)
    res.status(200).json(
      await adsModel.updateOne({ _id: req.body.id }, req.body, {
        upsert: true,
      })
    )
  } catch (error) {
    res.json(error)
  }
})
export const getUserAds = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    let userId = await userModel.findOne({ loginId: id })
    if (userId) {
      res.status(200).json({
        active_count: await adsModel
          .find()
          .where({
            userId,
            isDeleted: false,
          })
          .count(),
        removed_count: await adsModel
          .find()
          .where({
            userId,
            isDeleted: true,
          })
          .count(),
        ads: await adsModel
          .find()
          .where({
            userId,
            ...(req.query.isDeleted
              ? { isDeleted: req.query.isDeleted }
              : { isDeleted: false }),
          })
          .sort({
            ...(req.query.sortBy === 'recent' && { createdAt: -1 }),
            ...(req.query.sortBy === 'popularity' && { createdAt: 1 }),
            ...(req.query.sortBy === 'price-low' && { 'selling.price': 1 }),
            ...(req.query.sortBy === 'price-high' && { 'selling.price': -1 }),
          }),
      })
    }
  } catch (error) {
    console.log(error.message)
    res.json(error)
  }
})
export const getUserLikedAds = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    if (id) {
      let { likedAds } = await userModel.findOne({ loginId: id })
      if (likedAds.length > 0) {
        let ads = await adsModel
          .where('_id')
          .in(likedAds)
          .sort({
            ...(req.query.sortBy === 'recent' && { createdAt: -1 }),
            ...(req.query.sortBy === 'popularity' && { createdAt: 1 }),
            ...(req.query.sortBy === 'price-low' && { 'selling.price': 1 }),
            ...(req.query.sortBy === 'price-high' && { 'selling.price': -1 }),
          })
          .exec()

        res.status(200).json({ success: true, ads })
      } else {
        res.status(200).json({ success: true, ads: [] })
      }
    }
  } catch (error) {
    console.log(error)
    // res.json(error)
  }
})
export const deleteAd = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    let userId = await userModel.findOne({ loginId: id })
    if (userId) {
      res
        .status(200)
        .json(
          await adsModel.updateOne(
            { _id: req.params.id },
            { isDeleted: true },
            { upsert: true }
          )
        )
    }
  } catch (error) {
    console.log(error.message)
    res.json(error.message)
  }
})
