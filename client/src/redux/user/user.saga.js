import { put, takeLatest } from 'redux-saga/effects'
import { history } from '../../App.js'
import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  passwordResetSuccess,
  passwordResetFailed,
  updateSuccess,
  updateFailed,
  passwordForgotFailed,
  passwordForgotSuccess,
} from './user.actions'
import {
  auth,
  // isUserAuthenticated,
  // createUserInFirebase,
  signInWithGoogle,
  // updateUserinFirebase,
  // storage,
} from '../../firebase/firebase.config'
import { API, fetchBackend } from '../../services/config'
import { toast } from 'react-toastify'
export function* checkingUserPersistence() {
  // const user = yield isUserAuthenticated()
  // const userRef = yield createUserInFirebase(user)
  // if (userRef) {
  //   const snapshot = yield userRef.get()
  //   const firebaseUser = snapshot.data()
  //   yield put(signInSuccess(firebaseUser))
  // }
  const user = yield localStorage.getItem('user')
  const skipToken = yield localStorage.getItem('skipToken')
  if (user) {
    let tUser = {
      ...JSON.parse(user),
      token: skipToken,
    }
    yield put(signInSuccess(tUser))
  }
}
export function* checkingUserPersistenceStart() {
  yield takeLatest('CHECKING_USER', checkingUserPersistence)
}

export function* signUpWithEmail({ payload }) {
  try {
    // const { user } = yield auth.createUserWithEmailAndPassword(
    //   payload.email,
    //   payload.password
    // )
    // const userRef = yield createUserInFirebase(user, payload.name)
    // if (userRef) {
    //   const snapshot = yield userRef.get()
    //   const firebaseUser = snapshot.data()
    //   yield put(signInSuccess(firebaseUser))
    // }
    let response = yield fetchBackend('POST', API.register, payload)
    if (response.success && response.user) {
      localStorage.setItem('user', JSON.stringify(response.user))
      localStorage.setItem('skipToken', response.user.token)
      yield put(signInSuccess(response.user))
    } else {
      throw new Error(response.message)
    }
  } catch (error) {
    yield toast.dismiss()
    yield toast.error(error.message, {
      // autoClose: false,
    })
    yield put(signInFailed({ error }))
  }
}
export function* signUpWithEmailStart() {
  yield takeLatest('SIGN_UP_START', signUpWithEmail)
}
export function* signInWithEmail({ payload }) {
  try {
    // const { user } = yield auth.signInWithEmailAndPassword(
    //   payload.email,
    //   payload.password
    // )
    // const userRef = yield createUserInFirebase(user)
    // if (userRef) {
    //   const snapshot = yield userRef.get()
    //   const firebaseUser = snapshot.data()
    //   yield put(signInSuccess(firebaseUser))
    // }
    let response = yield fetchBackend('POST', API.login, payload)
    // console.log(response)
    if (response.success && response.user) {
      localStorage.setItem('user', JSON.stringify(response.user))
      localStorage.setItem('skipToken', response.user.token)

      yield put(signInSuccess(response.user))
    } else {
      throw new Error(response.message)
    }
  } catch (error) {
    // console.log(error)
    yield put(signInFailed({ error }))
    yield toast.dismiss()
    yield toast.error(error.message, {
      // autoClose: false,
    })
  }
}

export function* signInWithEmailStart() {
  yield takeLatest('SIGN_IN_START', signInWithEmail)
}

export function* signInWithGoogleSaga() {
  try {
    const { user } = yield signInWithGoogle()
    // const userRef = yield createUserInFirebase(user)
    // if (userRef) {
    // const snapshot = yield userRef.get()
    // const firebaseUser = snapshot.data()
    // yield put(signInSuccess(firebaseUser))
    let response = yield fetchBackend('POST', API.googleLogin, user)
    // console.log(response)
    // }
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
    // yield auth.signOut()
    yield localStorage.removeItem('user')
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
    // yield auth.sendPasswordResetEmail(payload.email)
    let response = yield fetchBackend('POST', API.passwordForgot, payload)
    if (response) {
      yield put(passwordResetSuccess())
      console.log(response.url)
    }
  } catch (err) {
    yield put(passwordResetFailed(err))
    yield toast.dismiss()
    yield toast.error(err.message)
  }
}
export function* passwordReset() {
  yield takeLatest('PASSWORD_RESET_START', passwordResetStart)
}

export function* passwordForgotStart({ payload }) {
  try {
    // yield auth.sendpasswordForgotEmail(payload.email)
    let response = yield fetchBackend('POST', API.passwordReset, payload)

    if (response) {
      yield put(passwordForgotSuccess())
      toast.dismiss()
      toast.success('Password Changed Successfully')
      history.push('/login')
    } else {
      throw new Error('Failed')
    }
  } catch (err) {
    yield toast.error(err.message)
    yield put(passwordForgotFailed(err.message))
  }
}
export function* passwordForgot() {
  yield takeLatest('PASSWORD_FORGOT_START', passwordForgotStart)
}

export function* updateUser({ payload }) {
  try {
    // let newPayload = payload.usercredentials
    // const user = yield auth.currentUser
    // if (payload.images.images) {
    //   var storageRef = yield storage.ref(`/images/${user.uid}/profile.jpg`)
    //   const snapshot = yield storageRef.put(payload.images.images)
    //   if (snapshot.state === 'success') {
    //     const url = yield storageRef.getDownloadURL()
    //     if (url) {
    //       newPayload = { ...payload.usercredentials, imgurl: url }
    //     }
    //   }
    // }
    // yield updateUserinFirebase(user, newPayload)
    // yield put(updateSuccess(payload.usercredentials))
    // const state = yield select()
    // const token = state.setUser.token
    if (payload.usercredentials.photo) {
      const fd = new FormData()
      Object.keys(payload.usercredentials).forEach((key) => {
        fd.append(key, payload.usercredentials[key])
      })
      // fd.append('photo', payload.usercredentials.img)
      let response = yield fetchBackend('POST', API.updateUser, fd)

      if (response.success) {
        yield put(updateSuccess(response.user))
        localStorage.setItem('user', JSON.stringify(response.user))
        toast.dismiss()

        toast.success('User Updated Successfully', { autoClose: false })
      } else {
        throw new Error(response.message)
      }
    } else {
      let response = yield fetchBackend(
        'POST',
        API.updateUser,
        payload.usercredentials
      )

      if (response.success) {
        yield put(updateSuccess(response.user))
        localStorage.setItem('user', JSON.stringify(response.user))
        toast.dismiss()
        // console.log(response)
        toast.success('User Updated Successfully')
      } else {
        throw new Error(response.message)
      }
    }
  } catch (err) {
    yield toast.dismiss()
    yield toast.error(err.message)
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
