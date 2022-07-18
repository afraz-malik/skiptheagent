import React, { useState } from 'react'
import SearchByModelCss from './SearchByModel.module.scss'
//Router
import { Link, useHistory } from 'react-router-dom'
//Redux
// Components
import Button from '../button/button'

const SearchCard = ({ changeImage, model }) => {
  const history = useHistory()
  const [hidden, setHidden] = useState('true')
  const toggleHidden = (val, check) => {
    setHidden(!hidden)
    changeImage(val, check)
  }
  return (
    <div
      className={SearchByModelCss['search_card']}
      onMouseEnter={() => toggleHidden(model.image, true)}
      onMouseLeave={() => toggleHidden('', false)}
    >
      <div className={SearchByModelCss['card_title']}>
        <h2>{model.name}</h2>
      </div>
      <div className={SearchByModelCss['card_price_search']}>
        <div className={SearchByModelCss['card_price']}>
          <p>Price Range {model.range}</p>
        </div>
        <div
          className={SearchByModelCss['card_search']}
          style={hidden ? { display: 'none' } : { display: 'flex' }}
        >
          {/* <Link to={`/listing`}> */}
          <Button
            onClick={() => {
              history.push({
                pathname: '/listing',
                filters: {
                  make: model.name,
                },
              })
            }}
          >
            SEARCH
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default SearchCard
