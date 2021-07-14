const initialURLState = {
  url: null,
}
export const URLReducer = (state = initialURLState, action) => {
  switch (action.type) {
    case 'SET_URL':
      return Object.assign({}, state, { url: action.payload })
    default:
      return state
  }
}

const initialSignUpState = {
  user: null,
  loading: false,
  error: null,
}
export const setUser = (state = initialSignUpState, action) => {
  switch (action.type) {
    case 'SIGN_UP_START':
    case 'SIGN_IN_START':
    case 'SIGN_OUT_START':
      return Object.assign({}, state, { loading: true })
    case 'SIGN_IN_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        user: action.payload,
        error: null,
      })
    case 'SIGN_OUT_SUCCESS':
      return Object.assign({}, state, {
        loading: null,
        user: null,
        error: null,
      })

    case 'SIGN_IN_FAILED':
    case 'SIGN_OUT_FAILED':
      return Object.assign({}, state, { loading: false, error: action.payload })
    default:
      return state
  }
}
