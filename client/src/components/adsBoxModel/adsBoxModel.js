import React from 'react';
import AdsBoxModelCss from './AdsBoxModel.module.css';
import BoxModel from '../boxModel/boxModel'
import AdsBoxModelGen from '../AdsBoxModelGen/AdsBoxModelGen'

const LatestAdsModel = ({view}) => {
  return (
    <div className={AdsBoxModelCss.boxmodel}>
    <BoxModel title = {"Recent Posted Ads"}>
      {/* <div className={AdsBoxModelCss.boxmodel_topbar}>
        <div className={AdsBoxModelCss.boxmodel_title}>
          <p>POSTED ADS</p>
        </div>
        <div className={AdsBoxModelCss.extra} />
        <div className={AdsBoxModelCss.extra} />
        <div className={AdsBoxModelCss.boxmodel_nav}>
          <a href="#1"><img alt='' src="images/leftarrow.png" /></a>
          <a href="#1"><img alt='' src="images/rightarrow.png" /></a>
        </div>
      </div> */}
      {
        view?
        (
          [...Array(2)].map((i,j)=>
            <div className={AdsBoxModelCss.boxmodel_body} key={j}>
              <div className={AdsBoxModelCss.add_cards}>
                {
                  [...Array(4)].map((i,j) =>
                    <AdsBoxModelGen key={j} />
                  )
                }
              </div>
            </div>
          )
        )
        :
        (
          <div className={AdsBoxModelCss.boxmodel_body}>
              <div className={AdsBoxModelCss.add_cards}>
                {
                  [...Array(4)].map((i,j) =>
                    <AdsBoxModelGen key={j} />
                  )
                }
              </div>
            </div>
        )

      }
      
    </BoxModel> 
    </div>
  )
}

export default LatestAdsModel;