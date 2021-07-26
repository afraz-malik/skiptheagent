import React from 'react'

// Components
import Header from '../../components/Header/Header'
import ListingBox from '../../components/ListingBox/ListingBox'
import RecentAdsBoxModel from '../../components/RecentAdsBoxModel/RecentAdsBoxModel'
import Banner from '../../components/Banner/banner'
import Footer from '../../components/Footer/Footer'

class Listing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListingBox rows={10} />
        <RecentAdsBoxModel />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default Listing
