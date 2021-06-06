import React from 'react';
import LatestAdsModelCss from './LatestAdsModel.module.css';

import LatestAdsModelGen from '../LatestAdsModel-gen/latest-ads-model-gen'

const LatestAdsModel = () => {
  return (
    <div className={LatestAdsModelCss.boxmodel}>
      <div className={LatestAdsModelCss.boxmodel_topbar}>
        <div className={LatestAdsModelCss.boxmodel_title}>
          <p>LATEST POSTED ADS</p>
        </div>
        <div className={LatestAdsModelCss.extra} />
        <div className={LatestAdsModelCss.extra} />
        <div className={LatestAdsModelCss.boxmodel_nav}>
          <a href="#1"><img alt='' src="images/leftarrow.png" /></a>
          <a href="#1"><img alt='' src="images/rightarrow.png" /></a>
        </div>
      </div>
      <div className={LatestAdsModelCss.boxmodel_body}>
        <div className={LatestAdsModelCss.add_cards}>
          {
            [...Array(4)].map((i,j) =>
              <LatestAdsModelGen key={j} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default LatestAdsModel;