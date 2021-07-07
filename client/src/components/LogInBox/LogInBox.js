import React from 'react'
import LoginBoxCss from './LogInBox.module.css'
import BoxModel from '../../components/boxModel/boxModel'

//Router
import { Link, withRouter } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'

import Button from '../button/button'

const mapStateToProps = (state) => ({
  url: state.URLReducer.url,
})

const LoginBox = ({ url, history }) => {
  return (
    <div className={LoginBoxCss.boxmodel}>
      <BoxModel title={'LOGIN'}>
        <div className={LoginBoxCss.boxmodel_body}>
          <form className={LoginBoxCss.form}>
            <input
              title="For test user Email: test@gmail.com"
              type="email"
              name="email"
              placeholder="Email"
              onClick={() => alert('Just Press Submit We are in Test Mode')}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onClick={() => alert('Just Press Submit We are in Test Mode')}
            />
            <Link to={`${url}forget`}>Forget Password?</Link>
            <Button
              type="submit"
              name="login"
              login="login"
              onClick={() => history.push(`${url}dashboard`)}
            >
              {' '}
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
                  <img alt="" src="\images\fbsignin.png" />
                </Link>
              </div>
              <div className={LoginBoxCss.googlesingin}>
                <Link to="#dummy">
                  <img alt="" src="\images\googlesignin.png" />
                </Link>
              </div>
            </div>
            <div className={LoginBoxCss.signup}>
              <p>
                Don't have an account?{' '}
                <Link to={`${url}register`}>SIGN UP</Link>
              </p>
            </div>
          </div>
        </div>
      </BoxModel>
    </div>
  )
}
export default withRouter(connect(mapStateToProps)(LoginBox))
