import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducers'
import logger from 'redux-logger';


export  const store = createStore(rootReducer, applyMiddleware(logger));
