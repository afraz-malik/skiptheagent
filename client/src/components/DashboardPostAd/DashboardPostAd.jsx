import React from 'react'
import DashboardPostAdCss from './DashboardPostAd.module.scss'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'

const DashboardPostAd = () => {
  return (
    <div className={DashboardPostAdCss.boxmodel}>
      <BoxModel title={'POST AD'}>
        <div className={DashboardPostAdCss.body}>
          <form>
            <h3>Car Information</h3>
            <p>
              (All feilds marked with <span>*</span> are mandatory)
            </p>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <label>
                  CITY<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">ANY</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  CAR INFO<span>*</span>
                </label>
                <input type="text" placeholder="Make/Model/Version" />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  REGISTRATION CITY<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Registration City</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  MILEAGE<span>*</span> (KM)
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Mileage km</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  EXTERIOR COLOR<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">White</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  DESCRIPTION<span>*</span>
                </label>
                <input type="textarea" placeholder="Describe your car ...." />
              </div>
              <hr />
            </div>
            <h3>Expected Selling Price</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <div className={DashboardPostAdCss.radio}>
                  <label>
                    TRANSACTION TYPE<span>*</span>
                  </label>
                  <input type="radio" name="a" />
                  <span>Cash</span>
                  <input type="radio" name="a" />
                  <span>Leased</span>
                </div>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  PRICE <span>*</span>($)
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Price ($)</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <hr />
            </div>
            <h3>Upload Photos</h3>
            <div className={DashboardPostAdCss.form}>
              <div
                className={`${DashboardPostAdCss.row} ${DashboardPostAdCss.uploadrow}`}
              >
                <div className={DashboardPostAdCss.upload}>
                  <div className={DashboardPostAdCss.uploadphoto}>
                    <label for="file-input">
                      <img alt="" src="images/addphoto.png" />
                    </label>
                    <input id="file-input" type="file" />
                    <span> (Max Limit 5MB Per Image)</span>
                  </div>
                  <div className={DashboardPostAdCss.uploadedphotos}>
                    <ul>
                      <li>
                        <div className={DashboardPostAdCss.subimg1}>
                          <img alt="" src="images\subimg1.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className={DashboardPostAdCss.subimg1}>
                          <img alt="" src="images\subimg2.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className={DashboardPostAdCss.subimg1}>
                          <img alt="" src="images\subimg3.jpg" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul>
                    <li>
                      Photos Should Be In "Jpeg, Jpg, Png, Gif" Format Only.
                    </li>
                    <li>
                      Adding At Least8 Pictures Improves The Chance For A Quick
                      Sale.
                    </li>
                    <li>
                      Adding Clear Front, Back And Interior Pictures Of Your Car
                      Increases The Quality Of Your Ad And Gets You Noticed More
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <h3>Additional Information</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ENGINE TYPE<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Any</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ENGINE CAPACITY<span>*</span>
                </label>
                <input type="text" placeholder="Make/Model/Version" />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  TRANSMISSION<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Registration City</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ASSEMBLY<span>*</span>
                </label>
                <select name="cars" id="city">
                  <option value="volvo">Mileage km</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <table>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <lablel>ABS</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Airbags</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>AM/FM</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <lablel>Air Conditioned</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Power Mirrors</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Poower Steering</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <lablel>CD Player</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Cassete</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Immobilizer Key</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                      <lablel>Power Locks</lablel>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <lablel>Navigation System</lablel>
                    </td>
                  </tr>
                </table>
              </div>
              <hr />
            </div>
            <h3>Contact Information</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <p>
                  Enter a gunuine XX digit mobile no. with format <br />
                  XXXXXXXXXXX. All inquires will come on this number.
                </p>
                <label>
                  MOBILE NUMBER<span>*</span>
                </label>
                <input type="text" placeholder="Mobile No" />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>SECONDARY MOBILE NUMBER (OPTIONAL) </label>
                <input type="text" placeholder="Mobile No" />
                <Button type="submit">SUBMIT & CONTINUE</Button>
              </div>
            </div>
          </form>
        </div>
      </BoxModel>
    </div>
  )
}

export default DashboardPostAd
