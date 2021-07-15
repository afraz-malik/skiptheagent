import { put, takeLatest } from 'redux-saga/effects'
import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
} from './user.actions'
import {
  auth,
  isUserAuthenticated,
  createUserInFirebase,
  signInWithGoogle,
} from '../../firebase/firebase.config'

export function* settingUserPersistence() {
  const user = yield isUserAuthenticated()
  const userRef = yield createUserInFirebase(user)
  if (userRef) {
    const snapshot = yield userRef.get()
    const user = snapshot.data()
    yield put(signInSuccess({ email: user.email, name: user.displayName }))
  }
}
export function* settingUserPersistenceStart() {
  yield takeLatest('CHECKING_USER', settingUserPersistence)
}

export function* signUpWithEmail({ payload }) {
  let user
  let error
  yield auth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then((userCrendential) => {
      user = userCrendential.user
    })
    .catch((err) => {
      alert(err.message)
      error = err
    })
  if (error) {
    yield put(signInFailed({ error }))
  }
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
  let error = null
  yield auth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((userCrendential) => {
      user = userCrendential.user
    })
    .catch((err) => {
      alert(err.message)
      error = err
    })
  if (error) {
    yield put(signInFailed({ error }))
  }
  if (user) {
    yield put(signInSuccess({ name: user.displayName, email: user.email }))
  }
}

export function* signInWithEmailStart() {
  yield takeLatest('SIGN_IN_START', signInWithEmail)
}
export function* signInWithGoogleSaga() {
  try {
    const { user } = yield signInWithGoogle()
    yield createUserInFirebase(user)
    yield put(signInSuccess({ name: user.displayName, email: user.email }))
  } catch (err) {
    yield put(signInFailed(err.message))
    yield alert(err.message)
  }
}
export function* signInWithGoogleStart() {
  yield takeLatest('SIGN_IN_WITH_GOOGLE_START', signInWithGoogleSaga)
}
export function* signOut() {
  // let user
  // let error = null
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (err) {
    yield alert(err)
    yield put(signOutFailed({ err }))
  }
}
export function* signOutStart() {
  yield takeLatest('SIGN_OUT_START', signOut)
}
