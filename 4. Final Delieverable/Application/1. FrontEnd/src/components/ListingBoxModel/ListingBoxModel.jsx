import React, { useEffect, useState } from 'react'
import ListingBoxModelCss from './ListingBoxModel.module.css'
// Router
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
// Components
import ListingCards from '../ListingCards/listingcards'
import BoxModel from '../boxModel/boxModel.jsx'

const ListingBox = ({ filters, handleFilters, logged, products, title }) => {
  const [currentPage, setcurrentPage] = useState(1)
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])
  const paginateArray = paginate(products, 5, currentPage)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(paginateArray / 5); i++) {
    pageNumbers.push(i)
  }
  let totalPages
  if (products.length === 0) {
    totalPages = 1
  } else {
    totalPages = Math.ceil(products.length / 5)
  }

  if (currentPage > totalPages) {
    setcurrentPage(totalPages)
  }
  if (currentPage <= 0) setcurrentPage(1)
  return (
    <div className={ListingBoxModelCss.boxmodel}>
      <BoxModel
        title={`${title} [${products.length}]`}
        sortBox
        borderOff
        filters={filters}
        handleFilters={handleFilters}
      >
        {!logged && (
          <div
            className={`${ListingBoxModelCss.leftsectioncard} ${ListingBoxModelCss.first}`}
            style={{
              alignItems: 'start',
              gap: '10px',
              flexWrap: 'wrap',
              height: 'auto',

              alignItems: 'center',
            }}
          >
            {Object.keys(filters).filter((key) => filters[key]).length !== 0 ? (
              <>
                <b style={{ fontSize: '12px' }}>Showing Results:</b>
                {Object.keys(filters)
                  .filter((key) => filters[key])
                  .map((key, idx) => (
                    <span>
                      {filters[key]}
                      {/* <i
                
                  className="fa fa-close"
                  onClick={() => handleFilters(key, '')}
                ></i> */}
                      <FontAwesomeIcon
                        icon={faClose}
                        className={ListingBoxModelCss.close}
                        onClick={() => handleFilters(key, '')}
                      />
                    </span>
                  ))}
              </>
            ) : (
              <b style={{ fontSize: '12px' }}>Showing All Results</b>
            )}
          </div>
        )}
        <div className={ListingBoxModelCss.boxmodel_body}>
          {products.length === 0 && (
            <h5>
              <i>No Ads Found</i>
            </h5>
          )}
          {paginateArray.map((product, j) => (
            <ListingCards key={j} product={product} logged={logged} />
          ))}
        </div>
        <div className={ListingBoxModelCss.boxmodel_topbar}>
          <div
            className={`${ListingBoxModelCss.boxmodel_title} ${ListingBoxModelCss.boxmodel_bottombar}`}
          >
            <ul>
              <li onClick={() => setcurrentPage(currentPage - 1)}>&lt;</li>
              {[...Array(totalPages)].map((i, j) => (
                <NumberGen
                  key={j + 1}
                  counter={j + 1}
                  setcurrentPage={setcurrentPage}
                  currentPage={currentPage}
                />
              ))}
              {/* <li>
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
            </li> */}
              <li onClick={() => setcurrentPage(currentPage + 1)}>&gt;</li>
            </ul>
          </div>
        </div>
      </BoxModel>
    </div>
  )
}
const NumberGen = ({ counter, currentPage, setcurrentPage }) => {
  return (
    <li
      // className={COrdersCss.numbers}
      style={
        counter === currentPage
          ? {
              color: 'white',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }
          : { cursor: 'pointer' }
      }
      onClick={() => setcurrentPage(counter)}
    >
      {counter}
    </li>
  )
}
export default ListingBox
