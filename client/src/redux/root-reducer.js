import { URLReducer, setUser } from './user/user.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  URLReducer,
  setUser,
})

export default rootReducer
