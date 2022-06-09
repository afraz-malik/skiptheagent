import React, { useEffect, useState } from 'react'
import DashboardManageUsersCss from './DashboardManageUsers.module.scss'
// Components
import ListingBoxModel from '../ListingBoxModel/ListingBoxModel'
import { DashboardSideMenu } from '../SideMenu/SideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { API, fetchBackend } from '../../services/config.js'
import { fetchListing } from '../../redux/data/data.actions.js'
import { withRouter } from 'react-router-dom'
import UsersListing from '../UsersListing/UsersListing.jsx'
const DashboardManageUsers = ({ location }) => {
  const dispatch = useDispatch()
  let fetching = useSelector((state) => state.dataReducer.fetchListing)
  const currentUser = useSelector((state) => state.setUser)
  const [users, setusers] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetchBackend('GET', API.getUsersForAdmin).then((res) => {
      setusers(res)
      // setCount({
      //   activeCount: res.active_count,
      //   removedCount: res.removed_count,
      // })
    })
  }, [])
  // useEffect(() => {
  //   if (fetching) {
  //     fetchBackend('GET', API.getUserAds, null, filters).then((res) => {
  //       setusers(res.ads)
  //       setCount({
  //         activeCount: res.active_count,
  //         removedCount: res.removed_count,
  //       })
  //     })
  //     dispatch(fetchListing(false))
  //   }
  //   // eslint-disable-next-line
  // }, [fetching])

  return (
    <div className={DashboardManageUsersCss.section} id="img">
      {/* <DashboardSideMenu
        handleFilters={handleFilters}
        filters={filters}
        count={count}
      /> */}
      <UsersListing logged={true} users={users} title="Manage Users" />
    </div>
  )
}

export default withRouter(DashboardManageUsers)
