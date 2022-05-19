import { API, db_url, fetchBackend } from '../../services/config.js'

export const isUserAuthenticated = () => ({
  type: 'CHECKING_USER',
})
export const signUpStart = (userCrendtial) => ({
  type: 'SIGN_UP_START',
  payload: userCrendtial,
})
export const signInStart = (userCredential) => ({
  type: 'SIGN_IN_START',
  payload: userCredential,
})
export const signInWithGoogleStart = () => ({
  type: 'SIGN_IN_WITH_GOOGLE_START',
})
export const signInSuccess = (userCredential) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: userCredential,
})
export const signInFailed = (error) => ({
  type: 'SIGN_IN_FAILED',
  payload: error,
})

export const signOutStart = () => ({
  type: 'SIGN_OUT_START',
})
export const signOutSuccess = () => ({
  type: 'SIGN_OUT_SUCCESS',
})
export const signOutFailed = () => ({
  type: 'SIGN_OUT_FAILED',
})

export const passwordResetAction = (payload) => ({
  type: 'PASSWORD_RESET_START',
  payload: payload,
})
export const passwordResetSuccess = () => ({
  type: 'PASSWORD_RESET_SUCCESS',
})
export const passwordResetFailed = (err) => ({
  type: 'PASSWORD_RESET_FAILED',
  payload: err,
})
export const passwordForgotAction = (payload) => ({
  type: 'PASSWORD_FORGOT_START',
  payload: payload,
})
export const passwordForgotSuccess = () => ({
  type: 'PASSWORD_FORGOT_SUCCESS',
})
export const passwordForgotFailed = (err) => ({
  type: 'PASSWORD_FORGOT_FAILED',
  payload: err,
})

export const passwordChange = (payload) => ({
  type: 'PASSWORD_CHANGE_START',
  payload: payload,
})
export const passwordChangeSuccess = () => ({
  type: 'PASSWORD_CHANGE_SUCCESS',
})
export const passwordChangeFailed = (err) => ({
  type: 'PASSWORD_CHANGE_FAILED',
  payload: err,
})
export const updateUser = (payload) => ({
  type: 'UPDATE_USER_START',
  payload: payload,
})
export const updateSuccess = (payload) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload,
})
export const updateFailed = (err) => ({
  type: 'UPDATE_USER_FAILED',
  payload: err,
})

export const clearSuccess = () => ({
  type: 'CLEAR_SUCCESS',
})

export const uploadImages = async ({ payload }) => {
  // console.log(payload)
  // Object.keys(payload).forEach((key, i) => {
  //   fd.append(key, payload[key])
  // })
  // fd.append('pho')\
  // let urls = []
  // await payload.forEach(async (file) => {
  //   const fd = new FormData()
  //   fd.append('photo', file)
  //   let res = await fetchBackend('Post', API.upload, fd)
  //   console.log(db_url + '/images/' + res)
  //   urls.push(`${db_url + '/images/' + res}`)
  // })

  let allData = payload.map((file) => {
    const fd = new FormData()
    fd.append('photo', file)
    return fetchBackend('Post', API.upload, fd).then(
      (res) => `${db_url + '/images/' + res}`
    )
  })
  return Promise.all(allData)
  // Promise.all(requests).then((res) => console.log(res))
  // console.log(userProfileData)
  // return urls
}
// export const setAddLike = (payload) => ({
//   type: 'ADD_LIKE_START',
//   payload: payload,
// })
// export const setAddLikeSuccess = (payload) => ({
//   type: 'ADD_LIKE_SUCCESS',
//   payload,
// })
// export const setAddLikeFailed = (err) => ({
//   type: 'ADD_LIKE_FAILED',
//   payload: err,
// })
