
import React from 'react';
import AdsBoxModelCss from './adsBoxModel.module.css'
import LatestAdsModelGen from '../LatestAdsModel-gen/latest-ads-model-gen'
const adsBoxModel = () => {
  return (
    <div>
      <div className={AdsBoxModelCss.boxmodel}>
        <div className={AdsBoxModelCss.boxmodel_topbar}>
          <div className={AdsBoxModelCss.boxmodel_title}>
            <p>Related ADS</p>
          </div>
          <div className={AdsBoxModelCss.extra} />
          <div className={AdsBoxModelCss.extra} />

        </div>
        <div className={AdsBoxModelCss.boxmodel_body}>
          <div className={AdsBoxModelCss.add_cards}>
            {
              [...Array(4)].map((i) =>
                <LatestAdsModelGen key={i} />
              )
            }
          </div>
        </div>
      </div>
      <div className={AdsBoxModelCss.more}>
        <a href='#dumm' className={AdsBoxModelCss.viewmorea}>
          VIEW MORE
          </a>
      </div>
    </div>
  )
}

export default adsBoxModel;