import React from 'react'
import HeaderCss from './Header.module.css'
import { Link } from 'react-router-dom'
//Redux

const Header = ({ url }) => {
  return (
    <div>
      <header className={HeaderCss.header}>
        <div className={HeaderCss.leftheader}>
          <div className={HeaderCss.lefttext}>
            <p>Call Us Now: +01 123 456 78 </p>
            <p>Email: info@skiptheagent.com</p>
          </div>
        </div>
        <div className={HeaderCss.rightheader}>
          <div className={HeaderCss.righttext}>
            <p className={HeaderCss.firstp}>Welcome to skiptheagent.</p>
            <p className={HeaderCss.secondp}>
              {' '}
              Kindly <Link to={`login`}>SIGN IN</Link> or{' '}
              <Link to={`register`}>SIGN UP</Link>
            </p>
          </div>
        </div>
      </header>
      <div className={HeaderCss.smallheader}>
        <div className={HeaderCss.smalllogo}>
          <Link to={``}>
            <h3>LOGO </h3>
          </Link>
        </div>
        <div className={HeaderCss.smalltext}>
          <p>Welcome to skiptheagent.</p>
          <p>
            {' '}
            Kindly <Link to={`login`}>SIGN IN</Link> or{' '}
            <Link to={`register`}>SIGN UP</Link>
          </p>
        </div>
      </div>
      <nav className={HeaderCss.nav}>
        <div className={HeaderCss.leftnav}>
          <div className={HeaderCss.logo}>
            <h3>
              <Link to={``}>LOGO</Link>
            </h3>
          </div>
        </div>
        <div className={HeaderCss.rightnav}>
          <ul>
            <li>
              <Link to={`login`}>SELL MY CAR</Link>
            </li>
            <li>
              <Link to={`listing`}>SHOP FOR NEW CARS</Link>
            </li>
            <li className={HeaderCss.consolt}>
              <Link to={`ownership`}>CONSULTATIONS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header
