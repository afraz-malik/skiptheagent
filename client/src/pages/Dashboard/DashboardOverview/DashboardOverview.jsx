import React from 'react'
import DashboardOverviewCss from './DashboardOverview.module.scss'
import BoxModel from '../../../components/boxModel/boxModel'
import Button from '../../../components/button/button'
import { AdsGenDashboard } from '../../../components/AdsBoxModelGen/AdsBoxModelGen'
import Inbox from '../../../components/inbox/Inbox'
const DashboardOverview = () => {
  return (
    <div className={DashboardOverviewCss.container}>
      <BoxModel title="Profile">
        <div className={DashboardOverviewCss.body}>
          <div className={DashboardOverviewCss.top}>
            <img alt="" src="images\john.png" />
            <h4>Welcome</h4>
            <h2>John Wick!</h2>
            <Button>LOG OUT</Button>
          </div>
          <hr />
          <div className={DashboardOverviewCss.link}>VIEW PROFILE</div>
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
          <div className={DashboardOverviewCss.link}>SEE ALL</div>
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
          <div className={DashboardOverviewCss.link}>VIEW PROFILE</div>
        </div>
      </BoxModel>
    </div>
  )
}

export default DashboardOverview
