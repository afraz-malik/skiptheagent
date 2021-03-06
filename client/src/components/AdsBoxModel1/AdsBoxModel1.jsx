import React, { useEffect, useState } from 'react'
import AdsBoxModelCss from './AdsBoxModel.module.scss'

// Components
import BoxModel from '../boxModel/boxModel'
import AdsBoxModelGen from '../AdsBoxModelGen/AdsBoxModelGen'
// import { products as pd } from '../../services/products'
import { API, fetchBackend } from '../../services/config.js'

const AdsBoxModel = ({ view, view2 }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchBackend('GET', API.getRecentAds).then((res) => {
      setProducts(res)
    })
  }, [])

  const scrollLeft = () => {
    const box = document.getElementsByClassName('scroll')[0]
    box.scrollLeft += 500
  }
  const scrollRight = () => {
    const box = document.getElementsByClassName('scroll')[0]
    box.scrollLeft -= 500
  }

  // let value = 1
  // let value2 = 10
  // if (view) value = 2
  // if (view2) value2 = 4

  return (
    <div className={`${AdsBoxModelCss.boxmodel} `}>
      <BoxModel
        title={'Recent Posted Ads'}
        sidebar={`${view2 ? null : 'arrow'}`}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      >
        {/* {[...Array(value)].map((i, j) => ( */}
        <div className={AdsBoxModelCss.boxmodel_body}>
          <div className={`${AdsBoxModelCss.add_cards} scroll`}>
            {products.map((product, j) => (
              <AdsBoxModelGen key={j} product={product} />
            ))}
          </div>
        </div>
        {/* // ))} */}
      </BoxModel>
    </div>
  )
}

export default AdsBoxModel
