const initialSignUpState = {
  loading: false,
  error: null,
  success: 0,
}
export const setUser = (state = initialSignUpState, action) => {
  switch (action.type) {
    case 'SIGN_UP_START':
    case 'SIGN_IN_START':
    case 'SIGN_OUT_START':
    case 'SIGN_IN_WITH_GOOGLE_START':
    case 'PASSWORD_RESET_START':
    case 'UPDATE_USER_START':
      return Object.assign({}, state, { loading: true, success: 0 })
    case 'SIGN_IN_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        user: action.payload,
        error: null,
        success: 1,
      })
    case 'SIGN_OUT_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        user: null,
        error: null,
        success: 1,
      })

    case 'UPDATE_USER_SUCCESS':
    case 'PASSWORD_RESET_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        error: null,
        success: 1,
      })

    case 'SIGN_IN_FAILED':
    case 'SIGN_OUT_FAILED':
    case 'PASSWORD_RESET_FAILED':
    case 'UPDATE_USER_FAILED':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
        success: 0,
      })
    default:
      return state
  }
}
