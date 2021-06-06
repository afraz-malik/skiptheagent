import React from 'react';
import LatestAdsModelGenCss from './LatestAdsModelGen.module.css';
//Router
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})
const LatestAdsModelGen = ({url}) => {
    return (
        <div className={LatestAdsModelGenCss.cards}>
            <div className={LatestAdsModelGenCss.add_img}>
                <Link to={`${url}details`}>
                    <img alt='' src="images/honda-city-2016.jpg" />
                </Link>
            </div>
            <div className={LatestAdsModelGenCss.add_name}>
                <Link to={`${url}details`}>
                    Honda City 1.3 i-VTEC Prosmatec
                </Link>
            </div>
            <div className={LatestAdsModelGenCss.add_price}>$76,000</div>
            <hr />
            <div className={LatestAdsModelGenCss.options}>
                <div className={LatestAdsModelGenCss.class1}>
                    <div className={LatestAdsModelGenCss.class2}>
                        <img alt='' src="images/placeholder.png" />
                    </div>
                    <div className={LatestAdsModelGenCss.class3}>
                        <p>City</p>
                    </div>
                </div>
                <div className={LatestAdsModelGenCss.class1}>
                    <div className={LatestAdsModelGenCss.class2}>
                        <img alt='' src="images/meter.png" />
                    </div>
                    <div className={LatestAdsModelGenCss.class3}>
                        <p>45,000</p>
                    </div>
                </div>
                <div className={LatestAdsModelGenCss.class1}>
                    <div className={LatestAdsModelGenCss.class2}>
                        <img alt='' src="images/calendar.png" />
                    </div>
                    <div className={LatestAdsModelGenCss.class3}>
                        <p>2016</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(LatestAdsModelGen)