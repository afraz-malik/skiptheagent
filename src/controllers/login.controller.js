import asyncHandler from 'express-async-handler'
import adminModel from '../models/admin.model.js'
import loginModel from '../models/login.model.js'
import userModel from '../models/user.model.js'
import { getToken, validateToken } from '../services/jwt.js'

// const getUser = async (loginId) => {
//   const user = await loginModel.findById(id)
//   if (!user) {
//     return false
//   }
//   return {
//     id: user.id,
//     displayName: user.displayName,
//     email: user.email,
//     phone: user.phone,
//   }
// }

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
          token: getToken(userModelEntry.id),
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
          token: getToken(userModelEntry.id),
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
            token: getToken(userInfo.id),
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
            token: getToken(userInfo.id),
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
  const { email } = req.body

  let user = await loginModel.findOne({ email })
  if (user) {
    res.json({ success: true })
  } else {
    res.status(403)
    throw Error('Email not found')
  }
})
export const resetPassword = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body
  try {
    let doc = await loginModel.findOne({ email })
    if (!doc) {
      res.status(403)
      throw new Error('Email not Found')
    }
    if (password !== confirmPassword) {
      throw new Error('Password and confirm password does not matched')
    }

    doc.password = password
    await doc.save()
    res.json('success')
  } catch (error) {
    throw new Error(error.message)
  }
})

export const googleLoginController = asyncHandler(async (req, res) => {
  console.log(req.body.apiKey)
})

export const updateUser = asyncHandler(async (req, res) => {
  try {
    const id = validateToken(req.headers.authorization)
    const user = await loginModel.findById(id)
    if (user) {
      await loginModel
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
