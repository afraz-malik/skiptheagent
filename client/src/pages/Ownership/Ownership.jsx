import React from 'react'

// Components
import Header from '../../components/Header/Header'
import OwnershipBoxModel from '../../components/ownershipBoxModel/ownershipBoxModel'
import RulesBox from '../../components/RulesBox/RulesBox'
import Ownershipform from '../../components/Ownershipform/Ownershipform'
import Footer from '../../components/Footer/Footer'

class Details extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <OwnershipBoxModel />
        <RulesBox />
        <Ownershipform />
        <Footer />
      </div>
    )
  }
}
export default Details
