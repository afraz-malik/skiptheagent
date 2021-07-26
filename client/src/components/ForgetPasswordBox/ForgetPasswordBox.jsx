import React, { useState, useEffect } from 'react'
import ForgetPasswordCss from './ForgetPasswordBox.module.scss'
// Redux
import { connect, useDispatch } from 'react-redux'
import { passwordResetAction } from '../../redux/user/user.actions'
// Components
import BoxModel from '../../components/boxModel/boxModel'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'

const mapStateToProps = (state) => ({
  isLoading: state.setUser.loading,
  success: state.setUser.success,
})
const ForgetPasswordBox = ({ isLoading, success }) => {
  useEffect(() => {
    if (success === 1) {
      setBox({ input: false, info: true, password: false })
    }
  }, [success])
  const [email, setEmail] = useState('')
  const [box, setBox] = useState({ input: true, info: false, password: false })
  const dispatch = useDispatch()
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
  const handleChange = (event) => {
    setEmail({ ...email, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(passwordResetAction(email))
  }
  if (box.input === false && box.info === false && box.password === false) {
    setBox({ ...box, input: true })
  }

  return (
    <div>
      <div
        className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}
        style={box.input ? { display: 'flex' } : { display: 'none' }}
      >
        <BoxModel
          title={'FORGET PASSWORD'}
          // sidebar={'cancel'}
          closeBox={closeBox(0)}
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
                required
                onChange={handleChange}
              />
              <Button type="submit" name="login" login="login">
                CHANGE PASSWORD
              </Button>
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
          closeBox={closeBox(1)}
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
              <p>For maqware21@gmail.com</p>
            </div>
            <form>
              <input
                type="password"
                name="password"
                placeholder="New Password"
              />
              <input
                type="password"
                name="password"
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
              <form>
                <input
                  type="password"
                  name="password"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm New Password"
                />
                <Button type="submit" name="login" login="login">
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
export default connect(mapStateToProps, null)(ForgetPasswordBox)
