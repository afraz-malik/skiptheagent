import React from 'react';
import Header from '../../components/Header/Header.js'
import ForgetPasswordBox from '../../components/ForgetPasswordBox/ForgetPasswordBox.js'

class ForgetPassword extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <ForgetPasswordBox/>
      </div>
    )
  }
}


export default ForgetPassword;
