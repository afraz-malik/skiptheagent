import React from 'react';
import ListingBoxCss from './ListingBox.module.css'

import ListingCards from '../ListingCards/listingcards'

const ListingBox = () => {
  return (
    <div className = {ListingBoxCss.section}>
      <div className={ListingBoxCss.leftsection}>
        <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.first}`}>
          <p>SHOW RESULTS BY:</p>
          <img alt='' className={ListingBoxCss.firstarrow} src="images\downarrow.png" />
        </div>
        <div className={ListingBoxCss.outside_leftsectioncard}>
          <div className={ListingBoxCss.leftsectioncard} >
            <p>SHOW BY KEYWORDS:</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond}`}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} >
            <p>YEAR</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond}`}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} >
            <p>MAKE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond}`}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} >
            <p>MODEL</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond}`}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>ZIP CODE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>PRICE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>BODY TYPE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>MILEAGE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>FUEL TYPE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>ENGINE TYPE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>EXTERIOR COLOR</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>TRANSMISSION TYPE</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard}>
            <p>CAPACITY</p>
            <img alt='' className={ListingBoxCss.arrow} src="images\downarrow.png" />
          </div>
        </div>
      </div>
      <div className={ListingBoxCss.boxmodel}>
        <div className={ListingBoxCss.boxmodel_topbar}>
          <div className={ListingBoxCss.boxmodel_title}>
            <p>USED CARS FOR SALE [48631]</p>
          </div>
          <div className={ListingBoxCss.extra} />
          <div className={ListingBoxCss.extra} />
          <div className={ListingBoxCss.sortby}>
            <div className={ListingBoxCss.sortby_text}>
              <p>SORT BY:</p>
            </div>
            <div className={ListingBoxCss.sortby_box}>
              <select name="cars" id="city" >
                <option value="volvo">Updated Date: Recent first</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        <div className={ListingBoxCss.boxmodel_body}>
        {
          [...Array(10)].map((i) =>
            <ListingCards key={i} />
          )
        }
        </div>
        <div className={ListingBoxCss.boxmodel_topbar}>
          <div className={`${ListingBoxCss.boxmodel_title} ${ListingBoxCss.boxmodel_bottombar}`}>
            <ul>
              <li>&lt;</li>
              <li><a href='#dummy'>1</a></li>
              <li><a href='#dummy'>2</a></li>
              <li><a href='#dummy'>3</a></li>
              <li><a href='#dummy'>4</a></li>
              <li><a href='#dummy'>5</a></li>
              <li>...</li>
              <li><a href='#dummy'>45</a></li>
              <li>&gt;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListingBox;