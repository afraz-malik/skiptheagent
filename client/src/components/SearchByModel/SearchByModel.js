import React from 'react'
import SearchByModelCss from './SearchByModel.module.css'
import BoxModel from '../boxModel/boxModel'
import SearchCard from './SearchCard'

const SearchByModel = () => {
  const scrollUp = () => {
    const box = document.getElementsByClassName('modelScroll')[0]
    box.scrollTop = 0
  }
  const scrollDown = () => {
    const box = document.getElementsByClassName('modelScroll')[0]
    box.scrollDown += 500
  }
  return (
    <div className={SearchByModelCss.outside_searchcar_boxmodel}>
      <div className={SearchByModelCss.boxmodel}>
        <BoxModel title={'SEARCH BY CAR MODEL'}>
          <div className={SearchByModelCss.boxmodel_body}>
            <div className={SearchByModelCss.searchcar}>
              <div className={SearchByModelCss.uparrow}>
                <div onClick={() => scrollUp()}>
                  <img alt="" src="\images\rightarrow.png" />
                </div>
              </div>
              <div
                className={`${SearchByModelCss.search_card_col} modelScroll`}
              >
                {[...Array(5)].map((i, j) => (
                  <SearchCard key={j} />
                ))}
              </div>
              <div className={SearchByModelCss.downarrow}>
                <div onClick={() => scrollDown()}>
                  <img alt="" src="\images\leftarrow.png" />
                </div>
              </div>
            </div>
            <div className={SearchByModelCss.imgresult}>
              <img alt="" src="\images\vector_car.png" />
            </div>
          </div>
        </BoxModel>
      </div>
    </div>
  )
}

export default SearchByModel
