import React from 'react'

// Components
import Header from '../../components/Header/Header'
import SignUpBox from '../../components/SignUpBox/SignUpBox'

class SignUp extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <div>
        <Header />
        <SignUpBox />
      </div>
    )
  }
}

export default SignUp
