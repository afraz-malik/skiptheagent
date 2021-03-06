import React from 'react'
import BuySellCardCss from './BuySellCard.module.scss'
// Router
import { Link } from 'react-router-dom'
// Components
import Button from '../button/button'

const BuySellCard = () => {
  return (
    <div className={BuySellCardCss.buysell}>
      <div className={BuySellCardCss.buycar}>
        <div className={BuySellCardCss.buycarimg}>
          <div className={BuySellCardCss.inside_buycar}>
            <div className={BuySellCardCss.buycar_title}>
              <h2>DO YOU WANT TO</h2>
              <h1>BUY A CAR?</h1>
            </div>
            <div className={BuySellCardCss.buycar_desp}>
              <p>
                This is the Photoshop's version of Lorem Ipsum. Proin gravida
                nibh vel velit auctor aliqut. Aenea solicitun, lorem qus
                bibendum autosthe Photoshop's version..
              </p>
            </div>
            <div className={BuySellCardCss.learnmore}>
              <Link to={`/listing`}>
                <Button> LEARN MORE</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={BuySellCardCss.sellcar}>
        <div className={BuySellCardCss.sellcarimg}>
          <div className={BuySellCardCss.inside_sellcar}>
            <div className={BuySellCardCss.sellcar_title}>
              <h2>DO YOU WANT TO</h2>
              <h1>SELL YOUR CAR?</h1>
            </div>
            <div className={BuySellCardCss.sellcar_desp}>
              <p>
                This is the Photoshop's version of Lorem Ipsum. Proin gravida
                nibh vel velit auctor aliqut. Aenea solicitun, lorem qus
                bibendum autosthe Photoshop's version..
              </p>
            </div>
            <div className={BuySellCardCss.learnmore}>
              <Link to={`/login`}>
                <Button> POST AD</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuySellCard
