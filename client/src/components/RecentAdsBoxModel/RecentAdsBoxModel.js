import React, {useState} from 'react';
import AdsBoxModelCss from './RecentAdsBoxModel.module.css'
import AdsModel from '../AdsBoxModel/AdsBoxModel'
import Button from '../button/button';

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
      <AdsModel view = {view} view2 = {true}/>
      <div className={AdsBoxModelCss.more}>
        <Button viewmore='true' onClick={()=> channgeView()}>
         {`${viewValue}`}
          </Button>
      </div>
    </div>
  )
}

export default AdsBoxModel;