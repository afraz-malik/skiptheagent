import React from 'react';
import './BuySellCard.css'

const BuySellCard = () =>{
	return(
    <div className="buysell">
        <div className="buycar">
          <div className="buycarimg">
            <div className="inside_buycar">
              <div className="buycar_title">
                <h2>DO YOU WANT TO</h2>
                <h1>BUY A CAR?</h1>						 
              </div>
              <div className="buycar_desp">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autosthe Photoshop's version..</p>					
              </div>
              <div className="learnmore">
                <a href="#l">LEARN MORE</a>	
              </div>
            </div>
          </div>
        </div>
        <div className="sellcar">
          <div className="sellcarimg">
            <div className="inside_sellcar">
              <div className="sellcar_title">
                <h2>DO YOU WANT TO</h2>
                <h1>SELL YOUR CAR?</h1>						 
              </div>
              <div className="sellcar_desp">
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autosthe Photoshop's version..</p>					
              </div>
              <div className="learnmore">
                <a href="#dum">POST AD</a>	
              </div>
            </div>
          </div>
        </div>
    </div>
	)
}

export default BuySellCard;