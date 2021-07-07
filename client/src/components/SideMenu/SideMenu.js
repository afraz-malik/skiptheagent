import React from 'react'
import SideMenuCss from './SideMenu.module.css'

const SideMenu = () => {
  const showResults = (index1) => {
    var inside = document.getElementsByClassName('inside')[index1]
    var rotate = document.getElementsByClassName('fuckingarrow')[index1]
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside `}
        >
          <form>
            <input
              type="text"
              name="search"
              placeholder="Keywords... e.g Honda"
            />
            <button type="submit">GO</button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(1)}
        >
          <p>YEAR</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            <button type="submit">GO</button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(2)}
        >
          <p>MAKE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            <button type="submit">GO</button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(3)}
        >
          <p>MODEL</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            <button type="submit">GO</button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(4)}
        >
          <p>ZIP CODE</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
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
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images\downarrow.png"
          />
        </div>
      </div>
    </div>
  )
}
export const DashboardSideMenu = () => {
  return (
    <div className={SideMenuCss.leftsection}>
      <div
        className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.first}`}
        style={{ display: 'flex' }}
      >
        <p>SHOW RESULTS BY:</p>
      </div>
      <div className={`${SideMenuCss.outside_leftsectioncard} mainSearch`}>
        <div className={SideMenuCss.leftsectioncard}>
          <p>ACTIVE (12)</p>
        </div>
        <div className={SideMenuCss.leftsectioncard}>
          <p>PENDING (0)</p>
        </div>
        <div className={SideMenuCss.leftsectioncard}>
          <p>REMOVED (0)</p>
        </div>
      </div>
    </div>
  )
}
export default SideMenu
