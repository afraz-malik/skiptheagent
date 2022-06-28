import React, { useEffect, useState } from 'react'
import UsersListingCss from './UsersListing.module.css'
// Router
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
// Components
import BoxModel from '../boxModel/boxModel.jsx'
import UserListingGen from '../UserListingGen/UserListingGen.jsx'

const UsersListing = ({ logged, users, title }) => {
  const [currentPage, setcurrentPage] = useState(1)
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])
  const paginateArray = paginate(users, 5, currentPage)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(paginateArray / 5); i++) {
    pageNumbers.push(i)
  }
  let totalPages
  if (users.length === 0) {
    totalPages = 1
  } else {
    totalPages = Math.ceil(users.length / 5)
  }

  if (currentPage > totalPages) {
    setcurrentPage(totalPages)
  }
  if (currentPage <= 0) setcurrentPage(1)
  return (
    <div className={UsersListingCss.boxmodel}>
      <BoxModel title={`${title} [${users.length}]`}>
        <div className={UsersListingCss.boxmodel_body}>
          {users.length === 0 && (
            <h5>
              <i>No User Found</i>
            </h5>
          )}
          {paginateArray.map((user, j) => (
            <UserListingGen key={j} user={user} logged={logged} />
          ))}
        </div>
        <div className={UsersListingCss.boxmodel_topbar}>
          <div
            className={`${UsersListingCss.boxmodel_title} ${UsersListingCss.boxmodel_bottombar}`}
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
export default UsersListing
