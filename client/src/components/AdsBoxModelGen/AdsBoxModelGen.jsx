import React from 'react'
import AdsBoxModelGenCss from './AdsBoxModelGen.module.scss'

//Router
import { Link } from 'react-router-dom'
//Redux

const AdsBoxModelGen = ({ product }) => {
  return (
    <ul className={AdsBoxModelGenCss.ul}>
      <li>
        <div className={AdsBoxModelGenCss.cards}>
          <div className={AdsBoxModelGenCss.add_img}>
            <Link to={`/details?productId=${product.id}`}>
              <img alt="" src="images\honda-city-2016.jpg" />
            </Link>
          </div>
          <div className={AdsBoxModelGenCss.add_name}>
            <Link to={`/details`}>{product.car_info}</Link>
          </div>
          <div className={AdsBoxModelGenCss.add_price}>
            ${product.selling.price}
          </div>
          <hr />
          <div className={AdsBoxModelGenCss.options}>
            <div className={AdsBoxModelGenCss.class1}>
              <div className={AdsBoxModelGenCss.class2}>
                <img alt="" src="images\placeholder.png" />
              </div>
              <div className={AdsBoxModelGenCss.class3}>
                <p>{product.city}</p>
              </div>
            </div>
            <div className={AdsBoxModelGenCss.class1}>
              <div className={AdsBoxModelGenCss.class2}>
                <img alt="" src="images\meter.png" />
              </div>
              <div className={AdsBoxModelGenCss.class3}>
                <p>{product.mileage_km}</p>
              </div>
            </div>
            <div className={AdsBoxModelGenCss.class1}>
              <div className={AdsBoxModelGenCss.class2}>
                <img alt="" src="images\calendar.png" />
              </div>
              <div className={AdsBoxModelGenCss.class3}>
                <p>{product.model}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export const AdsGenDashboard = () => {
  return (
    <div className={AdsBoxModelGenCss.cards1}>
      <div className={AdsBoxModelGenCss.add_img1}>
        <Link to={`/details`}>
          <img alt="" src="images\honda-city-2016.jpg" />
        </Link>
      </div>
      <div className={AdsBoxModelGenCss.add_name1}>
        <Link to={`/details`}>Honda City 1.3 i-VTEC Prosmatec</Link>
      </div>
      <div className={AdsBoxModelGenCss.add_price1}>$76,000</div>
    </div>
  )
}

export default AdsBoxModelGen
