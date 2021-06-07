import React, {useState} from 'react';
import AdsBoxModelCss from './RecentAdsBoxModel.module.css'
import LatestAdsModel from '../AdsBoxModel/AdsBoxModel'

const AdsBoxModel = () => {
  const [view, setView] = useState(false);
  const [viewValue, setViewValue] = useState('VIEW MORE');

  const channgeView=()=>{
    setView(!view)
      setViewValue("VIEW LESS")
      if(view)setViewValue("VIEW MORE")
  }
  return (
    <div>
      <LatestAdsModel view = {view}/>
      <div className={AdsBoxModelCss.more}>
        <a href='#dumm' className={AdsBoxModelCss.viewmorea} onClick={()=> channgeView()}>
         {`${viewValue}`}
          </a>
      </div>
    </div>
  )
}

export default AdsBoxModel;