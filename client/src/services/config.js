import { toast } from 'react-toastify'
import { store } from '../redux/store'
import { signOutStart } from '../redux/user/user.actions'
import axios from 'axios'
import { io } from 'socket.io-client'
let server = 'http://localhost:5000/'
export const db_url = server + 'api'
export const socket_url = server
export const fetchBackend = async (method, url, payload, params) => {
  return axios({
    method,
    url: `${db_url}${url}`,
    ...(payload && { data: payload }),
    ...(params && { params }),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + store.getState().setUser.token,
      mode: 'no-cors',
    },
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      // console.log(err.message)
      if (
        err.response.data.message === 'jwt expired' ||
        err.response.data.message === 'jwt malformed'
      ) {
        toast.dismiss()
        toast.error('Your session has expired. Kindly login again')
        store.dispatch(signOutStart())
      } else {
        throw new Error(err.response.data.message)
      }
    })
}
export const socket = io(socket_url)
export const API = {
  // Auth
  login: '/user/login/',
  googleLogin: '/user/login/google',
  updateUser: '/user/update',
  passwordReset: '/user/reset-password',
  register: '/user/register/',
  passwordForgot: '/user/forget',
  // User Ads
  upload: '/upload', //POST
  postAd: '/user/ads', //POST
  getUser: '/user/getuser/', // GET
  getUserAds: '/user/ads',
  getUserLikedAds: '/user/ads/liked',
  deleteAd: '/user/ads', //Delete
  // Public Ads
  getRecentAds: '/ads/latest',
  getAd: '/ads/',
  getAds: '/ads',
}
