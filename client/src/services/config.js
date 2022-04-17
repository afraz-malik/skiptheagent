import { toast } from 'react-toastify'
import { store } from '../redux/store'
import { signOutStart } from '../redux/user/user.actions'

const db_url = 'http://localhost:5000/api/'
// export const db_url = "http://localhost:8000/";
export const fetchPost = async (url, token, payload) => {
  return fetch(`${db_url}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + token,
      mode: 'no-cors',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === 'jwt expired') throw new Error(res.message)
      else {
        return res
      }
    })
    .catch((err) => {
      if (err.message == 'jwt expired') {
        toast.error('Your session has expired. Kindly login again')
        store.dispatch(signOutStart())
      }
    })
}

export const fetchGet = async (url, token) => {
  return fetch(`${db_url}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + token,
      mode: 'no-cors',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err.message, 'afraz'))
}
