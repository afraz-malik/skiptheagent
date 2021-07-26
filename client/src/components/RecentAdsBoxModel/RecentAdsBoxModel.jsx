import React, { useState } from 'react'
import RecentAdsBoxModelCss from './RecentAdsBoxModel.module.scss'
// Components
// import AdsBoxModel from '../AdsBoxModel/AdsBoxModel'
import Button from '../button/button'

const RecenAdsBoxModel = () => {
  const [view, setView] = useState(false)
  const [viewValue, setViewValue] = useState('VIEW MORE')

  const channgeView = () => {
    setView(!view)
    setViewValue('VIEW LESS')
    if (view) setViewValue('VIEW MORE')
  }
  return (
    <div>
      {/* <AdsBoxModel view={view} view2={true} /> */}
      <div className={RecentAdsBoxModelCss.more}>
        <Button viewmore="true" onClick={() => channgeView()}>
          {`${viewValue}`}
        </Button>
      </div>
    </div>
  )
}

export default RecenAdsBoxModel
