import React, { useEffect } from 'react'
import DashboardHeaderCss from './DashboardHeader.module.scss'

// Router
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// Components
import Button from '../button/button'
import { useSelector } from 'react-redux'

const DashboardHeader = ({ match }) => {
  const userRole = useSelector((state) => state.setUser.user.role)
  let overview = false
  let profile = false
  let listing = false
  let savedads = false
  let chats = false
  let alert = false
  let postad = false
  let users = false
  if (window.location.href.indexOf('profile') > -1) {
    profile = true
  } else if (window.location.href.indexOf('listing') > -1) {
    listing = true
  } else if (window.location.href.indexOf('saved') > -1) {
    savedads = true
  } else if (window.location.href.indexOf('alert') > -1) {
    alert = true
  } else if (window.location.href.indexOf('chats') > -1) {
    chats = true
  } else if (window.location.href.indexOf('postad') > -1) {
    postad = true
  } else if (window.location.href.indexOf('users') > -1) {
    users = true
  } else if (window.location.href.indexOf('dashboard') > -1) {
    overview = true
  }
  return (
    <div className={DashboardHeaderCss.dashboardHeader}>
      <ul>
        <li>
          <Link
            to={`${match.path}`}
            style={
              overview
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
            to={`${match.path}/profile`}
            style={
              profile
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
            to={`${match.path}/listing`}
            style={
              listing
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            {userRole === 'User' ? 'Listing' : 'Manage Ads'}
          </Link>
        </li>
        {userRole === 'Admin' && (
          <li>
            <Link
              to={`${match.path}/users`}
              style={
                users
                  ? {
                      color: 'var(--default-color)',
                      borderBottom: '5px solid var(--default-color)',
                    }
                  : null
              }
            >
              Manage Users
            </Link>
          </li>
        )}
        {userRole !== 'Admin' && (
          <>
            <li>
              <Link
                to={`${match.path}/saved`}
                style={
                  savedads
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
            {/* <li>
          <Link
            to={`${match.path}/alerts`}
            style={
              alert
                ? {
                    color: 'var(--default-color)',
                    borderBottom: '5px solid var(--default-color)',
                  }
                : null
            }
          >
            My Alert
          </Link>
        </li> */}
            <li>
              <Link
                to={`${match.path}/chats`}
                style={
                  chats
                    ? {
                        color: 'var(--default-color)',
                        borderBottom: '5px solid var(--default-color)',
                      }
                    : null
                }
              >
                Chats
              </Link>
            </li>
            <li>
              <Link
                to={`${match.path}/postad`}
                style={
                  postad
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
          </>
        )}
      </ul>
    </div>
  )
}

export default withRouter(DashboardHeader)
