import React from 'react'

import Header from '../../components/Header/Header.js'
import RecentAdsBoxModel from '../../components/RecentAdsBoxModel/RecentAdsBoxModel'
import Banner from '../../components/Banner/banner.js'
import Footer from '../../components/Footer/Footer.js'
import ListingBox from '../../components/ListingBox/ListingBox.js'

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
