import React from 'react';
import SignUpBoxCss from  './SignUpBox.module.css'
import './SignUpBox.module.css'

const SignUpBox = () =>{
	return (
    <div className={SignUpBoxCss.boxmodel}>
        <div className={SignUpBoxCss.boxmodel_topbar}>
          <div className={SignUpBoxCss.boxmodel_title}>
            <p>SIGN UP</p>
          </div>
          <div className={SignUpBoxCss.extra} />
          <div className={SignUpBoxCss.extra} />
        </div>
        <div className={SignUpBoxCss.boxmodel_body}>
          <form className={SignUpBoxCss.signUpForm}>
            <input type="text" name="name" placeholder="Full Name"  />
            <input type="email" name="email" placeholder="Email"  />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password" placeholder="Confirm Password"/>
            <div className={SignUpBoxCss.checkbox}>
              <input type="checkbox" name="subscription" id="subscription" defaultValue="yes" /><label htmlFor="subscription"> Send me updates and Relevant News </label>
            </div>
            <input type="submit" name="login" value="CREATE ACCOUNT" />
          </form>
          <div className={SignUpBoxCss.afterform}>
            <div className={SignUpBoxCss.socialtext}>
              <p><span>Or Sign in with your social network</span></p>
            </div>
            <div className={SignUpBoxCss.sociallinks}>
              <div className={SignUpBoxCss.fbsingin}><a href='#dum'><img alt='' src="images\fbsignin.png" /></a></div>
              <div className={SignUpBoxCss.googlesingin}><a href='#dum'><img alt='' src="images\googlesignin.png" /></a></div>
            </div>
            <div className={SignUpBoxCss.signin}>
              <p>By clicking the buttons above, you are agreeing to our Terms of Use</p>
              <p>Don't have an account? <a href='#dum'>SIGN IN</a></p>
            </div>
          </div>
        </div>
      </div>
	)
}
export default SignUpBox;