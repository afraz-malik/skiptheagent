import React, { useState } from 'react'
import DashboardProfileCss from './DashboardProfile.module.scss'
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { connect } from 'react-redux'
import { SingleForgetBox } from '../ForgetPasswordBox/ForgetPasswordBox'

const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const DashboardProfile = ({ user }) => {
  const [showBox, manageBox] = useState(false)
  const showBoxFunction = () => {
    manageBox(true)
  }
  const hideBoxFunction = () => {
    manageBox(false)
  }
  return (
    <div className={DashboardProfileCss.container}>
      <BoxModel title="Profile">
        <div className={DashboardProfileCss.body}>
          <div className={DashboardProfileCss.top}>
            <img alt="" src="images\john.png" />
            <h3>PROFILE PICTURE</h3>
            <form>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>FULL NAME</label>
                  <input type="text" value={`${user.name}`} />
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>EMAIL</label>
                  <input type="text" value={`${user.email}`} />
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>GENDER </label>
                  <select name="cars" id="city">
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>COUNTRY </label>
                  <select name="cars" id="city">
                    <option value="volvo">Canada</option>
                    <option value="saab">Italy</option>
                    <option value="opel">Switzerland</option>
                  </select>
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>CITY </label>
                  <select name="cars" id="city">
                    <option value="volvo">Alashka</option>
                    <option value="saab">New York</option>
                    <option value="opel">Maldives</option>
                  </select>
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>ZIP CODE</label>
                  <input type="text" value="54900" />
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>USERNAME</label>
                  <input type="text" value="johnwick" />
                </div>
                <div className={DashboardProfileCss.column}>
                  <span>
                    <label>Mobile Number</label>
                    <span className={DashboardProfileCss.error}>
                      &#9888; Not Verified
                    </span>
                  </span>
                  <input type="text" value="+01 123 4567485" />
                </div>
              </div>
              <span className={DashboardProfileCss.changepassword}>
                PASSWORD:
                <span onClick={() => showBoxFunction()}>Change Password</span>
              </span>
              <Button type="submit">SAVE</Button>
            </form>
          </div>
        </div>
      </BoxModel>
      {showBox ? (
        <SingleForgetBox close={hideBoxFunction} email={user.email} />
      ) : null}
    </div>
  )
}

export default connect(mapStateToProps)(DashboardProfile)
