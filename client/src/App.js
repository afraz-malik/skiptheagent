import React, { lazy, Suspense } from 'react'
//React Router
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'

//Redux
import { isUserAuthenticated } from './redux/user/user.actions'
import { connect } from 'react-redux'

//Components
import { Spinner } from './components/spinner/spinner'

//Pages
// import Home from './pages/Home/Home'
// import Listing from './pages/Listing/Listing'
// import Login from './pages/LogIn/LogIn';
// import Register from './pages/SignUp/SignUp'
// import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
// import OwnerShip from './pages/Ownership/Ownership'
// import Details from './pages/Details/Details'

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

class App extends React.Component {
  componentDidMount() {
    // "homepage": "https://afraz-malik.github.io/skiptheagent",
    if (process.env.PUBLIC_URL === '/skiptheagent') {
      console.log('yes')
    }
    this.props.isUserAuthenticated()
  }
  render() {
    const { user } = this.props
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
