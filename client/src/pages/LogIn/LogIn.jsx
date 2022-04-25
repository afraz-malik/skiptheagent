import React, { useEffect } from 'react'

// Components

import Header from '../../components/Header/Header'
import LogInBox from '../../components/LogInBox/LogInBox'

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <LogInBox />
    </div>
  )
}

export default Login
