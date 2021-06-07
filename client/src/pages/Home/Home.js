import React from 'react';
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'
import HomeHeader from '../../components/HomeHeader/HomeHeader.js'
import BuySellCard from '../../components/BuySellCard/BuySellCard.js'
import SearchByModel from '../../components/SearchByModel/SearchByModel.js'
import NewsBoxModel from '../../components/NewsBoxModel/NewsBoxModel.js'
import BrandsBoxModel from '../../components/BrandsBoxModel/BrandsBoxModel.js'
import AdsBoxModel from '../../components/AdsBoxModel/AdsBoxModel'

class Home extends React.Component{
  render(){
    return(
      <div>
        <HomeHeader/>
        <BuySellCard/>
        <SearchByModel/>
        <AdsBoxModel/>
        <NewsBoxModel/>
        <BrandsBoxModel/>
        <Banner/>
        <Footer/>       
      </div>
    )
  }
}


export default Home;
