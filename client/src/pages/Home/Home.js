import React from 'react';
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'
import HomeHeader from '../../components/HomeHeader/HomeHeader.js'
import BuySellCard from '../../components/BuySellCard/BuySellCard.js'
import SearchByModel from '../../components/SearchByModel/SearchByModel.js'
import NewsBoxModel from '../../components/NewsBoxModel/NewsBoxModel.js'
import BrandsBoxModel from '../../components/BrandsBoxModel/BrandsBoxModel.js'
import LatestAdsModel from '../../components/LatestAdsModel/LatestAdsModel.js'
class Home extends React.Component{
  render(){
    return(
      <div>
        <HomeHeader/>
        <BuySellCard/>
        <SearchByModel/>
        <LatestAdsModel/>
        <NewsBoxModel/>
        <BrandsBoxModel/>
        <Banner/>
        <Footer/>       
      </div>
    )
  }
}


export default Home;
