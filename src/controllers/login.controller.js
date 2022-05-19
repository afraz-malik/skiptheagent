import asyncHandler from 'express-async-handler'
import adminModel from '../models/admin.model.js'
import loginModel from '../models/login.model.js'
import userModel from '../models/user.model.js'
import { getToken, validateToken } from '../services/jwt.js'

export const registerAdmin = asyncHandler(async (req, res) => {
  try {
    const user = await loginModel.findOne({ email: req.body.email })
    if (!user) {
      const loginModelEntery = await loginModel.create({
        ...req.body,
        role: 'Admin',
      })
      const userModelEntry = await adminModel.create({
        ...req.body,
        loginId: loginModelEntery._id,
      })
      // let modifiedUser = await getUser(registeredUser.id)
      res.status(200).json({
        success: 'ok',
        user: {
          ...userModelEntry._doc,
          token: getToken(loginModelEntery.id),
        },
      })
    } else {
      throw new Error('Admin Already Exists. Try different email')
    }
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})
export const registerUser = asyncHandler(async (req, res) => {
  // return registerAdmin(req, res)

  try {
    const user = await loginModel.findOne({ email: req.body.email })
    if (!user) {
      const loginModelEntery = await loginModel.create({
        ...req.body,
        role: 'User',
      })
      const userModelEntry = await userModel.create({
        ...req.body,
        loginId: loginModelEntery._id,
      })
      // let modifiedUser = await getUser(registeredUser.id)
      res.status(200).json({
        success: 'ok',
        user: {
          ...userModelEntry._doc,
          token: getToken(loginModelEntery.id),
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
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  try {
    const loginEntry = await loginModel.findOne({ email })
    if (loginEntry && (await loginEntry.matchPassword(password))) {
      // let modifiedUser = await getUser(user.id)
      if (loginEntry.role === 'Admin') {
        let userInfo = await adminModel.findOne(
          { loginId: loginEntry._id },
          { loginId: 0 }
        )
        res.json({
          success: 'ok',
          message: 'Welcome Admin',
          user: {
            ...userInfo._doc,
            token: getToken(loginEntry.id),
          },
        })
      } else {
        let userInfo = await userModel.findOne(
          { loginId: loginEntry._id },
          { loginId: 0 }
        )
        res.json({
          success: 'ok',
          message: 'Welcome User',
          user: {
            ...userInfo._doc,
            token: getToken(loginEntry.id),
            email: loginEntry.email,
          },
        })
      }
    } else {
      res.status(400)
      throw new Error('Wrong Credentials Try again')
    }
  } catch (error) {
    throw new Error(error.message)
  }
})
export const forgetPassword = asyncHandler(async (req, res) => {
  const { email, path } = req.body

  let loginUser = await loginModel.findOne({ email })
  if (loginUser) {
    let token = getToken(loginUser.id)
    res.json({
      success: true,
      url: path + '?email=' + email + '&token=' + token,
    })
  } else {
    res.status(403)
    throw Error('Email not found')
  }
})
export const resetPassword = asyncHandler(async (req, res) => {
  const { password, confirmPassword, token } = req.body
  try {
    let id = validateToken('Bearer ' + token)

    let loginUser = await loginModel.findById(id)
    if (!loginUser) {
      res.status(403)
      throw new Error('Email not Found')
    }
    if (password !== confirmPassword) {
      throw new Error('Password and confirm password does not matched')
    }
    loginUser.password = password
    await loginUser.save()
    res.json('success')
  } catch (error) {
    // console.log(error.message)
    throw new Error('Invalid token try requesting again')
  }
})

export const googleLoginController = asyncHandler(async (req, res) => {
  console.log(req.body.apiKey)
})

export const updateUser = asyncHandler(async (req, res) => {
  // console.log(req.body)
  try {
    const id = validateToken(req.headers.authorization)
    const user = await userModel.findOne({ loginId: id })
    let payload = req.body
    if (user) {
      await userModel
        .updateOne(user, payload, {
          upsert: true,
        })
        .then((response) => {
          userModel
            .findOne({ loginId: id })
            .then((newUser) => {
              response.modifiedCount === 1
                ? res.status(200).json({ success: 'ok', user: newUser })
                : res.status(400).json({ error: 'Bad Request' })
            })
            .catch((err) => new Error(err))
        })
        .catch((err) => new Error(err))
      // res.status(200).json({ success: 'ok' })
    } else {
      res.status(400)
      throw new Error('User not Found')
    }
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
})
