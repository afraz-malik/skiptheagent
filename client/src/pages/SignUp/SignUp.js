import React from 'react'

// Components
import Header from '../../components/Header/Header.js'
import SignUpBox from '../../components/SignUpBox/SignUpBox.js'

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SignUpBox />
      </div>
    )
  }
}

export default SignUp