import React from 'react';
import Header from '../../components/Header/Header.js'
import DetailsSection from '../../components/DetailsSectoin/DetailsSection.js'
import Compare from '../../components/Compare/Compare.js'
import RecenAdsBoxModel from '../../components/RecentAdsBoxModel/RecentAdsBoxModel'
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'

const Details =()=>{
  return(
    <div>
      <Header/>
      <DetailsSection/>
      <Compare/>
      <RecenAdsBoxModel/>
      <Banner/>
      <Footer/>
      
    </div>
  )
}
export default Details;
