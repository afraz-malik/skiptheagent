const asyncHandler = require('express-async-handler')
const { userModel } = require('../models/user.model')
const { getToken, validateToken } = require('../services/jwt')

const getUser = async (id) => {
  const user = await userModel.findById(id)
  if (!user) {
    return false
  }
  return {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    phone: user.phone,
  }
}
const googleLoginController = asyncHandler(async (req, res) => {
  console.log(req.body.apiKey)
})
const registerUser = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) {
      const registeredUser = await userModel.create(req.body)
      let modifiedUser = await getUser(registeredUser.id)
      res.status(200)
      res.json({
        success: 'ok',
        user: {
          ...modifiedUser,
          token: getToken(modifiedUser.id),
        },
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
  console.log('normal login')
  const { email, password } = req.body
  try {
    const user = await userModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      let modifiedUser = await getUser(user.id)
      res.json({
        success: 'ok',
        user: {
          ...modifiedUser,
          token: getToken(modifiedUser.id),
        },
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
            ? res.status(200).json({ success: 'ok', user: getUser(id) })
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
module.exports = { registerUser, loginUser, updateUser, googleLoginController }
