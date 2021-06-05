import React from 'react';
import './SignUpBox.css'
const SignUpBox = () =>{
	return (
    <div className="boxmodel">
        <div className="boxmodel_topbar">
          <div className="boxmodel_title">
            <p>SIGN UP</p>
          </div>
          <div className="extra" />
          <div className="extra" />
        </div>
        <div className="boxmodel_body">
          <form>
            <input type="text" name="name" placeholder="Full Name"  />
            <input type="email" name="email" placeholder="Email"  />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password" placeholder="Confirm Password"/>
            <div className="checkbox">
              <input type="checkbox" name="subscription" id="subscription" defaultValue="yes" /><label htmlFor="subscription"> Send me updates and Relevant News </label>
            </div>
            <input type="submit" name="login" value="CREATE ACCOUNT" />
          </form>
          <div className="afterform">
            <div className="socialtext">
              <p><span>Or Sign in with your social network</span></p>
            </div>
            <div className="sociallinks">
              <div className="fbsingin"><a href='#dum'><img alt='' src="images\fbsignin.png" /></a></div>
              <div className="googlesingin"><a href='#dum'><img alt='' src="images\googlesignin.png" /></a></div>
            </div>
            <div className="signin">
              <p>By clicking the buttons above, you are agreeing to our Terms of Use</p>
              <p>Don't have an account? <a href='#dum'>SIGN IN</a></p>
            </div>
          </div>
        </div>
      </div>
	)
}
export default SignUpBox;