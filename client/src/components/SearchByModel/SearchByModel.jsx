import React, { useState } from 'react'
import SearchByModelCss from './SearchByModel.module.scss'
// Components
import BoxModel from '../boxModel/boxModel'
import SearchCard from './SearchCard'
let models = [
  {
    name: 'Coupe',
    range: '150k - 300k',
    image: '1.png',
  },
  {
    name: 'Fiat',
    range: '50k - 320k',
    image: '2.png',
  },
  {
    name: 'Elentra',
    range: '400k - 700k',
    image: '3.png',
  },
  {
    name: 'Lamborghini',
    range: '250k - 300k',
    image: '4.png',
  },
  {
    name: 'Tiger',
    range: '60k - 400k',
    image: '5.png',
  },
  {
    name: 'Jaguar',
    range: '150k - 300k',
    image: '3.png',
  },
]
const SearchByModel = () => {
  const [src, setsrc] = useState('vector_car.png')
  const scrollUp = () => {
    const box = document.getElementsByClassName('modelScroll')[0]
    box.scrollTop = 0
  }
  const scrollDown = () => {
    const box = document.getElementsByClassName('modelScroll')[0]
    box.scrollDown += 500
  }
  const changeImage = (val, check) => {
    if (check) {
      setsrc(val)
    } else {
      setsrc('vector_car.png')
    }
  }
  return (
    <div className={SearchByModelCss.outside_searchcar_boxmodel}>
      <div className={SearchByModelCss.boxmodel}>
        <BoxModel title={'SEARCH BY CAR MODEL'}>
          <div className={SearchByModelCss.boxmodel_body}>
            <div className={SearchByModelCss.searchcar}>
              <div className={SearchByModelCss.uparrow}>
                <div onClick={() => scrollUp()}>
                  <img alt="" src="rightarrow.png" />
                </div>
              </div>
              <div
                className={`${SearchByModelCss.search_card_col} modelScroll`}
              >
                {models.map((model, j) => (
                  <SearchCard key={j} model={model} changeImage={changeImage} />
                ))}
              </div>
              <div className={SearchByModelCss.downarrow}>
                <div onClick={() => scrollDown()}>
                  <img alt="" src="leftarrow.png" />
                </div>
              </div>
            </div>
            <div className={SearchByModelCss.imgresult}>
              <img alt="" src={'images/' + src} />
            </div>
          </div>
        </BoxModel>
      </div>
    </div>
  )
}

export default SearchByModel
