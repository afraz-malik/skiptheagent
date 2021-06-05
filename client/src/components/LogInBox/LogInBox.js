import React from 'react';
import './LogInBox.css'
const LoginBox = () =>{
	return (
    <div className="boxmodel">
        <div className="boxmodel_topbar">
          <div className="boxmodel_title">
            <p>LOGIN</p>
          </div>
          <div className="extra" />
          <div className="extra" />
        </div>
        <div className="boxmodel_body">
          <form>
            <input type="email" name="email" placeholder="Email"  />
            <input type="password" name="password" placeholder="Password"/>
            <a href="#dummy">Forget Password?</a>
            <input type="submit" name="login" defaultValue="LOGIN" />
          </form>
          <div className="afterform">
            <div className="socialtext">
              <p><span>Or Sign in with your social network</span></p>
            </div>
            <div className="sociallinks">
              <div className="fbsingin"><a href="#dummy"><img alt='' src="images\fbsignin.png" /></a></div>
              <div className="googlesingin"><a href="#dummy"><img alt='' src="images\googlesignin.png" /></a></div>
            </div>
            <div className="signup">
              <p>Don't have an account? <a href="#dummy">SIGN UP</a></p>
            </div>
          </div>
        </div>
      </div>

	)
}
export default LoginBox;