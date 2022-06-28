import React from 'react'
import UserListingCss from './UserListingGen.module.scss'

//Router
import { Link, useHistory } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
// Components
import Button from '../button/button'
import { useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/user.actions.js'
import { API, fetchBackend } from '../../services/config.js'
import { toast } from 'react-toastify'
import { fetchListing } from '../../redux/data/data.actions.js'
import moment from 'moment'

const UserListingGen = ({ user }) => {
  const handleBan = () => {
    if (
      window.confirm(
        "Are you sure you want to ban this user? User won't be able to use the app"
      )
    ) {
      fetchBackend('DELETE', API.banUser + `${user._id}`).then((res) => {
        toast.success('User Banned')
        // console.log(res)
      })
    }
  }
  return (
    <div
      className={`${UserListingCss.chat_outside}
      ${true ? UserListingCss.selected : null}
    `}
      // onClick={() => openChat()}
    >
      <div className={UserListingCss.chat_mini_out}>
        <div className={UserListingCss.chat}>
          <div className={UserListingCss.chat_img}>
            <img src={user?.imgUrl} />
          </div>
          <div className={UserListingCss.chat_message}>
            <h6>{user?.displayName}</h6>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className={UserListingCss.chat}>
          <Button onClick={() => handleBan()} disabled={user.isBanned}>
            {user.isBanned ? 'User Banned' : 'Ban User'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserListingGen
