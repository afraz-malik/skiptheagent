import React, { useState } from 'react'
import LoginBoxCss from './LogInBox.module.scss'
//Router
import { Link, withRouter } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import {
  signInStart,
  signInWithGoogleStart,
} from '../../redux/user/user.actions'

// Components

import { Spinner } from '../spinner/spinner'
import BoxModel from '../boxModel/boxModel'

import Button from '../button/button'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  isLoading: state.setUser.loading,
})
const maptDispatchToProps = (dispatch) => ({
  setUser: (userCrendential) => dispatch(signInStart(userCrendential)),
  googleSignIn: () => dispatch(signInWithGoogleStart()),
})
const LoginBox = ({ url, isLoading, googleSignIn, setUser }) => {
  const [userCrendential, setUserCrendential] = useState({
    email: null,
    password: null,
  })

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let err = []
    const { email, password } = userCrendential
    if (!email) err.push('Email is required')
    if (!password) err.push('Password is required')
    if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      err.push('Email format is invalid')
    if (password.length < 6)
      err.push('Password must be at least 6 characters long!')
    if (err.length > 0) {
      err.forEach((element) => {
        toast.error(element)
      })
      return
    }
    setUser({ email, password })
  }
  const handleChange = (event) => {
    setUserCrendential({
      ...userCrendential,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className={LoginBoxCss.boxmodel}>
      <BoxModel title={'LOGIN'}>
        <div className={LoginBoxCss.boxmodel_body}>
          <form className={LoginBoxCss.form} onSubmit={onSubmitHandler}>
            <input
              title="For test user Email: test@gmail.com"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              formNoValidate
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Link to={`/forget`}>Forget Password?</Link>
            <Button type="submit" name="login" login="login">
              SUBMIT
            </Button>
          </form>
          <div className={LoginBoxCss.afterform}>
            {/*<div className={LoginBoxCss.socialtext}>
              <p>
                <span>Or Sign in with your social network</span>
              </p>
            </div>
             <div className={LoginBoxCss.sociallinks}>
              <div className={LoginBoxCss.fbsingin}>
                <Link to="#dummy">
                  <img
                    alt=""
                    src="images\fbsignin.png"
                    onClick={() => alert('Lazy to make this fuction working')}
                  />
                </Link>
              </div>
              <div className={LoginBoxCss.googlesingin}>
                <Link to="#dummy">
                  <img
                    alt=""
                    src="images\googlesignin.png"
                    onClick={() => googleSignIn()}
                  />
                </Link>
              </div>
            </div> */}
            <div className={LoginBoxCss.signup}>
              <p>
                Don't have an account?
                <Link to={`/register`}>SIGN UP</Link>
              </p>
            </div>
          </div>
        </div>
      </BoxModel>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}
export default withRouter(
  connect(mapStateToProps, maptDispatchToProps)(LoginBox)
)
