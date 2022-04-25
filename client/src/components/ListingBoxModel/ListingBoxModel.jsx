import React from 'react'
import ListingBoxModelCss from './ListingBoxModel.module.css'
// Router
import { Link } from 'react-router-dom'

// Components
import ListingCards from '../ListingCards/listingcards'

const ListingBox = ({ logged, products }) => {
  return (
    <div className={ListingBoxModelCss.boxmodel}>
      <div className={ListingBoxModelCss.boxmodel_topbar}>
        <div className={ListingBoxModelCss.boxmodel_title}>
          <p>USED CARS FOR SALE [48631]</p>
        </div>
        <div className={ListingBoxModelCss.extra} />
        <div className={ListingBoxModelCss.extra} />
        <div className={ListingBoxModelCss.sortby}>
          <div className={ListingBoxModelCss.sortby_text}>
            <p>SORT BY:</p>
          </div>
          <div className={ListingBoxModelCss.sortby_box}>
            <select name="cars" id="city">
              <option value="volvo">Updated Date: Recent first</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className={ListingBoxModelCss.boxmodel_body}>
        {products.length === 0 && (
          <h5>
            <i>No Ads Found</i>
          </h5>
        )}
        {products.map((product, j) => (
          <ListingCards key={j} product={product} logged={logged} />
        ))}
      </div>
      <div className={ListingBoxModelCss.boxmodel_topbar}>
        <div
          className={`${ListingBoxModelCss.boxmodel_title} ${ListingBoxModelCss.boxmodel_bottombar}`}
        >
          <ul>
            <li>&lt;</li>
            <li>
              <Link to="#dummy">1</Link>
            </li>
            <li>
              <Link to="#dummy">2</Link>
            </li>
            <li>
              <Link to="#dummy">3</Link>
            </li>
            <li>
              <Link to="#dummy">4</Link>
            </li>
            <li>
              <Link to="#dummy">5</Link>
            </li>
            <li>...</li>
            <li>
              <Link to="#dummy">45</Link>
            </li>
            <li>&gt;</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ListingBox
