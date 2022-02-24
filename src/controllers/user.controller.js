const asyncHandler = require('express-async-handler')
const { userModel } = require('../models/user.model')
const { getToken, validateToken } = require('../services/jwt')
const registerUser = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) {
      await userModel.create(req.body)
      res.status(200)
      res.json({
        success: 'ok',
      })
    } else {
      throw new Error('User Already Exists. Try different email')
    }
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})
const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  try {
    const user = await userModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        token: getToken(user.id),
      })
    } else {
      res.status(400)
      throw new Error('Wrong Credentials Try again')
    }
  } catch (error) {
    throw new Error(error.message)
  }
})
const updateUser = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    const user = await userModel.findById(id)
    if (user) {
      await userModel
        .updateOne(user, req.body, {
          upsert: true,
        })
        .then((response) => {
          response.modifiedCount === 1
            ? res.status(200).json({ success: 'udpated' })
            : res.status(400).json({ error: 'Bad Request' })
        })
        .catch((err) => new Error(err))
    } else {
      res.status(400)
      throw new Error('User not Found')
    }
  } catch (error) {
    throw new Error(error.message)
  }
})
module.exports = { registerUser, loginUser, updateUser }
