import React from 'react'
import BrandsBoxModelCss from './BrandsBoxModel.module.scss'

// Components
import BoxModel from '../boxModel/boxModel'
import { Link } from 'react-router-dom'

const BrandsBoxModel = () => {
  return (
    <div className={BrandsBoxModelCss.boxmodel}>
      <BoxModel title={'POPULAR BRANDS'} sidebar={'arrow'}>
        <div className={BrandsBoxModelCss.boxmodel_body}>
          <Link to={'/listing'}>
            <div className={BrandsBoxModelCss.brandslogo}>
              <img alt="" src="images\brands.png" />
            </div>
          </Link>
        </div>
      </BoxModel>
    </div>
  )
}

export default BrandsBoxModel
