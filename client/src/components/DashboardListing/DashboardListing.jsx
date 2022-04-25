import React, { useEffect, useState } from 'react'
import DashboardListingCss from './DashboardListing.module.scss'
// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'
import { useSelector } from 'react-redux'
import { API, fetchGet } from '../../services/config.js'
const DashboardListing = () => {
  const currentUser = useSelector((state) => state.setUser.user)
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchGet(API.getUserAds, currentUser.token).then((res) => setProducts(res))
  }, [])

  return (
    <div className={DashboardListingCss.section} id="img">
      <DashboardSideMenu />
      <ListingBoxModel logged={true} products={products} />
    </div>
  )
}

export default DashboardListing
