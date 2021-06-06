import React from 'react';
import ForgetPasswordCss from './ForgetPasswordBox.module.css'

const ForgetPasswordBox = () =>{
	return (
            <div>
                <div className={ForgetPasswordCss.boxmodel}>
                    <div className={ForgetPasswordCss.boxmodel_topbar}>
                        <div className={ForgetPasswordCss.boxmodel_title}>
                        <p>FORGET YOUR PASSWORD</p>
                        </div>
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.cancel}>
                        <img alt='' src="images\cancel.png" />
                        </div>
                    </div>
                    <div className={ForgetPasswordCss.boxmodel_body}>
                        <div className={ForgetPasswordCss.bodytext}>
                        <p>Enter your email below to reset your password</p>
                        </div>
                        <form>
                        <input type="email" name="email" placeholder="Enter email here"  />
                        <input type="submit" name="login" value="CHANGE PASSWORD" />
                        </form>
                    </div>
                </div>
                <div className={ForgetPasswordCss.boxmodel}>
                    <div className={ForgetPasswordCss.boxmodel_topbar}>
                        <div className={ForgetPasswordCss.boxmodel_title}>
                        <p>FORGET YOUR PASSWORD</p>
                        </div>
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.cancel}>
                        <img alt='' src="images\cancel.png"  />
                        </div>
                    </div>
                    <div className={`${ForgetPasswordCss.boxmodel_body} ${ForgetPasswordCss.boxmodel_body2}`}>
                        <div className={ForgetPasswordCss.bodytext}>
                        <p>We have send password reset link to your registered email address. Please click the link to comoplete the reset process</p>
                        </div>
                    </div>
                </div>
                <div className={ForgetPasswordCss.boxmodel}>
                    <div className={ForgetPasswordCss.boxmodel_topbar}>
                        <div className={ForgetPasswordCss.boxmodel_title}>
                        <p>CHANGE PASSWORD</p>
                        </div>
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.extra} />
                        <div className={ForgetPasswordCss.cancel}>
                        <img alt='' src="images\cancel.png"  />
                        </div>
                    </div>
                    <div className={`${ForgetPasswordCss.boxmodel_body} ${ForgetPasswordCss.boxmodel_body3}`}>
                        <div className={ForgetPasswordCss.bodytext}>
                        <p>For maqware21@gmail.com</p>
                        </div>
                        <form>
                        <input type="password" name="password" placeholder='New Password'/>
                        <input type="password" name="password" placeholder='Confirm New Password'/>
                        <input type="submit" name="login" value="CHANGE PASSWORD" />
                        </form>
                    </div>
                </div>
            </div>
        
)
}
export default ForgetPasswordBox;