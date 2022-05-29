import React, { useEffect, useState } from 'react'
import HomeHeaderCss from './HomeHeader.module.scss'
//Router
import { Link, useHistory } from 'react-router-dom'
//Redux

import { connect } from 'react-redux'
const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const HomeHeader = ({ url, user }) => {
  const history = useHistory()
  const [state, setState] = useState({
    car: '',
    make: '',
    model: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/listing',
      filters: state,
    })
  }
  return (
    <header className={HomeHeaderCss.header}>
      <img alt="" className={HomeHeaderCss.headimg} src="images\header.jpg" />
      <div className={HomeHeaderCss.insidehead}>
        <div className={HomeHeaderCss.tophead}>
          <div id="hehe" className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.insidetop}>
            <div className={HomeHeaderCss.lefttop}>
              <p>Call Us Now: +01 123 456 78</p>
              <p>Email: info@skiptheagent.com</p>
            </div>
            {!user ? (
              <div className={HomeHeaderCss.righttop}>
                <p className={HomeHeaderCss.firstp}>Welcome to skiptheagent.</p>
                <p className={HomeHeaderCss.secondp}>
                  Kindly <Link to={`/login`}> SIGN IN </Link> or
                  <Link to={`/register`}> SIGN UP</Link>
                </p>
              </div>
            ) : (
              <div className={HomeHeaderCss.righttop}>
                <p className={HomeHeaderCss.firstp}>Welcome to skiptheagent.</p>
                <p
                  className={HomeHeaderCss.secondp}
                  //
                >
                  <Link
                    to={`/dashboard`}
                    style={{ marginLeft: '10px' }}
                  >{`${user.displayName}`}</Link>
                  !
                </p>
              </div>
            )}
          </div>
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.extra1} />
          <div className={HomeHeaderCss.headlogo} />
        </div>
        <div className={HomeHeaderCss.headnav}>
          <ul>
            <li>
              <Link to={`/login`} id="hehe">
                SELL MY CAR
              </Link>
            </li>
            <li>
              <Link to={`/listing`} id="hehe">
                SHOP FOR NEW CARS
              </Link>
            </li>
            <li>
              <Link to={`/ownership`}>CONSULTATIONS</Link>
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
          <form onSubmit={handleSubmit}>
            <div className={HomeHeaderCss.search1}>
              <input
                type="text"
                name="car"
                placeholder="Car/Make/Model"
                value={state.car}
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className={HomeHeaderCss.search1}>
              <select
                name="model"
                id="city"
                value={state.model}
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              >
                <option value="">Model</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className={HomeHeaderCss.search1}>
              <select
                name="make"
                id="price"
                value={state.make}
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              >
                <option value="">Make</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Fiat">Fiat</option>
                <option value="Opel">Opel</option>
                <option value="Audi">Audi</option>
              </select>
              <div className={HomeHeaderCss.checkboxes}>
                {/* <input
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
                </label> */}
              </div>
            </div>
            <button type="submit">SEARCH</button>
          </form>
          <div className={HomeHeaderCss.advancesearch}>
            <Link to={'/listing'}>
              <p>ADVANCE SEARCH</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
export default connect(mapStateToProps)(HomeHeader)
