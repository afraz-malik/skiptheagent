import React, { useEffect, useState } from 'react'
import DashboardOverviewCss from './DashboardOverview.module.scss'
// Router
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// Redux
import { signOutStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { AdsGenDashboard } from '../AdsBoxModelGen/AdsBoxModelGen'
import Inbox from '../inbox/Inbox'
import { API, db_url, fetchBackend } from '../../services/config.js'

const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
})
const DashboardOverview = ({ match, signOut, user }) => {
  // const currentUser = useSelector((state) => state.setUser)
  const [savedAds, setSavedAds] = useState([])
  const [ownAds, setOwnAds] = useState([])

  useEffect(() => {
    fetchBackend('get', API.getUserAds + '?isDeleted=false').then((res) =>
      setOwnAds(res)
    )
    fetchBackend('GET', API.getUserLikedAds).then((res) => {
      if (res.success) {
        setSavedAds(res.ads)
      }
    })
  }, [])
  return (
    <div className={DashboardOverviewCss.container}>
      <BoxModel title="Profile">
        <div className={DashboardOverviewCss.body}>
          <div className={DashboardOverviewCss.top}>
            <img alt="" src={user.imgUrl} />
            <h4>Welcome</h4>
            <h2>{`${user.displayName}`}!</h2>
            <Button onClick={() => signOut()}>LOG OUT</Button>
          </div>
          <hr />
          <Link
            to={`${match.path}/profile`}
            className={DashboardOverviewCss.link}
          >
            VIEW PROFILE
          </Link>
        </div>
      </BoxModel>
      {ownAds.length > 0 && (
        <DashboardAdsBox
          match={match}
          ads={ownAds}
          title="MY RECENT ADS"
          url={'listing'}
        />
      )}

      <BoxModel title="INBOX">
        <div className={DashboardOverviewCss.body}>
          <div className={DashboardOverviewCss.top3}>
            {[...Array(10)].map((i, j) => (
              <Inbox key={j} />
            ))}
          </div>
          <hr />
          <div className={DashboardOverviewCss.link}>VIEW ALL</div>
        </div>
      </BoxModel>

      {savedAds.length > 0 && (
        <DashboardAdsBox
          match={match}
          ads={savedAds}
          title="MY SAVED ADS"
          url={'saved'}
        />
      )}
    </div>
  )
}
export const DashboardAdsBox = ({ title, match, url, ads }) => {
  return (
    <BoxModel title={title}>
      <div className={DashboardOverviewCss.body}>
        <div className={`${DashboardOverviewCss.top2}`}>
          <div className={`${DashboardOverviewCss.row1}`}>
            {ads[0] && <AdsGenDashboard product={ads[0]} />}
            <div className={DashboardOverviewCss.middle}></div>
            {ads[1] && <AdsGenDashboard product={ads[1]} />}
          </div>
          <div className={DashboardOverviewCss.bottom}></div>
          <div className={`${DashboardOverviewCss.row2}`}>
            {ads[2] && <AdsGenDashboard product={ads[2]} />}
            <div className={DashboardOverviewCss.middle}></div>
            {ads[3] && <AdsGenDashboard product={ads[3]} />}
          </div>
        </div>
        <hr />
        <Link to={`${match.path}/${url}`} className={DashboardOverviewCss.link}>
          SEE ALL
        </Link>
      </div>
    </BoxModel>
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardOverview)
)
