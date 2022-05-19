import { all, call } from 'redux-saga/effects'
import {
  signUpWithEmailStart,
  signInWithEmailStart,
  checkingUserPersistenceStart,
  signOutStart,
  signInWithGoogleStart,
  passwordReset,
  updateUserStart,
  passwordchangeStart,
  passwordForgot,
} from './user/user.saga'

export default function* rootSaga() {
  yield all([
    call(signUpWithEmailStart),
    call(signInWithEmailStart),
    call(checkingUserPersistenceStart),
    call(signOutStart),
    call(signInWithGoogleStart),
    call(passwordReset),
    call(updateUserStart),
    call(passwordchangeStart),
    call(passwordForgot),
  ])
}
