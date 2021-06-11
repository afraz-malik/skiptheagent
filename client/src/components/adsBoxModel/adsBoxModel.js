import React from 'react';
import AdsBoxModelCss from './AdsBoxModel.module.css';
import BoxModel from '../boxModel/boxModel'
import AdsBoxModelGen from '../AdsBoxModelGen/AdsBoxModelGen'

const LatestAdsModel = ({view, view2}) => {
  const scrollLeft = () => {
    const box = document.getElementsByClassName('scroll')[0];
    
    console.log(box)
    box.scrollLeft += 500;
  }
  const scrollRight = () => {
    const box = document.getElementsByClassName('scroll')[0];
    console.log(box)
    box.scrollLeft -= 500;
  }
  let value = 1;
  let value2 = 10;
  if(view) value = 2;
  if(view2) value2 = 4;

  return (
    <div className={`${AdsBoxModelCss.boxmodel} `}>
    <BoxModel title = {"Recent Posted Ads"} sidebar={`${view2? null : "arrow"}`} scrollLeft={scrollLeft} scrollRight={scrollRight}>
      {
          [...Array(value)].map((i,j)=>
            <div className={AdsBoxModelCss.boxmodel_body} key={j}>
              <div className={`${AdsBoxModelCss.add_cards} scroll`} >
                {
                  [...Array(value2)].map((i,j) =>
                    <AdsBoxModelGen key={j} />
                  )
                }
              </div>
            </div>
          )
      }
      
    </BoxModel> 
    </div>
  )
}

export default LatestAdsModel;