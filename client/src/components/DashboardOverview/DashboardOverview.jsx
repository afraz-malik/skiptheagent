import React from 'react'
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

const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
})
const DashboardOverview = ({ match, signOut, user }) => {
  return (
    <div className={DashboardOverviewCss.container}>
      <BoxModel title="Profile">
        <div className={DashboardOverviewCss.body}>
          <div className={DashboardOverviewCss.top}>
            <img alt="" src="images\john.png" />
            <h4>Welcome</h4>
            <h2>{`${user.name}`}!</h2>
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
      <BoxModel title="MY RECENT ADS">
        <div className={DashboardOverviewCss.body}>
          <div className={`${DashboardOverviewCss.top2}`}>
            <div className={`${DashboardOverviewCss.row1}`}>
              <AdsGenDashboard />
              <div className={DashboardOverviewCss.middle}></div>
              <AdsGenDashboard />
            </div>
            <div className={DashboardOverviewCss.bottom}></div>
            <div className={`${DashboardOverviewCss.row2}`}>
              <AdsGenDashboard />
              <div className={DashboardOverviewCss.middle}></div>
              <AdsGenDashboard />
            </div>
          </div>
          <hr />
          <Link
            to={`${match.path}/listing`}
            className={DashboardOverviewCss.link}
          >
            SEE ALL
          </Link>
        </div>
      </BoxModel>
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
      <BoxModel title="MY SAVED ADS">
        <div className={DashboardOverviewCss.body}>
          <div className={`${DashboardOverviewCss.top2}`}>
            <div className={`${DashboardOverviewCss.row1}`}>
              <AdsGenDashboard />
              <div className={DashboardOverviewCss.middle}></div>
              <AdsGenDashboard />
            </div>
            <div className={DashboardOverviewCss.bottom}></div>
            <div className={`${DashboardOverviewCss.row2}`}>
              <AdsGenDashboard />
              <div className={DashboardOverviewCss.middle}></div>
              <AdsGenDashboard />
            </div>
          </div>
          <hr />
          <Link
            to={`${match.path}/saved`}
            className={DashboardOverviewCss.link}
          >
            SEE ALL
          </Link>
        </div>
      </BoxModel>
    </div>
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashboardOverview)
)
