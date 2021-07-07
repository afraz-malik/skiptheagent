import React from 'react'
import ForgetPasswordCss from './ForgetPasswordBox.module.css'

import BoxModel from '../../components/boxModel/boxModel'

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
              <input type="email" name="email" placeholder="Enter email here" />
              <input type="submit" name="login" value="CHANGE PASSWORD" />
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
              <input type="submit" name="login" value="CHANGE PASSWORD" />
            </form>
          </div>
        </BoxModel>
      </div>
    </div>
  )
}

export const SingleForgetBox = ({ close }) => {
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
                <p>For johnwick@gmail.com</p>
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
                <input type="submit" name="login" value="CHANGE PASSWORD" />
              </form>
            </div>
          </BoxModel>
        </div>
      </div>
    </div>
  )
}
export default ForgetPasswordBox
