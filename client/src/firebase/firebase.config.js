// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBu1x4tu6iZPxhkANVuOxzJtjcLBzKW5lc',
  authDomain: 'skiptheagent-react.firebaseapp.com',
  projectId: 'skiptheagent-react',
  storageBucket: 'skiptheagent-react.appspot.com',
  messagingSenderId: '470859456457',
  appId: '1:470859456457:web:db0de858f2e69e70b1d218',
  measurementId: 'G-N1ZG0Z7E9P',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
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
  let displayName
  if (!snapshot.exists) {
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
      })
      .then((data) => {
        alert('Success')
      })
      .catch((err) => {
        alert(err.message)
      })
  } else {
    console.log('not overwrited')
  }
  return userRef
}

export const signInFirebase = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      console.log(user)
      // ...
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}
