import React, { useState } from 'react'
import DashboardAlertCss from './DashboardAlert.module.scss'

// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'

const DashboardAlert = () => {
  const [createAlert, setcreateAlert] = useState(false)
  const manageBox = () => {
    setcreateAlert(!createAlert)
  }
  return createAlert ? (
    <CreateAlert manageBox={manageBox} />
  ) : (
    <AlertBox manageBox={manageBox} />
  )
}
export const AlertBox = ({ manageBox }) => {
  return (
    <div className={DashboardAlertCss.boxmodel}>
      <BoxModel
        title={'MY SAVED ALERTS'}
        sidebar={'alert'}
        onAlert={manageBox}
      ></BoxModel>

      <table>
        <tbody>
          <tr>
            <th>MODEL</th>
            <th>YEAR</th>
            <th>CITY</th>
            <th>PRICE</th>
            <th>MILEAGE</th>
            <th>TRANSMISSION</th>
            <th>MOBILE NO.</th>
            <td></td>
          </tr>
          <tr>
            <td>BMW 330l xDrive</td>
            <td>2019</td>
            <td>Any</td>
            <td>200000-4000000</td>
            <td>2200-55000</td>
            <td>Automatic</td>
            <td>+92 324 8205435</td>
            <td> &#10008;</td>
          </tr>
          <tr>
            <td>Suzzuki Cappuccino</td>
            <td>2019</td>
            <td>Any</td>
            <td>200000-4000000</td>
            <td>2200-55000</td>
            <td>Automatic</td>
            <td>+92 324 8205435</td>
            <td>&#10008;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export const CreateAlert = ({ manageBox }) => {
  return (
    <div className={DashboardAlertCss.boxmodel1}>
      <BoxModel
        title={'CREATE CAR ALERT'}
        sidebar={'cancel'}
        closeBox={manageBox}
      >
        <div className={DashboardAlertCss.body}>
          <h4>
            Please fill the form below to receive an email when a car <br />
            matching your search criteria is listed
          </h4>
          <form>
            <div className={DashboardAlertCss.row}>
              <label>CAR MAKE</label>
              <select name="cars" id="city">
                <option value="volvo">ANY</option>
                <option value="saab">Female</option>
                <option value="opel">Other</option>
              </select>
            </div>
            <div className={DashboardAlertCss.row}>
              <label>CAR MODEL</label>
              <select name="cars" id="city">
                <option value="volvo">ANY</option>
                <option value="saab">Female</option>
                <option value="opel">Other</option>
              </select>
            </div>
            <div className={DashboardAlertCss.row}>
              <div className={DashboardAlertCss.subrow}>
                <div className={DashboardAlertCss.subrow1}>
                  <label>PRICE RANGE (From)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Price from</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
                <div className={DashboardAlertCss.subrow1}>
                  <label>PRICE RANGE (To)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Price to</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={DashboardAlertCss.row}>
              <div className={DashboardAlertCss.subrow}>
                <div className={DashboardAlertCss.subrow1}>
                  <label>MILEAGE (From)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Mileage from</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
                <div className={DashboardAlertCss.subrow1}>
                  <label>MILEAGE (To)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Mileage to</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={DashboardAlertCss.row}>
              <div className={DashboardAlertCss.subrow}>
                <div className={DashboardAlertCss.subrow1}>
                  <label>YEAR RANGE (From)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Year from</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
                <div className={DashboardAlertCss.subrow1}>
                  <label>YEAR RANGE (To)</label>
                  <select name="cars" id="city">
                    <option value="volvo">Year to</option>
                    <option value="saab">Female</option>
                    <option value="opel">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={DashboardAlertCss.row}>
              <label>TRANSMISSION</label>
              <select name="cars" id="city">
                <option value="volvo">ANY</option>
                <option value="saab">Female</option>
                <option value="opel">Other</option>
              </select>
            </div>
            <div className={DashboardAlertCss.row}>
              <label>FREQUENCY</label>
              <select name="cars" id="city">
                <option value="volvo">DAILY</option>
                <option value="saab">Female</option>
                <option value="opel">Other</option>
              </select>
            </div>
            <Button type="submit">CREATE ALERT</Button>
          </form>
        </div>
      </BoxModel>
    </div>
  )
}

export default DashboardAlert
