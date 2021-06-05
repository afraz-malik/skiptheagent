import React from 'react';
import Header from '../../components/Header/Header.js'
import AdsBoxModel from '../../components/adsBoxModel/adsBoxModel.js'
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'
import ListingBox from '../../components/ListingBox/ListingBox.js'

class Listing extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <ListingBox/>
        <AdsBoxModel/>
        <Banner/>
        <Footer/>
       
      </div>
    )
  }
}


export default Listing;
