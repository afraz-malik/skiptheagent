import { put, takeLatest } from 'redux-saga/effects'
import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  passwordResetSuccess,
  passwordResetFailed,
  updateSuccess,
  updateFailed,
} from './user.actions'
import {
  auth,
  isUserAuthenticated,
  createUserInFirebase,
  signInWithGoogle,
  updateUserinFirebase,
} from '../../firebase/firebase.config'

export function* settingUserPersistence() {
  const user = yield isUserAuthenticated()
  const userRef = yield createUserInFirebase(user)
  if (userRef) {
    const snapshot = yield userRef.get()
    const firebaseUser = snapshot.data()
    yield put(signInSuccess(firebaseUser))
  }
}
export function* settingUserPersistenceStart() {
  yield takeLatest('CHECKING_USER', settingUserPersistence)
}

export function* signUpWithEmail({ payload }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    )
    const userRef = yield createUserInFirebase(user, payload.name)
    if (userRef) {
      const snapshot = yield userRef.get()
      const firebaseUser = snapshot.data()
      yield put(signInSuccess(firebaseUser))
    }
  } catch (error) {
    alert(error)
    yield put(signInFailed({ error }))
  }
}
export function* signUpWithEmailStart() {
  yield takeLatest('SIGN_UP_START', signUpWithEmail)
}
export function* signInWithEmail({ payload }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    )
    const userRef = yield createUserInFirebase(user)
    if (userRef) {
      const snapshot = yield userRef.get()
      const firebaseUser = snapshot.data()
      yield put(signInSuccess(firebaseUser))
    }
  } catch (error) {
    yield put(signInFailed({ error }))
    alert(error)
  }
}

export function* signInWithEmailStart() {
  yield takeLatest('SIGN_IN_START', signInWithEmail)
}
export function* signInWithGoogleSaga() {
  try {
    const { user } = yield signInWithGoogle()
    const userRef = yield createUserInFirebase(user)
    if (userRef) {
      const snapshot = yield userRef.get()
      const firebaseUser = snapshot.data()
      yield put(signInSuccess(firebaseUser))
    }
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
export function* passwordResetStart({ payload }) {
  try {
    yield auth.sendPasswordResetEmail(payload.email)
    yield put(passwordResetSuccess())
  } catch (err) {
    yield put(passwordResetFailed(err))
    alert(err.message)
  }
}
export function* passwordReset() {
  yield takeLatest('PASSWORD_RESET_START', passwordResetStart)
}

export function* updateUser(payload) {
  try {
    const user = yield auth.currentUser
    yield updateUserinFirebase(user, payload)
    yield put(updateSuccess())
    yield settingUserPersistence()
  } catch (err) {
    alert(err.message)
    yield put(updateFailed(err))
  }
}
export function* updateUserStart() {
  yield takeLatest('UPDATE_USER_START', updateUser)
}
export function* passwordChange({ payload }) {
  const user = yield auth.currentUser
  if (user) {
    user
      .updatePassword(payload)
      .then(() => {
        alert('Password Update')
      })
      .catch((error) => {
        console.log(error)
        alert(error)
        if (error.code === 'auth/requires-recent-login') {
          alert('Login Again')
          signOut()
        }
        // An error ocurred
        // ...
      })
  }
}
export function* passwordchangeStart() {
  yield takeLatest('PASSWORD_CHANGE_START', passwordChange)
}
