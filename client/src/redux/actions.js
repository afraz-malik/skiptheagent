export const setUrl = (url) => ({
  type: 'SET_URL',
  payload: url,
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
