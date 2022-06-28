import React, { useEffect, useState } from 'react'
import ListingBoxCss from './ListingBox.module.css'

// Components
import SideMenu from '../SideMenu/SideMenu'
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
// import { products } from '../../services/products'
import { API, fetchBackend } from '../../services/config.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListing } from '../../redux/data/data.actions.js'
import { withRouter } from 'react-router-dom'

const ListingBox = ({ logged, rows, location }) => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    sortBy: 'recent',
    keywords: '',
    // year: '',
    make: '',
    model: '',
    // zip: '',
    price: '',
    body_type: '',
    mileage: '',
    // fuel_type: '',
    engine_type: '',
    exterior_color: '',
    transmission: '',
    engine_capacity: '',
  })
  let fetching = useSelector((state) => state.dataReducer.fetchListing)
  const handleFilters = (key, val) => {
    // console.log(key, val)
    setFilters({
      ...filters,
      [key]: val,
    })
  }
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(filters)
    getAds()
  }, [filters])
  useEffect(() => {
    // console.log(fetching)
    if (fetching) {
      getAds()
      dispatch(fetchListing(false))
    }

    // eslint-disable-next-line
  }, [fetching])
  useEffect(() => {
    // console.log(fetching)
    if (location.filters) {
      setFilters({
        ...filters,
        keywords: location.filters.car,
        make: location.filters.make,
        model: location.filters.model,
      })
    }
    // eslint-disable-next-line
  }, [location])

  const getAds = () => {
    fetchBackend('GET', API.getAds, null, filters).then((res) =>
      setProducts(res)
    )
  }
  return (
    <div className={ListingBoxCss.section} id="img">
      <SideMenu filters={filters} handleFilters={handleFilters} />
      <ListingBoxModel
        products={products}
        title="USED CARS FOR SALE"
        filters={filters}
        handleFilters={handleFilters}
      />
    </div>
  )
}
export default withRouter(ListingBox)
