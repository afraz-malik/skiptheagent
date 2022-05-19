import React, { useState } from 'react'
import SideMenuCss from './SideMenu.module.scss'

const SideMenu = ({ filters, handleFilters }) => {
  const [state, setState] = useState(filters)

  const showResults = (index1) => {
    var inside = document.getElementsByClassName('inside')[index1]
    var rotate = document.getElementsByClassName('fArrow')[index1]
    if (inside) {
      if (inside.style.display === 'flex') {
        inside.style.display = 'none'
        rotate.style.transform = 'rotate(-90deg)'
      } else {
        inside.style.display = 'flex'
        rotate.style.transform = 'rotate(0deg)'
      }
    } else {
      if (rotate.style.transform === 'rotate(0deg)') {
        rotate.style.transform = 'rotate(-90deg)'
      } else {
        rotate.style.transform = 'rotate(0deg)'
      }
    }
  }

  const showMainResults = () => {
    var main = document.getElementsByClassName('mainSearch')[0]
    var firstarrow = document.getElementsByClassName('mainArrow')[0]
    if (main.style.display === 'none') {
      main.style.display = 'block'
      firstarrow.style.transform = 'rotate(0deg)'
    } else {
      main.style.display = 'none'
      firstarrow.style.transform = 'rotate(-90deg)'
    }
  }
  return (
    <div className={SideMenuCss.leftsection}>
      <div
        className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.first}`}
        style={{ display: 'flex' }}
        onClick={() => showMainResults()}
      >
        <p>SHOW RESULTS BY:</p>
        <img
          alt=""
          className={`${SideMenuCss.firstarrow} mainArrow`}
          src="images\downarrow.png"
        />
      </div>
      <div className={`${SideMenuCss.outside_leftsectioncard} mainSearch`}>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(0)}
        >
          <p>SHOW BY KEYWORDS:</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside `}
        >
          <form>
            <input
              type="text"
              name="keywords"
              placeholder="Keywords... e.g Honda"
              value={state.keywords}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onChange={(e) => handleFilters('keywords', state.keywords)}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(1)}
        >
          <p>YEAR</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <form>
            <select
              value={state.year}
              name="year"
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            >
              <option value={''}>Year</option>
              <option value={'2022'}>2022</option>
              <option value={'2021'}>2021</option>
              <option value={'2020'}>2020</option>
              <option value={'2019'}>2019</option>
              <option value={'other'}>other</option>
            </select>

            <button
              type="button"
              onChange={(e) => handleFilters('year', state.year)}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(2)}
        >
          <p>MAKE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <form>
            <select
              name="make"
              value={state.make}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            >
              <option value="">Make</option>
              <option value="volvo">Suzuki</option>
              <option value="saab">Fiat</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <button
              type="button"
              onChange={(e) => handleFilters('make', state.make)}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(3)}
        >
          <p>MODEL</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <form>
            <input
              type="text"
              name="search"
              placeholder="Keywords... e.g Honda"
            />
            <button type="button">GO</button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(4)}
        >
          <p>ZIP CODE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(5)}
        >
          <p>PRICE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(6)}
        >
          <p>BODY TYPE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(7)}
        >
          <p>MILEAGE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(8)}
        >
          <p>FUEL TYPE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(9)}
        >
          <p>ENGINE TYPE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(10)}
        >
          <p>EXTERIOR COLOR</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(11)}
        >
          <p>TRANSMISSION TYPE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(12)}
        >
          <p>CAPACITY</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fArrow`}
            src="images\downarrow.png"
          />
        </div>
      </div>
    </div>
  )
}
export const DashboardSideMenu = ({ filters, handleFilters, count }) => {
  return (
    <div className={SideMenuCss.leftsection}>
      <div
        className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.first}`}
        style={{ display: 'flex' }}
      >
        <p>SHOW RESULTS BY:</p>
      </div>
      <div className={`${SideMenuCss.outside_leftsectioncard} mainSearch`}>
        <div
          className={`
            ${SideMenuCss.leftsectioncard}
            ${!filters.isDeleted && SideMenuCss.current}`}
          onClick={() => handleFilters('isDeleted', false)}
        >
          <p>ACTIVE ({count.activeCount})</p>
        </div>
        {/* <div className={SideMenuCss.leftsectioncard}>
          <p>PENDING (0)</p>
        </div> */}
        <div
          className={`${SideMenuCss.leftsectioncard} ${
            filters.isDeleted && SideMenuCss.current
          }`}
          onClick={() => handleFilters('isDeleted', true)}
        >
          <p>REMOVED ({count.removedCount})</p>
        </div>
      </div>
    </div>
  )
}
export default SideMenu
