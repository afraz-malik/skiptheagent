import React from 'react'

// Components
import Header from '../../components/Header/Header'
import OwnershipBoxModel from '../../components/ownershipBoxModel/ownershipBoxModel'
import RulesBox from '../../components/RulesBox/RulesBox'
import Ownershipform from '../../components/Ownershipform/Ownershipform'
import Footer from '../../components/Footer/Footer'

class Details extends React.Component {
  constructor() {
    super()
    this.state = {
      city1: '',
      city2: '',
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  proceed = (city1, city2) => {
    this.setState({ city1, city2 })
  }
  render() {
    return (
      <div>
        <Header />
        <OwnershipBoxModel proceed={this.proceed} />
        <RulesBox city1={this.state.city1} city2={this.state.city2} />
        <Ownershipform />
        <Footer />
      </div>
    )
  }
}
export default Details
