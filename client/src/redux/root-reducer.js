import { setUser } from './user/user.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  setUser,
})

export default rootReducer
