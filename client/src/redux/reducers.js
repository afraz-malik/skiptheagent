const initialState = {
  url: null,
}
export const URLReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_URL':
      return Object.assign({}, state, { url: action.payload })
    default:
      return state
  }
}

const initialSignUpState = {
  user: null,
}
export const SignUpReducer = (state = initialSignUpState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return Object.assign({}, state, { user: action.payload })
    default:
      return state
  }
}
