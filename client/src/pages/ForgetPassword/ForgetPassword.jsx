import React from 'react'

// Components
import Header from '../../components/Header/Header'
import ForgetPasswordBox from '../../components/ForgetPasswordBox/ForgetPasswordBox'

class ForgetPassword extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Header />
        <ForgetPasswordBox />
      </div>
    )
  }
}

export default ForgetPassword
