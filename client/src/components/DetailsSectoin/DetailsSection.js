import React from 'react';
import DetailsSectionCss from './DetailsSection.module.css';

const DetailsSection = ({ carfeatures, cardetails, clicked, carfeaturesbg, cardetailsbg }) => {
  return (
    <div className={DetailsSectionCss.section}>
      <div className={DetailsSectionCss.uppersection}>
        <div className={DetailsSectionCss.leftsec}>
          <div className={DetailsSectionCss.coverimg}>
            <img alt="" className={DetailsSectionCss.cover} src="images\cover.jpg" width="100px" height="100%;" />
          </div>
          <div className={DetailsSectionCss.subimg}>
            <ul>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\cover.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\cover.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\subimg1.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\subimg2.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\subimg3.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\subimg4.jpg" />
                </div>
              </li>
              <li>
                <div className={DetailsSectionCss.subimg1}>
                  <img alt="" src="images\subimg5.jpg" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={DetailsSectionCss.rightsection}>
          <div className={DetailsSectionCss.nameprice}>
            <h2 >2019 Fiat 124 Spider</h2>
            <h3 >$22,547</h3>
          </div>
          <div className={DetailsSectionCss.belowname}>
            <div className={DetailsSectionCss.pin}>
              <img alt="" src="images/pin.png" width="100%" height="auto" />
            </div>
            <div className={DetailsSectionCss.model}>
              <p>Paris</p>
            </div>
            <div className={DetailsSectionCss.buttons}>
              <button className={DetailsSectionCss.chatbutton}>Chat</button>
              <button className={DetailsSectionCss.showbutton}>Show Phone Number</button>
            </div>
          </div>
          <hr className={DetailsSectionCss.sectionhr} />
          <div className={DetailsSectionCss.table}>
            <div className={DetailsSectionCss.tableheader}>
              <div className={`${DetailsSectionCss.skew} ${DetailsSectionCss.skew1}`} onClick={() => clicked('cardetails')} style={{ backgroundColor: cardetailsbg }}>
                <p>CAR DETAILS</p>
              </div>
              <div className={`${DetailsSectionCss.skew} {DetailsSectionCss.skew2}`} onClick={() => clicked('carfeatuers')} style={{ backgroundColor: carfeaturesbg }} >
                <p>CAR FEATURES</p>
              </div>
            </div>
            <table className={`${DetailsSectionCss.sectiontable} ${DetailsSectionCss.carfeatures}`} style={{ display: carfeatures }}  >
              <tbody><tr>
                <td>
                  <div className={DetailsSectionCss.td}>
                    <img alt="" src="images/brake.png" />
                    <p>ABS</p>
                  </div>
                </td>
                <td>
                  <div className={DetailsSectionCss.td}>
                    <img alt="" src="images/airbag.png" />
                    <p>Airbags</p>
                  </div>
                </td>
                <td>
                  <div className={DetailsSectionCss.td}>
                    <img alt="" src="images/radio.png" />
                    <p>AM/FM</p>
                  </div>
                </td>
              </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/ac.png" />
                      <p>Air Conditioned</p>
                    </div>
                  </td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/power.png" />
                      <p>Power Mirrors</p>
                    </div>
                  </td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/steering.png" />
                      <p>Power Steering</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/cd.png" />
                      <p>CD Player</p>
                    </div>
                  </td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/cassette.png" />
                      <p>Cassette</p>
                    </div>
                  </td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/car_key.png" />
                      <p>Immobilizer Key</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/door.png" />
                      <p>Power Locks</p>
                    </div>
                  </td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/cardinal.png" />
                      <p>Navigation System</p>
                    </div>
                  </td>
                  <td>
                  </td></tr>
                <tr>
                  <td>
                  </td><td>
                  </td><td>
                  </td></tr>
              </tbody></table>
            <table className={`${DetailsSectionCss.sectiontable} ${DetailsSectionCss.cardetails}`} style={{ display: cardetails }} >
              <tbody><tr>
                <td>
                  <div className={DetailsSectionCss.td}>
                    <img alt="" src="images/calendar.png" />
                    <p>MODEL</p>
                  </div>
                </td>
                <td>:2019</td>
                <td>
                  <div className={DetailsSectionCss.td}>
                    <img alt="" src="images/meter.png" />
                    <p>MILEAGE</p>
                  </div>
                </td>
                <td>:3,200 KM</td>
              </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/fuel.png" />
                      <p>FUEL TYPE</p>
                    </div>
                  </td>
                  <td>:Hybrid</td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/lightning.png" />
                      <p>ENGINE CAPACITY</p>
                    </div>
                  </td>
                  <td>:2000CC</td>
                </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/transmission.png" />
                      <p>TRANSMISSION</p>
                    </div>
                  </td>
                  <td>:Automatic</td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/exterior.png" />
                      <p>EXTERIOR COLOR</p>
                    </div>
                  </td>
                  <td>:Blue</td>
                </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/body.png" />
                      <p>BODY TYPE</p>
                    </div>
                  </td>
                  <td>:Coupe</td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/assembly.png" />
                      <p>ASSEMBLY</p>
                    </div>
                  </td>
                  <td>:Local</td>
                </tr>
                <tr>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/make.png" />
                      <p>MAKE</p>
                    </div>
                  </td>
                  <td>:Flat</td>
                  <td>
                    <div className={DetailsSectionCss.td}>
                      <img alt="" src="images/city.png" />
                      <p>REGISTERED CITY</p>
                    </div>
                  </td>
                  <td>:Un-Registered</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
      <div className={DetailsSectionCss.lowersection}>
        <div className={DetailsSectionCss.desp}>
          <p>DESCRIPTION</p>
        </div>
        <div className={DetailsSectionCss.details}>
          <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum .Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum .Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum .Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum</p>
        </div>
      </div>
    </div>
  )
}
export default DetailsSection;