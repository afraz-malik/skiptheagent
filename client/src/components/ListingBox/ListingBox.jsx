import React, { useEffect, useState } from 'react'
import ListingBoxCss from './ListingBox.module.css'

// Components
import SideMenu from '../SideMenu/SideMenu'
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { products } from '../../services/products'
import { API, fetchGet } from '../../services/config.js'

const ListingBox = ({ logged, rows }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchGet(API.getAds).then((res) => setProducts(res))
  }, [])
  return (
    <div className={ListingBoxCss.section} id="img">
      <SideMenu />
      <ListingBoxModel products={products} />
    </div>
  )
}
export default ListingBox
