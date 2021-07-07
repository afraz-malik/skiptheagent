import React from 'react'
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'
import DashboardListingCss from './DashboardListing.module.scss'
const DashboardListing = () => {
  return (
    <div className={DashboardListingCss.section} id="img">
      <DashboardSideMenu />
      <ListingBoxModel logged={true} rows={4} />
    </div>
  )
}

export default DashboardListing
