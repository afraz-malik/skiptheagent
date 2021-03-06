import React, { useEffect } from 'react'

// Components
import Header from '../../components/Header/Header'
import DetailsSection from '../../components/DetailsSectoin/DetailsSection'
import Compare from '../../components/Compare/Compare'
import RecenAdsBoxModel from '../../components/RecentAdsBoxModel/RecentAdsBoxModel'
import Banner from '../../components/Banner/banner'
import Footer from '../../components/Footer/Footer'

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <DetailsSection />
      <Compare />
      <RecenAdsBoxModel />
      <Banner />
      <Footer />
    </div>
  )
}
export default Details
