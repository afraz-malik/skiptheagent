import adminModel from '../models/admin.model.js'
import adsModel from '../models/ads.model.js'
import loginModel from '../models/login.model.js'
import userModel from '../models/user.model.js'

export async function startSeeder() {
  let admin = {
    displayName: 'Admin',
    email: 'admin@skiptheagent.com',
    password: 'admin123',
    displayName: 'Admin',
    info: '',
    gender: 'Male',
    dob: '02-12-1998',
    phone: '+92232329873',
    zip: '34353',
    username: 'admin',
    city: 'Lahore',
    country: 'Pakistan',
    imgUrl:
      'http://localhost:5000/api/images/628fd14277daa0f6be8a37a8/1653670325028.jpg',
    likedAds: [],
  }
  try {
    const user = await loginModel.findOne({ email: admin.email })
    if (!user) {
      const loginModelEntery = await loginModel.create({
        ...admin,
        role: 'Admin',
      })
      await adminModel.create({
        ...admin,
        loginId: loginModelEntery._id,
      })
      // let modifiedUser = await getUser(registeredUser.id)
      console.log('Admin seeded ')
    } else {
      throw new Error('User Already Exists. Try different email')
    }
  } catch (error) {}
}
