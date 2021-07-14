import React from 'react'
import OwnerShopBoxModelCss from './ownershipBoxModel.module.scss'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'

const OwnerShipBoxModel = () => {
  return (
    <div className={OwnerShopBoxModelCss.boxmodel}>
      <BoxModel title={'CHANGE OWNERSHIP'}>
        <div className={OwnerShopBoxModelCss.boxmodel_body}>
          <div className={OwnerShopBoxModelCss.left}>
            <p>FROM CURRENT MENTIONED CITY</p>
            <div className={OwnerShopBoxModelCss.select}>
              <select name="cars" id="city">
                <option value="volvo">City 1</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className={OwnerShopBoxModelCss.proceed}>
            <Button>PROCEED</Button>
          </div>
          <div className={OwnerShopBoxModelCss.right}>
            <p>FROM CURRENT MENTIONED CITY</p>
            <div className={OwnerShopBoxModelCss.select}>
              <select name="cars" id="city">
                <option value="volvo">City 2</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
      </BoxModel>
    </div>
  )
}

export default OwnerShipBoxModel
