import { URLReducer, setUser } from './reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  URLReducer,
  setUser,
})

export default rootReducer
