import { URLReducer, SignUpReducer } from './reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  URLReducer,
  SignUpReducer,
})

export default rootReducer
