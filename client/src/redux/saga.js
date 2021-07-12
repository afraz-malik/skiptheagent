import { put, takeLatest } from 'redux-saga/effects'
import { signInSuccess } from './actions'
import { auth, createUserInFirebase } from '../firebase/firebase.config'

export function* signUpWithEmail({ payload }) {
  let user
  yield auth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then((userCrendential) => {
      user = userCrendential.user
    })
    .catch((err) => alert(err.message))
  if (user) {
    yield createUserInFirebase(user, payload.name)
    yield put(signInSuccess({ name: payload.name, email: payload.email }))
  }
}
export function* signUpWithEmailStart() {
  yield takeLatest('SIGN_UP_START', signUpWithEmail)
}
export function* signInWithEmail({ payload }) {
  let user
  yield auth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((userCrendential) => {
      user = userCrendential.user
      alert('ok')
    })
    .catch((err) => alert(err.message))
  if (user) {
    yield put(signInSuccess({ name: user.displayName, email: user.email }))
  }
}

export function* signInWithEmailStart() {
  yield takeLatest('SIGN_IN_START', signInWithEmail)
}
