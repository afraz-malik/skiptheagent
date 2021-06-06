import React from 'react';
import LoginBoxCss from './LogInBox.module.css'

//Router
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})


const LoginBox = ({url}) =>{
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
            <Link to={`${url}forget`}>Forget Password?</Link>
            <input type="submit" name="login" defaultValue="LOGIN" />
          </form>
          <div className={LoginBoxCss.afterform}>
            <div className={LoginBoxCss.socialtext}>
              <p><span>Or Sign in with your social network</span></p>
            </div>
            <div className={LoginBoxCss.sociallinks}>
              <div className={LoginBoxCss.fbsingin}><Link to="#dummy"><img alt='' src="images\fbsignin.png" /></Link></div>
              <div className={LoginBoxCss.googlesingin}><Link to="#dummy"><img alt='' src="images\googlesignin.png" /></Link></div>
            </div>
            <div className={LoginBoxCss.signup}>
              <p>Don't have an account? <Link to={`${url}register`}>SIGN UP</Link></p>
            </div>
          </div>
        </div>
      </div>

	)
}
export default connect(mapStateToProps)(LoginBox);