import React, { useEffect, useState } from 'react'
import DashboardSavedAdsCss from './DashboardSavedAds.module.scss'

// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
// import { products } from '../../services/products'
import { API, fetchBackend } from '../../services/config.js'
import { useSelector } from 'react-redux'

const DashboardSavedAds = () => {
  const [products, setproducts] = useState([])
  const currentUser = useSelector((state) => state.setUser)
  const [filters, setFilters] = useState({ sortBy: 'recent', isDeleted: false })
  const handleFilters = (key, val) => {
    setFilters({
      ...filters,
      [key]: val,
    })
  }
  useEffect(() => {
    fetchBackend('GET', API.getUserLikedAds, null, filters).then((res) => {
      if (res.success) {
        setproducts(res.ads)
      }
    })
  }, [currentUser.user.likedAds, filters])
  return (
    <div className={DashboardSavedAdsCss.body}>
      <ListingBoxModel
        products={products}
        title="Saved ADS"
        filters={filters}
        logged
        handleFilters={handleFilters}
      />
    </div>
  )
}

export default DashboardSavedAds
