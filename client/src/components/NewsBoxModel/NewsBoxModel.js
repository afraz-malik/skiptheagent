import React from 'react'
import NewsBoxModelCss from './NewsBoxModel.module.css'

import NewsBoxModelGen from '../NewsBoxModelGen/NewsBoxModelGen'
//Redux
import BoxModel from '../boxModel/boxModel'

const NewsBoxModel = ({ url }) => {
  const scrollLeft = () => {
    const box = document.getElementsByClassName('scroll2')[0]

    console.log(box)
    box.scrollLeft += 500
  }
  const scrollRight = () => {
    const box = document.getElementsByClassName('scroll2')[0]
    console.log(box)
    box.scrollLeft -= 500
  }
  return (
    <div className={NewsBoxModelCss.boxmodel}>
      <BoxModel
        title={'LATEST NEWS'}
        sidebar={'arrow'}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      >
        <div className={`${NewsBoxModelCss.boxmodel_body} scroll2`}>
          {[...Array(3)].map((i, j) => (
            <NewsBoxModelGen key={j} />
          ))}
        </div>
      </BoxModel>
    </div>
  )
}

export default NewsBoxModel
