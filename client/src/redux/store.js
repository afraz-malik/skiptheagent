import { createStore, applyMiddleware } from 'redux'

//Middlewares
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'

//Redux
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
sagaMiddleware.run(rootSaga)
