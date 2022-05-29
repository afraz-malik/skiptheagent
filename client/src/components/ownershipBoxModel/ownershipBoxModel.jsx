import React, { useState } from 'react'
import OwnerShopBoxModelCss from './ownershipBoxModel.module.scss'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { statesJson } from '../../services/cities.js'

const OwnerShipBoxModel = ({ proceed }) => {
  const [state, setState] = useState({
    city1: '',
    city2: '',
  })

  return (
    <div className={OwnerShopBoxModelCss.boxmodel}>
      <BoxModel title={'CHANGE OWNERSHIP'}>
        <div className={OwnerShopBoxModelCss.boxmodel_body}>
          <div className={OwnerShopBoxModelCss.left}>
            <p>FROM CURRENT MENTIONED CITY</p>
            <div className={OwnerShopBoxModelCss.select}>
              <select
                name="city1"
                id="city"
                value={state.city1}
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              >
                <option vlaue="">Select City</option>
                {statesJson.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={OwnerShopBoxModelCss.proceed}>
            <Button
              onClick={() => {
                if (state.city1 && state.city2) {
                  proceed(state.city1, state.city2)
                }
              }}
            >
              PROCEED
            </Button>
          </div>
          <div className={OwnerShopBoxModelCss.right}>
            <p>FROM CURRENT MENTIONED CITY</p>
            <div className={OwnerShopBoxModelCss.select}>
              <select
                name="city2"
                id="city"
                value={state.city2}
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              >
                <option>Select City</option>

                {statesJson.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </BoxModel>
    </div>
  )
}

export default OwnerShipBoxModel
