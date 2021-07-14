import React, { useState } from 'react'
import HeaderCss from './Header.module.scss'

// Router
import { Link, withRouter } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import { signOutStart } from '../../redux/user/user.actions'

const mapStateToProps = (state) => ({
  url: state.URLReducer.url,
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
                Kindly <Link to={`${url}login`}>SIGN IN</Link> or
                <Link to={`${url}register`}>SIGN UP</Link>
              </p>
            </div>
          ) : (
            <div className={HeaderCss.loggedinheader}>
              <div className={HeaderCss.loggedinheaderleft}>
                {`Welcome ${user.name}!.`}
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
                    <Link to={`${url}dashboard`} href="#">
                      Dashboard
                    </Link>
                    <Link to={`${url}`} href="#" onClick={() => signOut()}>
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
              <span className={HeaderCss.likeimg}>
                <Link to={`${url}dashboard/saved`}>
                  <img src="images/whitelike.png" alt="" />
                </Link>
              </span>
              <Link to={`${url}dashboard`}>
                <img src="images/envelope.png" alt="" />
              </Link>
            </div>
          )}
        </div>
      </header>
      <div className={HeaderCss.smallheader}>
        <div className={HeaderCss.smalllogo}>
          <Link to={`${url}`}>
            <h3>LOGO </h3>
          </Link>
        </div>
        {!user ? (
          <div className={HeaderCss.smalltext}>
            <p>Welcome to skiptheagent.</p>
            <p>
              Kindly <Link to={`${url}login`}>SIGN IN</Link> or
              <Link to={`${url}register`}>SIGN UP</Link>
            </p>
          </div>
        ) : (
          <div className={HeaderCss.loggedinheader}>
            <div className={HeaderCss.loggedinheaderleft}>
              Welcome {`${user.name}!`}.
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
                  <Link to={`${url}dashboard`} href="#">
                    Dashboard
                  </Link>
                  <Link to={`${url}`} href="#" onClick={() => signOut()}>
                    Log out
                  </Link>
                </div>
              </div>
            </div>
            <span className={HeaderCss.likeimg}>
              <Link to={`${url}dashboard/saved`}>
                <img src="images/greenheart.png" alt="" />
              </Link>
            </span>
            <Link to={`${url}dashboard`}>
              <img src="images/greenenvelope.png" alt="" />
            </Link>
          </div>
        )}
      </div>
      <nav className={HeaderCss.nav}>
        <div className={HeaderCss.leftnav}>
          <div className={HeaderCss.logo}>
            <h3>
              <Link to={`${url}`}>LOGO</Link>
            </h3>
          </div>
        </div>
        <div className={HeaderCss.rightnav}>
          <ul>
            <li>
              <Link to={`${url}login`}>SELL MY CAR</Link>
            </li>
            <li>
              <Link to={`${url}listing`}>SHOP FOR NEW CARS</Link>
            </li>
            <li className={HeaderCss.consolt}>
              <Link to={`${url}ownership`}>CONSULTATIONS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
