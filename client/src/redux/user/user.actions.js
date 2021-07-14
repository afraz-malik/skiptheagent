export const setUrl = (url) => ({
  type: 'SET_URL',
  payload: url,
})
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
