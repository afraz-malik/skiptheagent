import React, { useState } from 'react'
import SignUpBoxCss from './SignUpBox.module.scss'
//Router
import { Link, withRouter } from 'react-router-dom'
//Redux
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  isLoading: state.setUser.loading,
})
const maptDispatchToProps = (dispatch) => ({
  setUser: (userCrendential) => dispatch(signUpStart(userCrendential)),
})

const SignUpBox = ({ url, setUser, isLoading }) => {
  const [userCrendential, setUserCrendential] = useState({
    displayName: null,
    email: null,
    password: null,
    confirmpassword: null,
  })

  const onSubmitHandler = (event) => {
    event.preventDefault()
    toast.dismiss()
    let err = []
    let { displayName, email, password, confirmpassword } = userCrendential
    if (!displayName) err.push('Name is required')
    if (!email) err.push('Email is required')
    if (!password) err.push('Password is required')
    if (!confirmpassword) err.push('Confirm password is required')
    if (password && password.length < 6)
      err.push('Password must be at least 6 characters long!')
    if (confirmpassword !== password)
      err.push("New Password and confirm password does's not match!")
    if (err.length > 0) {
      err.forEach((element) => {
        toast.error(element)
      })
      return
    }
    setUser(userCrendential)
  }
  const handleChange = (event) => {
    setUserCrendential({
      ...userCrendential,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className={SignUpBoxCss.boxmodel}>
      <BoxModel title={'SIGN UP'}>
        <div className={SignUpBoxCss.boxmodel_body}>
          <form className={SignUpBoxCss.signUpForm} onSubmit={onSubmitHandler}>
            <input
              type="text"
              name="displayName"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
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
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <div className={SignUpBoxCss.checkbox}>
              <input
                type="checkbox"
                name="subscription"
                id="subscription"
                defaultValue="yes"
              />
              <label htmlFor="subscription">
                Send me updates and Relevant News
              </label>
            </div>
            <Button type="submit" name="login" login="true">
              CREATE ACCOUNT
            </Button>
            {/* <input type="submit" name="login" value="CREATE ACCOUNT" /> */}
          </form>
          <div className={SignUpBoxCss.afterform}>
            {/* <div className={SignUpBoxCss.socialtext}>
              <p>
                <span>Or Sign in with your social network</span>
              </p>
            </div>
            <div className={SignUpBoxCss.sociallinks}>
              <div className={SignUpBoxCss.fbsingin}>
                <Link to="#dum">
                  <img alt="" src="images\fbsignin.png" />
                </Link>
              </div>
              <div className={SignUpBoxCss.googlesingin}>
                <Link to="#dum">
                  <img alt="" src="images\googlesignin.png" />
                </Link>
              </div>
            </div> */}
            <div className={SignUpBoxCss.signin}>
              <p>
                By clicking the buttons above, you are agreeing to our Terms of
                Use
              </p>
              <p>
                Don't have an account? <Link to={`/login`}>SIGN IN</Link>
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
  connect(mapStateToProps, maptDispatchToProps)(SignUpBox)
)
