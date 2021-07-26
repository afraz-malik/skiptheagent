import React, { useState } from 'react'
import SearchByModelCss from './SearchByModel.module.scss'
//Router
import { Link } from 'react-router-dom'
//Redux
// Components
import Button from '../button/button'

const SearchCard = () => {
  const [hidden, setHidden] = useState('true')
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  return (
    <div
      className={SearchByModelCss['search_card']}
      onMouseEnter={() => toggleHidden()}
      onMouseLeave={() => toggleHidden()}
    >
      <div className={SearchByModelCss['card_title']}>
        <h2>Coupe</h2>
      </div>
      <div className={SearchByModelCss['card_price_search']}>
        <div className={SearchByModelCss['card_price']}>
          <p>Price Range 150k - 200k</p>
        </div>
        <div
          className={SearchByModelCss['card_search']}
          style={hidden ? { display: 'none' } : { display: 'flex' }}
        >
          <Link to={`/listing`}>
            <Button>SEARCH</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
