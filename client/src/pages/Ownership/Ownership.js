import React from 'react';
import Header from '../../components/Header/Header.js'
import OwnershipBoxModel from '../../components/ownershipBoxModel/ownershipBoxModel.js'

import Footer from '../../components/Footer/Footer.js'

class Details extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <OwnershipBoxModel/>
        <Footer/>
        
      </div>
    )
  }
}
export default Details;
