import { setUser } from './user/user.reducers'
import { dataReducer } from './data/data.reducers.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  setUser,
  dataReducer,
})

export default rootReducer
