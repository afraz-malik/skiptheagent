import React from 'react';
import Header from '../../components/Header/Header.js'
import OwnershipBoxModel from '../../components/ownershipBoxModel/ownershipBoxModel.js'
import RulesBox from '../../components/RulesBox/RulesBox.jsx';
import Ownershipform from '../../components/Ownershipform/Ownershipform.jsx';
import Footer from '../../components/Footer/Footer.js'

class Details extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <OwnershipBoxModel/>
        <RulesBox/>
        <Ownershipform/>
        <Footer/>
        
      </div>
    )
  }
}
export default Details;
