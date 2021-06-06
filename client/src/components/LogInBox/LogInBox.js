import React from 'react';
import LoginBoxCss from './LogInBox.module.css'

const LoginBox = () =>{
	return (
    <div className={LoginBoxCss.boxmodel}>
        <div className={LoginBoxCss.boxmodel_topbar}>
          <div className={LoginBoxCss.boxmodel_title}>
            <p>LOGIN</p>
          </div>
          <div className={LoginBoxCss.extra} />
          <div className={LoginBoxCss.extra} />
        </div>
        <div className={LoginBoxCss.boxmodel_body}>
          <form className={LoginBoxCss.form}>
            <input type="email" name="email" placeholder="Email"  />
            <input type="password" name="password" placeholder="Password"/>
            <a href="#dummy">Forget Password?</a>
            <input type="submit" name="login" defaultValue="LOGIN" />
          </form>
          <div className={LoginBoxCss.afterform}>
            <div className={LoginBoxCss.socialtext}>
              <p><span>Or Sign in with your social network</span></p>
            </div>
            <div className={LoginBoxCss.sociallinks}>
              <div className={LoginBoxCss.fbsingin}><a href="#dummy"><img alt='' src="images\fbsignin.png" /></a></div>
              <div className={LoginBoxCss.googlesingin}><a href="#dummy"><img alt='' src="images\googlesignin.png" /></a></div>
            </div>
            <div className={LoginBoxCss.signup}>
              <p>Don't have an account? <a href="#dummy">SIGN UP</a></p>
            </div>
          </div>
        </div>
      </div>

	)
}
export default LoginBox;