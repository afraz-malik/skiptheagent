import React from 'react'
import DashboardSavedAdsCss from './DashboardSavedAds.module.scss'

// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { products } from '../../services/products'

const DashboardSavedAds = () => {
  return (
    <div className={DashboardSavedAdsCss.body}>
      <ListingBoxModel products={products} />
    </div>
  )
}

export default DashboardSavedAds
