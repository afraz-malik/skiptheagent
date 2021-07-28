import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage' // <----

var firebaseConfig = {
  apiKey: 'AIzaSyBu1x4tu6iZPxhkANVuOxzJtjcLBzKW5lc',
  authDomain: 'skiptheagent-react.firebaseapp.com',
  projectId: 'skiptheagent-react',
  storageBucket: 'skiptheagent-react.appspot.com',
  messagingSenderId: '470859456457',
  appId: '1:470859456457:web:db0de858f2e69e70b1d218',
  measurementId: 'G-N1ZG0Z7E9P',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const storage = firebase.storage()
export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const isUserAuthenticated = () => {
  return new Promise((res, rej) => {
    const unsub = auth.onAuthStateChanged((user) => {
      unsub()
      res(user)
    }, rej)
  })
}

export const createUserInFirebase = async (user, name) => {
  if (!user) {
    console.log('No user found')
    return
  }
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    let displayName
    if (user.displayName) {
      displayName = user.displayName
    } else {
      displayName = name
      user
        .updateProfile({
          displayName: displayName,
        })
        .then((e) => console.log('displayname set'))
        .catch((err) => console.log(err))
    }
    userRef
      .set({
        displayName: displayName,
        email: user.email,
        createdAt: new Date(),
        username: user.email,
        mobile: '',
        zip: '',
        gender: '',
        country: '',
        city: '',
        uid: user.uid,
        imgurl:
          'https://firebasestorage.googleapis.com/v0/b/skiptheagent-react.appspot.com/o/images%2Fjohn.png?alt=media&token=0d3308e7-6b4f-4f4b-95f0-a2ba97595945',
      })

      .catch((err) => {
        alert(err.message)
      })
  } else {
    console.log('not overwrited')
  }
  return userRef
}
export const updateUserinFirebase = async (user, newPayload) => {
  if (!user) {
    console.log('No user found')
    return
  }
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  if (snapshot.exists) {
    userRef
      .update(newPayload)
      .then(() => alert('update success'))
      .catch((error) => console.log(error))
  }
}
