import React from 'react'
import DashboardSavedAdsCss from './DashboardSavedAds.module.scss'

// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'

const DashboardSavedAds = () => {
  return (
    <div className={DashboardSavedAdsCss.body}>
      <ListingBoxModel rows={3} />
    </div>
  )
}

export default DashboardSavedAds
