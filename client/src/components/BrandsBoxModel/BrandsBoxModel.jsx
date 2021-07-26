import React from 'react'
import BrandsBoxModelCss from './BrandsBoxModel.module.scss'

// Components
import BoxModel from '../boxModel/boxModel'

const BrandsBoxModel = () => {
  return (
    <div className={BrandsBoxModelCss.boxmodel}>
      <BoxModel title={'POPULAR BRANDS'} sidebar={'arrow'}>
        <div className={BrandsBoxModelCss.boxmodel_body}>
          <div className={BrandsBoxModelCss.brandslogo}>
            <img alt="" src="images\brands.png" />
          </div>
        </div>
      </BoxModel>
    </div>
  )
}

export default BrandsBoxModel
