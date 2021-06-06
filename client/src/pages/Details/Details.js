import React from 'react';
import Header from '../../components/Header/Header.js'
import DetailsSection from '../../components/DetailsSectoin/DetailsSection.js'
import Compare from '../../components/Compare/Compare.js'
import BoxModel from '../../components/adsBoxModel/adsBoxModel.js'
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'

class Details extends React.Component{
  
 constructor(){
  super();
  this.state={
    carfeatures: 'flex',
    carfeaturesbg: '#10846c',
    cardetails: 'none',
    cardetailsbg: 'grey'
  }
 }
  clicked=(value)=>{
    value === 'carfeatuers'
    ?
    this.setState({
      carfeatures: 'flex',
      carfeaturesbg: '#10846c',
      cardetails: 'none',
      cardetailsbg: 'grey'
    })
    :
    this.setState({
      carfeatures: 'none',
      carfeaturesbg: 'grey',
      cardetails: 'flex',
      cardetailsbg: '#10846c'
    })
  }
  render(){
    return(
      <div>
        <Header/>
        <DetailsSection 
          carfeatures={this.state.carfeatures} 
          carfeaturesbg={this.state.carfeaturesbg}
          cardetails={this.state.cardetails} 
          cardetailsbg={this.state.cardetailsbg}
          clicked={this.clicked}
        />
        <Compare/>
        <BoxModel/>
        <Banner/>
        <Footer/>
        
      </div>
    )
  }
}
export default Details;
