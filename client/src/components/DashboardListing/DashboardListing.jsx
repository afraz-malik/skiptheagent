import React from 'react'
import DashboardListingCss from './DashboardListing.module.scss'
// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'
import { products } from '../../services/products'
const DashboardListing = () => {
  return (
    <div className={DashboardListingCss.section} id="img">
      <DashboardSideMenu />
      <ListingBoxModel logged={true} products={products} />
    </div>
  )
}

export default DashboardListing
