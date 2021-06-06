import React from 'react';
import SignUpBoxCss from  './SignUpBox.module.css'
import './SignUpBox.module.css'
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})

const SignUpBox = ({url}) =>{
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
              <div className={SignUpBoxCss.fbsingin}><Link to='#dum'><img alt='' src="images\fbsignin.png" /></Link></div>
              <div className={SignUpBoxCss.googlesingin}><Link to='#dum'><img alt='' src="images\googlesignin.png" /></Link></div>
            </div>
            <div className={SignUpBoxCss.signin}>
              <p>By clicking the buttons above, you are agreeing to our Terms of Use</p>
              <p>Don't have an account? <Link to={`${url}login`}>SIGN IN</Link></p>
            </div>
          </div>
        </div>
      </div>
	)
}
export default connect(mapStateToProps)(SignUpBox);