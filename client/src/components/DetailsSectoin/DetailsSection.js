import React, { useEffect, useState } from 'react'
import DetailsSectionCss from './DetailsSection.module.scss'

// Components
import Button from '../button/button'

// import { products } from '../../services/products'
import { API, fetchGet } from '../../services/config.js'
import { withRouter } from 'react-router-dom'
import { Spinner } from '../spinner/spinner.jsx'
const DetailsSection = ({ location }) => {
  const [state, setState] = useState({
    carfeatures: 'table',
    carfeaturesbg: '#10846c',
    cardetails: 'none',
    cardetailsbg: 'grey',
    // eslint-disable-next-line
    source: 'images/cover.jpg',
    product: null,
    loading: false,
  })

  useEffect(() => {
    getProduct()
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
    getProduct()
  }, [location.search])

  const getProduct = () => {
    setState({ ...state, loading: true })
    fetchGet(API.getAd + location.search.substr(11)).then((res) =>
      setState({ ...state, product: res })
    )
  }
  const clicked = (value) => {
    value === 'carfeatuers'
      ? setState({
          ...state,
          carfeatures: 'table',
          carfeaturesbg: '#10846c',
          cardetails: 'none',
          cardetailsbg: 'grey',
        })
      : setState({
          ...state,
          carfeatures: 'none',
          carfeaturesbg: 'grey',
          cardetails: 'table',
          cardetailsbg: '#10846c',
        })
  }
  const changeImage = (src) => {
    setState({
      ...state,
      source: src,
    })
  }
  const {
    carfeatures,
    cardetails,
    carfeaturesbg,
    cardetailsbg,
    source,
    product,
  } = state
  return (
    <>
      {state.product ? (
        <div className={DetailsSectionCss.section}>
          <div className={DetailsSectionCss.uppersection}>
            <div className={DetailsSectionCss.leftsec}>
              <div className={DetailsSectionCss.coverimg}>
                <img
                  alt=""
                  className={DetailsSectionCss.cover}
                  src={`${source}`}
                  width="100px"
                  height="100%;"
                />
              </div>
              <div className={DetailsSectionCss.subimg}>
                <ul>
                  {/* <li>
                  <div className={DetailsSectionCss.subimg1}>
                    <img alt="" src="images\cover.jpg" onClick={(e)=>changeImage(e.target.src)}/>
                  </div>
                </li> */}
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\cover.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\subimg1.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\subimg2.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\subimg3.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\subimg4.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                  <li>
                    <div className={DetailsSectionCss.subimg1}>
                      <img
                        alt=""
                        src="images\subimg5.jpg"
                        onClick={(e) => changeImage(e.target.src)}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={DetailsSectionCss.rightsection}>
              <div className={DetailsSectionCss.nameprice}>
                <h2>{product.car_info}</h2>
                <h3>${product.selling.price}</h3>
              </div>
              <div className={DetailsSectionCss.belowname}>
                <div className={DetailsSectionCss.pin}>
                  <img alt="" src="images\pin.png" width="100%" height="auto" />
                </div>
                <div className={DetailsSectionCss.model}>
                  <p>{product.city}</p>
                </div>
                <div className={DetailsSectionCss.buttons}>
                  <Button> Chat </Button>
                  <Button> Show Phone Number </Button>
                  {/* <button className={DetailsSectionCss.chatbutton}>Chat</button> */}
                  {/* <button className={DetailsSectionCss.showbutton}>Show Phone Number</button> */}
                </div>
              </div>
              <hr className={DetailsSectionCss.sectionhr} />
              <div className={DetailsSectionCss.table}>
                <div className={DetailsSectionCss.tableheader}>
                  <div
                    className={`${DetailsSectionCss.skew} ${DetailsSectionCss.skew1}`}
                    onClick={() => clicked('cardetails')}
                    style={{ backgroundColor: cardetailsbg }}
                  >
                    <p>CAR DETAILS</p>
                  </div>
                  <div
                    className={`${DetailsSectionCss.skew} {DetailsSectionCss.skew2}`}
                    onClick={() => clicked('carfeatuers')}
                    style={{ backgroundColor: carfeaturesbg }}
                  >
                    <p>CAR FEATURES</p>
                  </div>
                </div>
                <table
                  className={`${DetailsSectionCss.sectiontable} ${DetailsSectionCss.carfeatures}`}
                  style={{ display: carfeatures }}
                >
                  <tbody>
                    <tr>
                      {product.features.abs && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\brake.png" />
                            <p> ABS</p>
                          </div>
                        </td>
                      )}
                      {product.features.airbags && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\airbag.png" />
                            <p>Airbags</p>
                          </div>
                        </td>
                      )}
                      {product.features.am_fm && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\radio.png" />
                            <p>AM/FM</p>
                          </div>
                        </td>
                      )}
                    </tr>
                    <tr>
                      {product.features.ac && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\ac.png" />
                            <p>Air Conditioned</p>
                          </div>
                        </td>
                      )}
                      {product.features.power_mirrors && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\power.png" />
                            <p>Power Mirrors</p>
                          </div>
                        </td>
                      )}
                      {product.features.power_steering && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\steering.png" />
                            <p>Power Steering</p>
                          </div>
                        </td>
                      )}
                    </tr>
                    <tr>
                      {product.features.cd_player && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\cd.png" />
                            <p>CD Player</p>
                          </div>
                        </td>
                      )}
                      {product.features.cassete && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\cassette.png" />
                            <p>Cassette</p>
                          </div>
                        </td>
                      )}
                      {product.features.immobilizer && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\car_key.png" />
                            <p>Immobilizer Key</p>
                          </div>
                        </td>
                      )}
                    </tr>
                    <tr>
                      {product.features.power_locks && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\door.png" />
                            <p>Power Locks</p>
                          </div>
                        </td>
                      )}
                      {product.features.nav_system && (
                        <td>
                          <div className={DetailsSectionCss.td}>
                            <img alt="" src="images\cardinal.png" />
                            <p>Navigation System</p>
                          </div>
                        </td>
                      )}
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <table
                  className={`${DetailsSectionCss.sectiontable} ${DetailsSectionCss.cardetails}`}
                  style={{ display: cardetails }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\calendar.png" />
                          <p>MODEL</p>
                        </div>
                      </td>
                      <td>:{product.model}</td>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\meter.png" />
                          <p>MILEAGE</p>
                        </div>
                      </td>
                      <td>:{product.mileage_km} KM</td>
                    </tr>
                    <tr>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\fuel.png" />
                          <p>FUEL TYPE</p>
                        </div>
                      </td>
                      <td>:{product.details.engine_type}</td>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\lightning.png" />
                          <p>ENGINE CAPACITY</p>
                        </div>
                      </td>
                      <td>:{product.details.engine_capacity}CC</td>
                    </tr>
                    <tr>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\transmission.png" />
                          <p>TRANSMISSION</p>
                        </div>
                      </td>
                      <td>:{product.details.transmission}</td>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\exterior.png" />
                          <p>EXTERIOR COLOR</p>
                        </div>
                      </td>
                      <td>:{product.details.exterior_color}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\body.png" />
                          <p>BODY TYPE</p>
                        </div>
                      </td>
                      <td>:{product.details.body_type}</td>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\assembly.png" />
                          <p>ASSEMBLY</p>
                        </div>
                      </td>
                      <td>:{product.details.assembly}</td>
                    </tr>
                    <tr>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\make.png" />
                          <p>MAKE</p>
                        </div>
                      </td>
                      <td>:{product.details.make}</td>
                      <td>
                        <div className={DetailsSectionCss.td}>
                          <img alt="" src="images\city.png" />
                          <p>REGISTERED CITY</p>
                        </div>
                      </td>
                      <td>:{product.details.reg_city || 'Un-Registered'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={DetailsSectionCss.lowersection}>
            <div className={DetailsSectionCss.desp}>
              <p>DESCRIPTION</p>
            </div>
            <div className={DetailsSectionCss.details}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default withRouter(DetailsSection)
