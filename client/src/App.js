import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
  

//Pages
import Home from './pages/Home/Home'
import Listing from './pages/Listing/Listing'
import Login from './pages/LogIn/LogIn';
import Register from './pages/SignUp/SignUp'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import OwnerShip from './pages/Ownership/Ownership'
import Details from './pages/Details/Details'


class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/listing' component={Listing}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/forget' component={ForgetPassword}/>
                    <Route exact path='/ownership' component={OwnerShip}/>
                    <Route exact path='/details' component={Details}/>
                </Switch>                    
            </Router>
              
         
        )
    }
}

export default App;