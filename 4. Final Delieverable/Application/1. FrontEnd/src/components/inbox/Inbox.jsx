import moment from 'moment'
import React from 'react'
import { useHistory } from 'react-router-dom'
import inboxCss from './inbox.module.scss'

const Inbox = ({ channal, currentUser }) => {
  const history = useHistory()
  let user = channal.usersObj.filter((user) => user._id !== currentUser._id)[0]
  return (
    <div
      className={inboxCss.inboxrow}
      onClick={() =>
        history.push({
          pathname: `dashboard/chats`,
          user_id: user._id,
        })
      }
    >
      <div className={inboxCss.inboxrow2}>
        <div className={inboxCss.inboximg}>
          <img alt="" src={user.imgUrl} />
        </div>
        <div className={inboxCss.inboxmessage}>
          <div className={inboxCss.inboxnametime}>
            <span className={inboxCss.name}>{user.displayName}</span>
            <span className={inboxCss.time}>
              {moment(channal.lastMessageTime).fromNow()}
            </span>
          </div>
          <div className={inboxCss.inboxtext}>
            <span className={inboxCss.text}>{channal.lastMessage}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
