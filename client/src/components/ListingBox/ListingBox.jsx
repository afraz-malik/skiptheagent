import React from 'react'
import ListingBoxCss from './ListingBox.module.css'

// Components
import SideMenu from '../SideMenu/SideMenu'
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { products } from '../../services/products'

const ListingBox = ({ logged, rows }) => {
  return (
    <div className={ListingBoxCss.section} id="img">
      <SideMenu />
      <ListingBoxModel products={products} />
    </div>
  )
}
export default ListingBox
