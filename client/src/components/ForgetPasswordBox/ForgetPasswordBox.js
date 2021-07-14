import React from 'react'
import ForgetPasswordCss from './ForgetPasswordBox.module.scss'

// Components
import BoxModel from '../../components/boxModel/boxModel'
import Button from '../button/button'

const ForgetPasswordBox = () => {
  const closeBox = (index2) => () => {
    const box = document.getElementsByClassName('forgetPassword_Box')[index2]
    box.style.display = 'none'
  }
  return (
    <div>
      <div className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}>
        <BoxModel
          title={'FORGET PASSWORD'}
          sidebar={'cancel'}
          closeBox={closeBox(0)}
        >
          <div className={ForgetPasswordCss.boxmodel_body}>
            <div className={ForgetPasswordCss.bodytext}>
              <p>Enter your email below to reset your password</p>
            </div>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email here"
                required
              />
              <Button type="submit" name="login" login="login">
                CHANGE PASSWORD
              </Button>
            </form>
          </div>
        </BoxModel>
      </div>
      <div className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}>
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
                address. Please click the link to comoplete the reset process
              </p>
            </div>
          </div>
        </BoxModel>
      </div>
      <div className={`${ForgetPasswordCss.boxmodel} forgetPassword_Box`}>
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
export default ForgetPasswordBox
