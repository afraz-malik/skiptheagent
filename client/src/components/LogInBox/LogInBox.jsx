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
import BoxModel from '../../components/boxModel/boxModel'

import Button from '../button/button'

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
    const { email, password } = userCrendential
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
            <div className={LoginBoxCss.socialtext}>
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
            </div>
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
