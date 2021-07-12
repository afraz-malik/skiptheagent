import { all, call } from 'redux-saga/effects'
import { signUpWithEmailStart, signInWithEmailStart } from './saga'

export default function* rootSaga() {
  yield all([call(signUpWithEmailStart), call(signInWithEmailStart)])
}
