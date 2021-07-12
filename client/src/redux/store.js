import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducers'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger]
export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)
