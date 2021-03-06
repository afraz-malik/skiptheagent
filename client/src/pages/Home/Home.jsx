import React from 'react'

// Components
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import BuySellCard from '../../components/BuySellCard/BuySellCard'
import SearchByModel from '../../components/SearchByModel/SearchByModel'
import AdsBoxModel from '../../components/AdsBoxModel1/AdsBoxModel1'
import NewsBoxModel from '../../components/NewsBoxModel/NewsBoxModel'
import BrandsBoxModel from '../../components/BrandsBoxModel/BrandsBoxModel'
import Banner from '../../components/Banner/banner'
import Footer from '../../components/Footer/Footer'

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <HomeHeader />
        <BuySellCard />
        <SearchByModel />
        <AdsBoxModel />
        {/* <NewsBoxModel /> */}
        <BrandsBoxModel />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default Home
