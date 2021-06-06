import React from 'react';
import BuySellCardCss from './BuySellCard.module.css'

const BuySellCard = () =>{
	return(
    <div className={BuySellCardCss.buysell}>
        <div className={BuySellCardCss.buycar}>
          <div className={BuySellCardCss.buycarimg}>
            <div className={BuySellCardCss.inside_buycar}>
              <div className={BuySellCardCss.buycar_title}>
                <h2>DO YOU WANT TO</h2>
                <h1>BUY A CAR?</h1>						 
              </div>
              <div className={BuySellCardCss.buycar_desp}>
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autosthe Photoshop's version..</p>					
              </div>
              <div className={BuySellCardCss.learnmore}>
                <a href="#l">LEARN MORE</a>	
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
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autosthe Photoshop's version..</p>					
              </div>
              <div className={BuySellCardCss.learnmore}>
                <a href="#dum">POST AD</a>	
              </div>
            </div>
          </div>
        </div>
    </div>
	)
}

export default BuySellCard;