import React, { useEffect, useState } from 'react'
import DashboardListingCss from './DashboardListing.module.scss'
// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { API, fetchBackend } from '../../services/config.js'
import { fetchListing } from '../../redux/data/data.actions.js'
import { withRouter } from 'react-router-dom'
const DashboardListing = ({ location }) => {
  const dispatch = useDispatch()
  let fetching = useSelector((state) => state.dataReducer.fetchListing)
  const currentUser = useSelector((state) => state.setUser)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [filters, setFilters] = useState({
    sortBy: 'recent',
    removedCount: false,
  })
  const handleFilters = (key, val) => {
    setFilters({
      ...filters,
      [key]: val,
    })
  }
  useEffect(() => {
    fetchBackend('GET', API.getUserAds, null, filters).then((res) => {
      setProducts(res.ads)
      setCount({
        activeCount: res.active_count,
        removedCount: res.removed_count,
      })
    })
  }, [currentUser, filters])
  useEffect(() => {
    if (fetching) {
      fetchBackend('GET', API.getUserAds, null, filters).then((res) => {
        setProducts(res.ads)
        setCount({
          activeCount: res.active_count,
          removedCount: res.removed_count,
        })
      })
      dispatch(fetchListing(false))
    }
    // eslint-disable-next-line
  }, [fetching])

  return (
    <div className={DashboardListingCss.section} id="img">
      <DashboardSideMenu
        handleFilters={handleFilters}
        filters={filters}
        count={count}
      />
      <ListingBoxModel
        logged={true}
        products={products}
        title="MY ADS"
        filters={filters}
        handleFilters={handleFilters}
      />
    </div>
  )
}

export default withRouter(DashboardListing)
