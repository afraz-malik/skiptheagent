import React from 'react';
import LatestAdsModelGenCss from './LatestAdsModelGen.module.css';

const LatestAdsModelGen = () => {
    return (
        <div className={LatestAdsModelGenCss.cards}>
            <div className={LatestAdsModelGenCss.add_img}>
                <a href="#1">
                    <img alt='' src="images/honda-city-2016.jpg" />
                </a>
            </div>
            <div className={LatestAdsModelGenCss.add_name}>
                <a href="#1">
                    Honda City 1.3 i-VTEC Prosmatec
                </a>
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
export default LatestAdsModelGen