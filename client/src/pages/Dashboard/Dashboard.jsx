import React, { Component } from 'react'
//Router
import { withRouter, Route } from 'react-router-dom'

//Components
import Header from '../../components/Header/Header'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview'
import DashboardProfile from '../../components/DashboardProfile/DashboardProfile'
import DashboardListing from '../../components/DashboardListing/DashboardListing'
import DashboardSavedAds from '../../components/DashboardSavedAds/DashboardSavedAds'
import DashboardAlert from '../../components/DashboardAlert/DashboardAlert'
import DashboardPostAd from '../../components/DashboardPostAd/DashboardPostAd'
import Footer from '../../components/Footer/Footer'
import DashboardChats from '../../components/DashboardChats/DashboardChats.jsx'
import DashboardManageUsers from '../../components/DashboardManageUsers/DashboardManageUsers.jsx'

class Dashboard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
          path={`${match.path}/users`}
          component={DashboardManageUsers}
        />
        <Route
          exact
          path={`${match.path}/saved`}
          component={DashboardSavedAds}
        />
        <Route exact path={`${match.path}/alerts`} component={DashboardAlert} />
        <Route exact path={`${match.path}/chats`} component={DashboardChats} />
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
