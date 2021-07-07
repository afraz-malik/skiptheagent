import React from 'react'
import HomeHeaderCss from './HomeHeader.module.css'
//Router
import { Link } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  url: state.URLReducer.url,
})

const HomeHeader = ({ url }) => {
  return (
    <header className={HomeHeaderCss.header}>
      <img alt="" className={HomeHeaderCss.headimg} src="\images\header.jpg" />
      <div className={HomeHeaderCss.insidehead}>
        <div className={HomeHeaderCss.tophead}>
          <div id="hehe" className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.insidetop}>
            <div className={HomeHeaderCss.lefttop}>
              <p>Call Us Now: +01 123 456 78</p>
              <p>Email: info@skiptheagent.com</p>
            </div>
            <div className={HomeHeaderCss.righttop}>
              <p className={HomeHeaderCss.firstp}>Welcome to skiptheagent.</p>
              <p className={HomeHeaderCss.secondp}>
                {' '}
                Kindly <Link to={`${url}login`}> SIGN IN </Link> or{' '}
                <Link to={`${url}register`}>SIGN UP</Link>
              </p>
            </div>
          </div>
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.headlogo} />
        </div>
        <div className={HomeHeaderCss.headnav}>
          <ul>
            <li>
              <Link to={`${url}login`} id="hehe">
                SELL MY CAR
              </Link>
            </li>
            <li>
              <Link to={`${url}listing`} id="hehe">
                SHOP FOR NEW CARS
              </Link>
            </li>
            <li>
              <Link to={`${url}ownership`}>CONSULTATIONS</Link>
            </li>
          </ul>
        </div>
        <div className={HomeHeaderCss.headtext}>
          <div className={HomeHeaderCss.headtext1}>
            FIND USED CARS AROUND YOU
            <span> </span>
          </div>
          <div className={HomeHeaderCss.headtext2}>
            With thousands of cars, we have just the right one for you
            <span> </span>
          </div>
        </div>
        <div className={HomeHeaderCss.headsearch}>
          <form>
            <div className={HomeHeaderCss.search1}>
              <input type="text" name="model" placeholder="Car/Make/Model" />
            </div>
            <div className={HomeHeaderCss.search1}>
              <select name="cars" id="city">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className={HomeHeaderCss.search1}>
              <select name="cars" id="price">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <div className={HomeHeaderCss.checkboxes}>
                <input
                  type="checkbox"
                  id={HomeHeaderCss.checkbox1}
                  name="new"
                  defaultValue="new"
                />
                <label htmlFor="new" className="label1">
                  NEW
                </label>
                <input
                  type="checkbox"
                  id={HomeHeaderCss.checkbox1}
                  name="new"
                  defaultValue="new"
                />
                <label htmlFor="used" className="label2">
                  USED
                </label>
              </div>
            </div>
            <button type="submit">SEARCH</button>
          </form>
          <div className={HomeHeaderCss.advancesearch}>
            <p>ADVANCE SEARCH</p>
          </div>
        </div>
      </div>
    </header>
  )
}
export default connect(mapStateToProps)(HomeHeader)
