import multer from 'multer'
import path from 'path'
import userModel from '../models/user.model.js'
import { validateToken } from './jwt.js'
const __dirname = path.resolve()
import fs from 'fs'
import loginModel from '../models/login.model.js'
import adminModel from '../models/admin.model.js'

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    let loginId = validateToken(req.headers.authorization)
    let loginEntry = await loginModel.findById(loginId)
    let user
    if (loginEntry.role === 'Admin') {
      user = await adminModel.findOne({ loginId })
    } else {
      user = await userModel.findOne({ loginId })
    }
    console.log(loginEntry)
    var dir = `public/images/${user._id}/`
    console.log(user)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export const upload = multer({ storage, fileFilter })
