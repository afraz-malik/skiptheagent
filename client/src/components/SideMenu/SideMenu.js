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
        style={{ flexDirection: 'column' }}
      >
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.first}`}
          style={{ alignItems: 'start' }}
          onClick={() => showMainResults()}
        >
          <p>SHOW RESULTS BY:</p>
          <img
            alt=""
            className={`${SideMenuCss.firstarrow} mainArrow`}
            src="images\downarrow.png"
          />
        </div>
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
              onClick={(e) => {
                handleFilters('keywords', state.keywords)
                setState({ ...state, keywords: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        {/* <div
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
              onClick={(e) => {
                handleFilters('year', state.year)
                setState({ ...state, year: '' })
              }}
            >
              GO
            </button>
          </form>
        </div> */}
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(1)}
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
              <option value="Suzuki">Suzuki</option>
              <option value="Fiat">Fiat</option>
              <option value="Opel">Opel</option>
              <option value="Audi">Audi</option>
            </select>

            <button
              type="button"
              onClick={(e) => {
                handleFilters('make', state.make)
                setState({ ...state, make: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(2)}
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
            {/* <input
              type="text"
              name="model"
              placeholder="Keywords... e.g Honda"
              value={state.model}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            /> */}
            <select
              value={state.model}
              name="model"
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
              onClick={(e) => {
                handleFilters('model', state.model)
                setState({ ...state, model: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        {/* <div
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
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <form>
            <input
              type="text"
              name="zip"
              placeholder="Keywords... e.g Honda"
              value={state.zip}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('zip', state.zip)
                setState({ ...state, zip: '' })
              }}
            >
              GO
            </button>
          </form>
        </div> */}
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(3)}
        >
          <p>PRICE</p>
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
              name="price"
              placeholder="Enter price, e.g 79"
              value={state.price}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('price', state.price)
                setState({ ...state, price: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(4)}
        >
          <p>BODY TYPE</p>
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
              name="body_type"
              placeholder="Type... e.g Coupe"
              value={state.body_type}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('body_type', state.body_type)
                setState({ ...state, body_type: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(5)}
        >
          <p>MILEAGE</p>
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
              name="mileage"
              placeholder="Type... e.g 2500"
              value={state.mileage}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('mileage', state.mileage)
                setState({ ...state, mileage: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        {/* <div
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
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <form>
            <input
              type="text"
              name="fuel_type"
              placeholder="Keywords... e.g Honda"
              value={state.fuel_type}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('fuel_type', state.mileage)
                setState({ ...state, fuel_type: '' })
              }}
            >
              GO
            </button>
          </form>
        </div> */}
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(6)}
        >
          <p>ENGINE TYPE</p>
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
              name="engine_type"
              placeholder="Type... e.g Any"
              value={state.engine_type}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('engine_type', state.engine_type)
                setState({ ...state, engine_type: '' })
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(7)}
        >
          <p>EXTERIOR COLOR</p>
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
              name="exterior_color"
              placeholder="Type... e.g white"
              value={state.exterior_color}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                setState({ ...state, exterior_color: '' })
                handleFilters('exterior_color', state.exterior_color)
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(8)}
        >
          <p>TRANSMISSION TYPE</p>
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
              name="transmission"
              placeholder="Transmission... e.g manual"
              value={state.transmission}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                setState({ ...state, transmission: '' })

                handleFilters('transmission', state.transmission)
              }}
            >
              GO
            </button>
          </form>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(9)}
        >
          <p>ENGINE CAPACITY</p>
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
              name="engine_capacity"
              placeholder="Type... e.g 343"
              value={state.engine_capacity}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={(e) => {
                handleFilters('engine_capacity', state.engine_capacity)
                setState({ ...state, engine_capacity: '' })
              }}
            >
              GO
            </button>
          </form>
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
