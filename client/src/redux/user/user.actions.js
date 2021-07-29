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

export const passwordResetAction = (email) => ({
  type: 'PASSWORD_RESET_START',
  payload: email,
})
export const passwordResetSuccess = () => ({
  type: 'PASSWORD_RESET_SUCCESS',
})
export const passwordResetFailed = (err) => ({
  type: 'PASSWORD_RESET_FAILED',
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
