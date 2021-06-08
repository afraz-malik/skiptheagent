import React from 'react';
import ListingBoxCss from './ListingBox.module.css'

import ListingCards from '../ListingCards/listingcards'
import { Link } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  url: state.URLReducer.url
})

const ListingBox = ({ url }) => {
  const showResults = (index1) => {
    var inside = document.getElementsByClassName('inside')[index1];
    var rotate = document.getElementsByClassName('fuckingarrow')[index1];
    if(inside){
      if (inside.style.display === "flex") {
        inside.style.display = "none";
        rotate.style.transform = "rotate(-90deg)";
      }
      else {
        inside.style.display = "flex";
        rotate.style.transform = "rotate(0deg)";
      }
    }
    else{
      if (rotate.style.transform === "rotate(0deg)") {
        rotate.style.transform = "rotate(-90deg)";
      }
      else {
        rotate.style.transform = "rotate(0deg)";
      }
    }
  }
  
const showMainResults=()=> {
  var main = document.getElementsByClassName('mainSearch')[0];
  var firstarrow = document.getElementsByClassName('mainArrow')[0];
  console.log(main.style.display)
  if (main.style.display === "none") {
    main.style.display = "block";
    firstarrow.style.transform ="rotate(0deg)";	
  }
  else{
    main.style.display = "none";
    firstarrow.style.transform ="rotate(-90deg)";
  }	
}
  return (
    <div className={ListingBoxCss.section} id='img'>
      <div className={ListingBoxCss.leftsection}>
        <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.first}`} style={{display: 'flex'}} onClick={()=>showMainResults()}>
          <p>SHOW RESULTS BY:</p>
          <img alt='' className={`${ListingBoxCss.firstarrow} mainArrow`} src="images\downarrow.png" />
        </div>
        <div className={`${ListingBoxCss.outside_leftsectioncard} mainSearch`}>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(0)}>
            <p>SHOW BY KEYWORDS:</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond} inside `}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(1)}>
            <p>YEAR</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond} inside`} >
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(2)}>
            <p>MAKE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond} inside`} >
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(3)}>
            <p>MODEL</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={`${ListingBoxCss.leftsectioncard} ${ListingBoxCss.insidesecond} inside`}>
            <form>
              <input type="text" name="search" placeholder="Keywords... e.g Honda" />
              <button type="submit">GO</button>
            </form>
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(4)}>
            <p>ZIP CODE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(5)}>
            <p>PRICE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(6)}>
            <p>BODY TYPE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(7)}>
            <p>MILEAGE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(8)}>
            <p>FUEL TYPE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(9)}>
            <p>ENGINE TYPE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(10)}>
            <p>EXTERIOR COLOR</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(11)}>
            <p>TRANSMISSION TYPE</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
          </div>
          <div className={ListingBoxCss.leftsectioncard} onClick={() => showResults(12)}>
            <p>CAPACITY</p>
            <img alt='' className={`${ListingBoxCss.arrow} fuckingarrow`} src="images\downarrow.png" />
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
              <li><Link to='#dummy'>1</Link></li>
              <li><Link to='#dummy'>2</Link></li>
              <li><Link to='#dummy'>3</Link></li>
              <li><Link to='#dummy'>4</Link></li>
              <li><Link to='#dummy'>5</Link></li>
              <li>...</li>
              <li><Link to='#dummy'>45</Link></li>
              <li>&gt;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(ListingBox);