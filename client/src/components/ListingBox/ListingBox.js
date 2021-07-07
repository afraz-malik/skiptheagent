import React from 'react'
import ListingBoxCss from './ListingBox.module.css'
import SideMenu from '../SideMenu/SideMenu'
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'

const ListingBox = ({ logged, rows }) => {
  return (
    <div className={ListingBoxCss.section} id="img">
      <SideMenu />
      <ListingBoxModel rows={10} />
    </div>
  )
}
export default ListingBox
