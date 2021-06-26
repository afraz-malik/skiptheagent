import React, {lazy, Suspense}from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {setUrl} from './redux/actions'
import {connect} from 'react-redux';  

import {Spinner} from './components/spinner/spinner'
//Pages
// import Home from './pages/Home/Home'
// import Listing from './pages/Listing/Listing'
// import Login from './pages/LogIn/LogIn';
// import Register from './pages/SignUp/SignUp'
// import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
// import OwnerShip from './pages/Ownership/Ownership'
// import Details from './pages/Details/Details'
//Pages with React Lazy
const Home = lazy(()=> import('./pages/Home/Home'));
const Listing = lazy(()=> import('./pages/Listing/Listing'));
const Login = lazy(()=> import('./pages/LogIn/LogIn'));
const Register = lazy(()=> import('./pages/SignUp/SignUp'));
const ForgetPassword = lazy(()=> import('./pages/ForgetPassword/ForgetPassword'));
const OwnerShip = lazy(()=> import('./pages/Ownership/Ownership'));
const Details = lazy(()=> import('./pages/Details/Details'));
const Dashboard = lazy(()=> import('./pages/Dashboard/Dashboard'));




const mapStateToProps=(state)=>({
    url: state.URLReducer.url
})
const mapDispatchToProps=(dispatch)=>({
    setUrl: (url) => dispatch(setUrl(url))
})


class App extends React.Component{
    componentDidMount(){
        // "homepage": "https://afraz-malik.github.io/skiptheagent-react",
        // const url = '/skiptheagent-react/' 
        const url ="/"; 
        this.props.setUrl(url);
    }
    render(){
        const {url} = this.props;      
        return(
            <Router>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path={`${url}`} component={Home}/>
                        <Route exact path={`${url}listing`} component={Listing}/>
                        <Route exact path={`${url}login`}component={Login}/>
                        <Route exact path={`${url}register`} component={Register}/>
                        <Route exact path={`${url}forget`} component={ForgetPassword}/>
                        <Route exact path={`${url}ownership`} component={OwnerShip}/>
                        <Route exact path={`${url}details`} component={Details}/>
                        <Route exact path={`${url}dashboard`} component={Dashboard}/>
                    </Switch>                    
                </Suspense>
            </Router>         
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);