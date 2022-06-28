import React, { lazy, Suspense, useEffect, useRef } from 'react'
//React Router
import { Switch, Route, Redirect, Router } from 'react-router-dom'

//Redux
import { isUserAuthenticated } from './redux/user/user.actions'
import { connect } from 'react-redux'

import { ToastContainer } from 'react-toastify'
//Components
import { Spinner } from './components/spinner/spinner'
import 'react-toastify/dist/ReactToastify.css'
import createBrowserHistory from 'history/createBrowserHistory'

//Pages
// import Home from './pages/Home/Home'
// import Listing from './pages/Listing/Listing'
// import Login from './pages/LogIn/LogIn';
// import Register from './pages/SignUp/SignUp'
// import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
// import OwnerShip from './pages/Ownership/Ownership'
// import Details from './pages/Details/Details'

import { injectStyle } from 'react-toastify/dist/inject-style'
import { socket } from './services/config.js'
//Pages with React Lazy
const Home = lazy(() => import('./pages/Home/Home'))
const Listing = lazy(() => import('./pages/Listing/Listing'))
const Login = lazy(() => import('./pages/LogIn/LogIn'))
const Register = lazy(() => import('./pages/SignUp/SignUp'))
const ForgetPassword = lazy(() =>
  import('./pages/ForgetPassword/ForgetPassword')
)
const OwnerShip = lazy(() => import('./pages/Ownership/Ownership'))
const Details = lazy(() => import('./pages/Details/Details'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

const mapStateToProps = (state) => ({
  user: state.setUser.user,
})
const mapDispatchToProps = (dispatch) => ({
  isUserAuthenticated: () => dispatch(isUserAuthenticated()),
})
export const history = createBrowserHistory()

const App = (props) => {
  let userRef = useRef(props.user)
  function notifyMe(obj) {
    if (Notification.permission !== 'granted') Notification.requestPermission()
    else {
      var notification = new Notification(
        `You have a new message from ${obj.name}`,
        {
          icon: 'https://statusnowsolutions.com/wp-content/uploads/2021/02/cropped-StatusNow.png',
          body: obj.body,
        }
      )
      notification.onclick = function () {
        window.open('/dashboard/chats')
        // history.push({
        //   pathname: '/dashboard/chats',
        //   // search: '?query=abc',
        //   user_id: obj.id,
        // })
      }
    }
  }
  useEffect(() => {
    if (props.user) {
      socket.emit('join', user._id, (res) => {
        console.log(user._id)
        socket.emit('getUnreadCount', user._id)
      })
    }
    socket.on('connect', (e) => console.log('Connected event: ', socket.id))
    socket.on('disconnect', (reason) => console.log(reason))
    socket.on('message', (message) => {
      console.log(userRef.current)
      // console.log(props.user._id)
      // if (message.senderId === userRef.current._id) return
      notifyMe({
        name: message.senderObj[0].displayName,
        body: message.body,
        id: message.senderId,
      })
    })
    return () => {
      // socket.emit('destroy')
    }
  }, [props.user])
  useEffect(() => {
    if (Notification.permission !== 'granted') Notification.requestPermission()
    props.isUserAuthenticated()
  }, [])

  // "homepage": "https://afraz-malik.github.io/skiptheagent",
  // if (process.env.PUBLIC_URL === '/skiptheagent') {
  //   fetch('https://skiptheagent.herokuapp.com/').then((res) => {
  //     return res.status === 200
  //       ? (window.location.href = 'https://skiptheagent.herokuapp.com/')
  //       : null
  //   })
  // }

  const { user } = props
  return (
    <>
      <Router history={history}>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/listing`} component={Listing} />
            <Route
              exact
              path={`/login`}
              render={() => (user ? <Redirect to={`/dashboard`} /> : <Login />)}
            />
            <Route
              exact
              path={`/register`}
              render={() =>
                user ? <Redirect to={`/dashboard`} /> : <Register />
              }
            />
            <Route exact path={`/forget`} component={ForgetPassword} />
            <Route exact path={`/ownership`} component={OwnerShip} />
            <Route exact path={`/details`} component={Details} />
            <Route
              path={`/dashboard`}
              render={() =>
                !user ? <Redirect to={`/login`} /> : <Dashboard />
              }
            />
            <Route path="/" render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </Suspense>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        // hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
