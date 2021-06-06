import React from 'react';
import Header from '../../components/Header/Header.js'
import LogInBox from '../../components/LogInBox/LogInBox.js'


class Login extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <LogInBox/>
      </div>
    )
  }
}


export default Login;