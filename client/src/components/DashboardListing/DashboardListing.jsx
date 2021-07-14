import React from 'react'
import DashboardListingCss from './DashboardListing.module.scss'
// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'

const DashboardListing = () => {
  return (
    <div className={DashboardListingCss.section} id="img">
      <DashboardSideMenu />
      <ListingBoxModel logged={true} rows={4} />
    </div>
  )
}

export default DashboardListing
