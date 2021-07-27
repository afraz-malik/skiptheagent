import React, { useState } from 'react'
import HeaderCss from './Header.module.scss'

// Router
import { Link, withRouter } from 'react-router-dom'
//Redux
import { signOutStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
})
const Header = ({ url, user, signOut }) => {
  const [hidden, sethidden] = useState(true)
  const toggleHidden = () => {
    sethidden(!hidden)
  }
  return (
    <div className={HeaderCss.container}>
      <header className={HeaderCss.header}>
        <div className={HeaderCss.leftheader}>
          <div className={HeaderCss.lefttext}>
            <p>Call Us Now: +01 123 456 78 </p>
            <p>Email: info@skiptheagent.com</p>
          </div>
        </div>
        <div className={HeaderCss.rightheader}>
          {!user ? (
            <div className={HeaderCss.righttext}>
              <p className={HeaderCss.firstp}>Welcome to skiptheagent.</p>
              <p className={HeaderCss.secondp}>
                Kindly <Link to={`/login`}>SIGN IN</Link> or
                <Link to={`/register`}> SIGN UP</Link>
              </p>
            </div>
          ) : (
            <div className={HeaderCss.loggedinheader}>
              <div className={HeaderCss.loggedinheaderleft}>
                {`Welcome ${user.displayName}!.`}
                <div
                  className={HeaderCss.dropdown}
                  onClick={() => toggleHidden()}
                >
                  <img
                    className={HeaderCss.dropbtn}
                    alt=""
                    src="images/whitedropdown.png"
                  />
                  <div
                    className={HeaderCss.dropdown_content}
                    style={hidden ? { display: 'none' } : { display: 'block' }}
                  >
                    <Link to={`/dashboard`} href="#">
                      Dashboard
                    </Link>
                    <Link to={`/`} href="#" onClick={() => signOut()}>
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
              <span className={HeaderCss.likeimg}>
                <Link to={`/dashboard/saved`}>
                  <img src="images/whitelike.png" alt="" />
                </Link>
              </span>
              <Link to={`/dashboard`}>
                <img src="images/envelope.png" alt="" />
              </Link>
            </div>
          )}
        </div>
      </header>
      <div className={HeaderCss.smallheader}>
        <div className={HeaderCss.smalllogo}>
          <Link to={`/`}>
            <h3>LOGO </h3>
          </Link>
        </div>
        {!user ? (
          <div className={HeaderCss.smalltext}>
            <p>Welcome to skiptheagent.</p>
            <p>
              Kindly <Link to={`/login`}>SIGN IN</Link> or
              <Link to={`/register`}> SIGN UP</Link>
            </p>
          </div>
        ) : (
          <div className={HeaderCss.loggedinheader}>
            <div className={HeaderCss.loggedinheaderleft}>
              Welcome {`${user.displayName}!`}.
              <div
                className={HeaderCss.dropdown}
                onClick={() => toggleHidden()}
              >
                <img
                  className={HeaderCss.dropbtn}
                  alt=""
                  src="images/greendropdown.png"
                />
                <div
                  className={HeaderCss.dropdown_content}
                  style={hidden ? { display: 'none' } : { display: 'block' }}
                >
                  <Link to={`/dashboard`} href="#">
                    Dashboard
                  </Link>
                  <Link to={`/`} href="#" onClick={() => signOut()}>
                    Log out
                  </Link>
                </div>
              </div>
            </div>
            <span className={HeaderCss.likeimg}>
              <Link to={`/dashboard/saved`}>
                <img src="images/greenheart.png" alt="" />
              </Link>
            </span>
            <Link to={`/dashboard`}>
              <img src="images/greenenvelope.png" alt="" />
            </Link>
          </div>
        )}
      </div>
      <nav className={HeaderCss.nav}>
        <div className={HeaderCss.leftnav}>
          <div className={HeaderCss.logo}>
            <h3>
              <Link to={`/`}>LOGO</Link>
            </h3>
          </div>
        </div>
        <div className={HeaderCss.rightnav}>
          <ul>
            <li>
              <Link to={`/login`}>SELL MY CAR</Link>
            </li>
            <li>
              <Link to={`/listing`}>SHOP FOR NEW CARS</Link>
            </li>
            <li className={HeaderCss.consolt}>
              <Link to={`/ownership`}>CONSULTATIONS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
