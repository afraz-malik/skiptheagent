import React, { useEffect, useState } from 'react'
import BoxModelCss from './boxModel.module.css'

const BoxModel = (props) => {
  const [filters, setfilters] = useState(props.filters?.sortBy)
  useEffect(() => {
    if (props.filters?.sortBy === '') {
      setfilters('recent')
    } else {
      setfilters(props.filters?.sortBy)
    }
  }, [props.filters])

  return (
    <div
      className={BoxModelCss.boxmodel}
      style={{ border: props.borderOff ? '' : '1px solid lightgrey' }}
    >
      <div className={BoxModelCss.boxmodel_topbar}>
        <div className={BoxModelCss.boxmodel_title}>
          <p>{props.title}</p>
        </div>
        <div className={BoxModelCss.extra} />
        <div className={BoxModelCss.extra} />

        {props.sidebar === 'arrow' && (
          <div className={BoxModelCss.boxmodel_nav}>
            <div
              className={BoxModelCss.arrow}
              onClick={() => props.scrollRight()}
            >
              <img alt="" src="images\leftarrow.png" />
            </div>
            <div
              className={BoxModelCss.arrow}
              onClick={() => props.scrollLeft()}
            >
              <img alt="" src="images\rightarrow.png" />
            </div>
          </div>
        )}
        {props.sidebar === 'cancel' && (
          <div className={BoxModelCss.cancel}>
            <img
              alt=""
              src="images\cancel.png"
              onClick={() => props.closeBox()}
            />
          </div>
        )}
        {props.sidebar === 'alert' && (
          <div className={BoxModelCss.alert}>
            + <span onClick={() => props.onAlert()}>ADD ALERT</span>
          </div>
        )}

        {props.sortBox === true && (
          <div className={BoxModelCss.sortby}>
            <div className={BoxModelCss.sortby_text}>
              <p>SORT BY:</p>
            </div>
            <div className={BoxModelCss.sortby_box}>
              <select
                name="cars"
                id="city"
                value={filters}
                onChange={(e) => props.handleFilters('sortBy', e.target.value)}
              >
                <option value="recent">Updated Date: Recent first</option>
                <option value="popularity">Popularity</option>
                <option value="price-high">Price High</option>
                <option value="price-low">Price Low</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {props.children}
    </div>
  )
}

export default BoxModel
