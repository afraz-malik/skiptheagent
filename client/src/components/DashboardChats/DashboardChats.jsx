import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import BoxModel from '../boxModel/boxModel.jsx'
import Button from '../button/button.jsx'
import DashboardChatsCss from './DashboardChats.module.scss'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { API, fetchBackend, socket } from '../../services/config.js'
// Components
import moment from 'moment'
const DashboardChats = ({ location }) => {
  const chatBoxRef = useRef(null)
  const currentUser = useSelector((state) => state.setUser.user)
  const [messages, setMessages] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [channalId, setChannalId] = useState(null)
  const [channals, _setChannals] = useState([])
  const channalsRef = useRef(null)
  const setChannals = (data) => {
    channalsRef.current = data
    _setChannals(data)
  }
  useEffect(() => {
    // const { name, room } = queryString.parse(location.search)

    if (location.user_id) getUser(location.user_id)
    fetchChannals()

    socket.on('connect', (e) => console.log('Connected event: ', socket.id))
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
      console.log(message.channalId === channalId)
      if (message.channalId === channalId) seenMessage(message.channalId)
      fetchChannals()
    })
    socket.on('disconnect', (reason) => console.log(reason))
  }, [])
  const runScroll = () => {
    if (chatBoxRef.current)
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
  }
  useEffect(() => {
    runScroll()
  }, [messages])
  useEffect(() => {
    if (selectedUser) {
      fetchMessages()
    }
  }, [selectedUser])

  const getUser = (userId) => {
    fetchBackend('GET', API.getUser + userId).then((res) => {
      setSelectedUser(res)
    })
  }
  const fetchMessages = () => {
    socket.emit(
      'fetchMessages',
      { user: selectedUser._id, authUser: currentUser._id },
      ({ error, messages }) => {
        if (error) {
          alert(error)
        } else {
          if (messages.length > 0) {
            setChannalId(messages[0].channalId)
            setMessages(messages)
            seenMessage(messages[0].channalId)
          }
        }
      }
    )
  }
  const seenMessage = (channalId) => {
    socket.emit(
      'seenMessages',
      {
        channalId: channalId,
        authUser: currentUser._id,
      },
      (res) => {
        console.log(res)
        fetchChannals()
      }
    )
  }
  const fetchChannals = () => {
    socket.emit('fetchChannals', currentUser._id, ({ error, channals }) => {
      if (error) {
        alert(error)
      } else {
        console.log(channals)
        setChannals(channals)
      }
    })
  }
  return (
    <div className={DashboardChatsCss.body}>
      <BoxModel
        title={`Chats`}
        // sortBox
        borderOff
        // filters={filters}
        // handleFilters={handleFilters}
      >
        <div className={DashboardChatsCss.container}>
          <div className={DashboardChatsCss.inbox}>
            <div className={DashboardChatsCss.inbox_topBar}>Messages</div>
            <div className={DashboardChatsCss.list_container}>
              <div className={DashboardChatsCss.search}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={DashboardChatsCss.searchicon}
                />
                <input type="text" placeholder="Search messages" />
              </div>
              <div className={DashboardChatsCss.chat_lists}>
                {channals.map((channal) => {
                  let user = channal.usersObj.find(
                    (user) => user._id !== currentUser._id
                  )
                  return (
                    <InboxMessages
                      openChat={() => {
                        setSelectedUser(user)
                      }}
                      user={user}
                      currentUser={currentUser}
                      channal={channal}
                      selectedUser={selectedUser}
                      deleteChannal={() => {
                        socket.emit('deleteChannal', channal._id, (res) => {
                          console.log(res)
                          fetchChannals()
                          if (user._id === selectedUser._id)
                            setSelectedUser(null)
                        })
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          {selectedUser && (
            <ChatBox
              messages={messages}
              currentUser={currentUser}
              selectedUser={selectedUser}
              channalId={channalId}
              chatBoxRef={chatBoxRef}
            />
          )}
        </div>
      </BoxModel>
    </div>
  )
}

const InboxMessages = ({
  channal,
  user,
  openChat,
  currentUser,
  deleteChannal,
  selectedUser,
}) => {
  let selected = channal.users.some((user) => user === selectedUser?._id)

  return (
    <div
      className={`${DashboardChatsCss.chat_outside}
      ${selected ? DashboardChatsCss.selected : null}
    `}
    >
      <div className={DashboardChatsCss.chat_mini_out}>
        <div className={DashboardChatsCss.chat} onClick={() => openChat()}>
          <div className={DashboardChatsCss.chat_img}>
            <img src={user?.imgUrl} />
          </div>
          <div className={DashboardChatsCss.chat_message}>
            <h6>{user?.displayName}</h6>
            <p>{channal?.lastMessage}</p>
          </div>
        </div>
        <div className={DashboardChatsCss.chat}>
          {!selected &&
            channal.unreadCount[currentUser._id] &&
            channal.unreadCount[currentUser._id] !== 0 && (
              <b>{channal.unreadCount[currentUser._id]}</b>
            )}
          <i
            className="fa fa-trash"
            onClick={() => deleteChannal()}
            aria-hidden="true"
          >
            Delete
          </i>
        </div>
      </div>
      <span>{moment(channal.updatedAt).format('D MMMM, hh:mm A')}</span>
    </div>
  )
}
const ChatBox = ({
  selectedUser,
  currentUser,
  messages,
  channalId,
  chatBoxRef,
}) => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (message) {
      socket.emit(
        'sendMessage',
        {
          body: message,
          senderId: currentUser._id,
          receiverId: selectedUser._id,
        },
        () => {
          setMessage('')
        }
      )
    }
  }
  return (
    <div className={DashboardChatsCss.chatbox}>
      <div className={DashboardChatsCss.chat_topBar}>
        <div className={DashboardChatsCss.chat_img}>
          <img src={selectedUser.imgUrl} />
        </div>
        <div className={DashboardChatsCss.chat_title}>
          {selectedUser.displayName}
        </div>
      </div>
      <div className={DashboardChatsCss.inside_inbox_container}>
        <div className={DashboardChatsCss.scrollable} ref={chatBoxRef}>
          <p className={DashboardChatsCss.date}>Today</p>
          <ul>
            <li>
              {messages.map((msg) => (
                <ChatBubble
                  side={msg.senderId === currentUser._id ? 'own' : null}
                  message={msg}
                  currentUser={currentUser}
                  selectedUser={selectedUser}
                />
              ))}
            </li>
          </ul>
        </div>
        <form>
          <textarea
            placeholder="Write a message here..."
            cols={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="button" onClick={() => sendMessage()}>
            {' '}
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
const ChatBubble = ({ side, message, currentUser, selectedUser }) => {
  return (
    <div
      className={`${DashboardChatsCss.chat} ${
        side === 'own' ? DashboardChatsCss.own_chat : ''
      }`}
    >
      <div className={DashboardChatsCss.chat_img}>
        <img src={side === 'own' ? currentUser.imgUrl : selectedUser.imgUrl} />
      </div>
      <div className={DashboardChatsCss.chat_message}>
        <div>
          <h6>
            {side === 'own'
              ? currentUser.displayName.split(' ')[0]
              : selectedUser.displayName.split(' ')[0]}
          </h6>
        </div>
        <p>{message.body}</p>
        <div className={DashboardChatsCss.messageInfo}>
          {side === 'own' && <i className={`fa-solid fa-check-double`}></i>}
          <span>{moment(message.updatedAt).format('D MMMM, hh:mm A')}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(DashboardChats)
