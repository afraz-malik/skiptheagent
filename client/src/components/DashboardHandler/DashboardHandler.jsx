import React from 'react'
import DashboardProfile from '../DashboardProfile/DashboardProfile'
import DashboardListing from '../DashboardListing/DashboardListing'
import DashboardSavedAds from '../DashboardSavedAds/DashboardSavedAds'
const DashboardHandler = ({ match }) => {
  switch (match.params.category) {
    case 'profile':
      return <DashboardProfile />

    case 'listing':
      return <DashboardListing />

    case 'saved':
      return <DashboardSavedAds />

    default:
  }
}

export default DashboardHandler
