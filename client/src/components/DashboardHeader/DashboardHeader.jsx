import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import DashboardHeaderCss from './DashboardHeader.module.scss'
import { withRouter } from 'react-router'

const DashboardHeader = ({ location }) => {
  return (
    <div className={DashboardHeaderCss.dashboardHeader}>
      <ul>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard/profile'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard/listing'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            Listing
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard/saved-ads'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            Saved Ads
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard/alert'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            My Alert
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={
              location.pathname === '/dashboard'
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            <Button> POST AD</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(DashboardHeader)
