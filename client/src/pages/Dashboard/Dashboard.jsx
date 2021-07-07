import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview'
import Footer from '../../components/Footer/Footer'
import { withRouter, Route } from 'react-router-dom'
import DashboardProfile from '../../components/DashboardProfile/DashboardProfile'
import DashboardListing from '../../components/DashboardListing/DashboardListing'
import DashboardSavedAds from '../../components/DashboardSavedAds/DashboardSavedAds'
import DashboardAlert from '../../components/DashboardAlert/DashboardAlert'
import DashboardPostAd from '../../components/DashboardPostAd/DashboardPostAd'
class Dashboard extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Header />
        <DashboardHeader state={this.state} setState={this.setState} />
        <Route exact path={`${match.path}`} component={DashboardOverview} />
        <Route path={`${match.path}/profile`} component={DashboardProfile} />
        <Route
          exact
          path={`${match.path}/listing`}
          component={DashboardListing}
        />
        <Route
          exact
          path={`${match.path}/saved`}
          component={DashboardSavedAds}
        />
        <Route exact path={`${match.path}/alerts`} component={DashboardAlert} />
        <Route
          exact
          path={`${match.path}/postad`}
          component={DashboardPostAd}
        />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Dashboard)
