import React, { useState, useEffect } from 'react'
import ForgetPasswordCss from './ForgetPasswordBox.module.scss'
// Redux
import { connect, useDispatch, useSelector } from 'react-redux'
import {
  passwordResetAction,
  passwordChange,
  passwordForgotAction,
  clearSuccess,
} from '../../redux/user/user.actions'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  isLoading: state.setUser.loading,
  success: state.setUser.success,
})
const ForgetPasswordBox = ({ isLoading, success, history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (success === 1) {
      setBox({ input: false, info: true, password: false })
    }
  }, [success])
  useEffect(() => {
    var url = new URL(window.location.href)
    // console.log(url)
    var token = url.searchParams.get('token')
    var email = url.searchParams.get('email')
    if (email && token) {
      setBox({ input: false, info: false, password: true })
      setEmail(email)
      settoken(token)
    }
    return () => dispatch(clearSuccess())
  }, [])

  const [email, setEmail] = useState('')
  const [token, settoken] = useState(null)
  const [passwordReset, setPasswordReset] = useState({
    password: '',
    confirmPassword: '',
  })
  const [box, setBox] = useState({ input: true, info: false, password: false })
  const closeBox = (index2) => () => {
    if (index2 === 0) {
      setBox({ ...box, input: false })
    }
    if (index2 === 1) {
      setBox({ ...box, info: false })
    }
    if (index2 === 2) {
      setBox({ ...box, password: false })
    }
  }
  if (box.input === false && box.info === false && box.password === false) {
    setBox({ ...box, input: true })
  }
  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (event) => {
    toast.dismiss()
    event.preventDefault()
    let err = []
    if (!email) err.push('Email is required')
    if (err.length > 0) {
      err.forEach((element) => {
        toast.error(element)
      })
      return
    }
    dispatch(
      passwordResetAction({ email, path: window.location.origin + '/forget' })
    )
  }
  const handleResetPasswordSubmit = (event) => {
    event.preventDefault()
    toast.dismiss()
    let err = []
    if (!email) err.push('Link has been expired kindly request new one')
    if (!token) err.push('Link has been expired kindly request new one')
    if (!passwordReset.password) err.push('Password is required')
    if (passwordReset.password && passwordReset.password.length < 6)
      err.push('Password must be at least 6 characters long!')
    if (!passwordReset.confirmPassword) err.push('Confirm password is required')
    if (
      passwordReset.confirmPassword &&
      passwordReset.confirmPassword !== passwordReset.password
    )
      err.push("New Password and confirm password does's not match!")
    if (err.length > 0) {
      err.forEach((element) => {
        toast.error(element)
      })
      return
    }
    dispatch(
      passwordForgotAction({
        email,
        token,
        password: passwordReset.password,
        confirmPassword: passwordReset.confirmPassword,
      })
    )
  }
  return (
    <div>
      <div
        className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}
        style={box.input ? { display: 'flex' } : { display: 'none' }}
      >
        <BoxModel
          title={'FORGET PASSWORD'}
          sidebar={'cancel'}
          closeBox={() => history.push('/login')}
        >
          <div className={ForgetPasswordCss.boxmodel_body}>
            <div className={ForgetPasswordCss.bodytext}>
              <p>Enter your email below to reset your password</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter email here"
                onChange={handleChange}
              />
              <Button type="submit" name="login" login="login">
                CHANGE PASSWORD
              </Button>
              {/* <Link to={'/login'}>Go Back</Link> */}
            </form>
          </div>
        </BoxModel>
      </div>
      <div
        className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}
        style={box.info ? { display: 'flex' } : { display: 'none' }}
      >
        <BoxModel
          title={'FORGET PASSWORD'}
          sidebar={'cancel'}
          closeBox={() => {
            history.push('/login')
          }}
        >
          <div
            className={`${ForgetPasswordCss.boxmodel_body} ${ForgetPasswordCss.boxmodel_body2}`}
          >
            <div className={ForgetPasswordCss.bodytext}>
              <p>
                We have send password reset link to your registered email
                address. Please click the link to complete the reset process
              </p>
            </div>
          </div>
        </BoxModel>
      </div>
      <div
        className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}
        style={box.password ? { display: 'flex' } : { display: 'none' }}
      >
        <BoxModel
          title={'FORGET PASSWORD'}
          sidebar={'cancel'}
          closeBox={closeBox(2)}
        >
          <div
            className={`${ForgetPasswordCss.boxmodel_body} ${ForgetPasswordCss.boxmodel_body3}`}
          >
            <div className={ForgetPasswordCss.bodytext}>
              <p>For {email || ''} </p>
            </div>
            <form onSubmit={handleResetPasswordSubmit}>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                onChange={(event) =>
                  setPasswordReset({
                    ...passwordReset,
                    password: event.target.value,
                  })
                }
                value={passwordReset.password}
              />
              <input
                type="password"
                name="password"
                onChange={(event) =>
                  setPasswordReset({
                    ...passwordReset,
                    confirmPassword: event.target.value,
                  })
                }
                value={passwordReset.confirmPassword}
                placeholder="Confirm New Password"
              />
              <Button type="submit" name="login" login="login">
                CHANGE PASSWORD
              </Button>
            </form>
          </div>
        </BoxModel>
      </div>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export const SingleForgetBox = ({ close, email }) => {
  const dispatch = useDispatch()
  let token = useSelector((state) => state.setUser.token)
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
    error: '',
  })
  const handleChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
      error: null,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (password.password === '' || password.confirmPassword === '') {
      setPassword({ ...password, error: 'Field Cannot be empty' })
      return
    }
    if (password.password.length < 6) {
      setPassword({
        ...password,
        error: 'Password must be at least 6 characters long',
      })
      return
    }
    if (password.password !== password.confirmPassword) {
      setPassword({ ...password, error: 'Password Not Matched' })
      return
    }
    dispatch(
      passwordForgotAction({
        token,
        password: password.password,
        confirmPassword: password.confirmPassword,
      })
    )
  }
  return (
    <div className={`${ForgetPasswordCss.forgetPassword}  forgetPassword_Box`}>
      <div className={ForgetPasswordCss.box}>
        <div className={`${ForgetPasswordCss.boxmodel}`}>
          <BoxModel
            title={'FORGET PASSWORD'}
            sidebar={'cancel'}
            closeBox={close}
          >
            <div
              className={`${ForgetPasswordCss.boxmodel_body} ${ForgetPasswordCss.boxmodel_body3}`}
            >
              <div className={ForgetPasswordCss.bodytext}>
                <p>For {`${email}`}</p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  name="password"
                  value={password.password}
                  onChange={handleChange}
                  placeholder="New Password"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={password.confirmPassword}
                  onChange={handleChange}
                />
                {password.error ? (
                  <span
                    style={{
                      color: 'red',
                      fontSize: '14px',
                      textAlign: 'right',
                    }}
                  >
                    {password.error}
                  </span>
                ) : null}
                <Button
                  type="submit"
                  name="login"
                  login="login"
                  style={{ marginTop: '25px' }}
                >
                  CHANGE PASSWORD
                </Button>
              </form>
            </div>
          </BoxModel>
        </div>
      </div>
    </div>
  )
}
export default withRouter(connect(mapStateToProps, null)(ForgetPasswordBox))
