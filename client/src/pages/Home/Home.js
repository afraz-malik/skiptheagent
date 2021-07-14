import React from 'react'

// Components
import HomeHeader from '../../components/HomeHeader/HomeHeader.js'
import BuySellCard from '../../components/BuySellCard/BuySellCard.js'
import SearchByModel from '../../components/SearchByModel/SearchByModel.js'
import AdsBoxModel from '../../components/AdsBoxModel/AdsBoxModel'
import NewsBoxModel from '../../components/NewsBoxModel/NewsBoxModel.js'
import BrandsBoxModel from '../../components/BrandsBoxModel/BrandsBoxModel.js'
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <BuySellCard />
        <SearchByModel />
        <AdsBoxModel />
        <NewsBoxModel />
        <BrandsBoxModel />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default Home
