import React from 'react'
import inboxCss from './inbox.module.scss'

const Inbox = () => {
  return (
    <div className={inboxCss.inboxrow}>
      <div className={inboxCss.inboxrow2}>
        <div className={inboxCss.inboximg}>
          <img alt="" src="\images\man.jpg" />
        </div>
        <div className={inboxCss.inboxmessage}>
          <div className={inboxCss.inboxnametime}>
            <span className={inboxCss.name}> Johhny Boi</span>
            <span className={inboxCss.time}>23 min ago</span>
          </div>
          <div className={inboxCss.inboxtext}>
            <span className={inboxCss.text}>
              Hello, I have Interest in your car, Can we meet up?
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
