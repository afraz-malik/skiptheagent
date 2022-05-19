import { toast } from 'react-toastify'
import { store } from '../redux/store'
import { signOutStart } from '../redux/user/user.actions'
import axios from 'axios'
export const db_url = 'http://localhost:5000/api'
// export const db_url = "http://localhost:8000/";
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
  // return fetch(`${db_url}${url}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     Authorization: 'Bearer ' + token,
  //     mode: 'no-cors',
  //     enctype: 'multipart/form-data',
  //   },
  //   body: JSON.stringify(payload),
  // })
  //   .then((res) => {
  //     status = res.status
  //     return res.json()
  //   })
  //   .then((res) => {
  //     if (status !== 200) throw new Error(res.message)
  //     if (res.message === 'jwt expired' || res.message === 'jwt malformed')
  //       throw new Error(res.message)
  //     else {
  //       return res
  //     }
  //   })
  //   .catch((err) => {
  //     if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
  //       toast.dismiss()
  //       toast.error('Your session has expired. Kindly login again')
  //       store.dispatch(signOutStart())
  //     }
  //     throw new Error(err)
  //   })
}

// export const fetchBackend = async (url, token) => {
//   // return fetch(`${db_url}${url}`, {
//   //   method: 'GET',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //     'Access-Control-Allow-Origin': '*',
//   //     Authorization: 'Bearer ' + store.getState().setUser.token,
//   //     mode: 'no-cors',
//   //   },
//   // })
//   return axios
//     .get(
//       `${db_url}${url}`,

//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           Authorization: 'Bearer ' + store.getState().setUser.token,
//           mode: 'no-cors',
//         },
//       }
//     )
//     .then((res) => {
//       return res.data
//     })
//     .catch((err) => {
//       console.log(err.message)
//       if (
//         err.response.data.message === 'jwt expired' ||
//         err.response.data.message === 'jwt malformed'
//       ) {
//         toast.dismiss()
//         toast.error('Your session has expired. Kindly login again')
//         store.dispatch(signOutStart())
//       } else {
//         throw new Error(err.message)
//       }
//     })
// }

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
  getUserAds: '/user/ads',
  getUserLikedAds: '/user/ads/liked',
  deleteAd: '/user/ads', //Delete
  // Public Ads
  getRecentAds: '/ads/latest',
  getAd: '/ads/',
  getAds: '/ads',
}
