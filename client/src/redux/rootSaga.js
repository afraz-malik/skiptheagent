import { all, call } from 'redux-saga/effects'
import {
  signUpWithEmailStart,
  signInWithEmailStart,
  settingUserPersistenceStart,
  signOutStart,
} from './saga'

export default function* rootSaga() {
  yield all([
    call(signUpWithEmailStart),
    call(signInWithEmailStart),
    call(settingUserPersistenceStart),
    call(signOutStart),
  ])
}
