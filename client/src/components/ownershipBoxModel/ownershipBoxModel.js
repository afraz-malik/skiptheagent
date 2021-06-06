import React from 'react';
import OwnerShopBoxModelCss from './ownershipBoxModel.module.css'

const OwnerShipBoxModel = () =>{
	return(
        <div className={OwnerShopBoxModelCss.boxmodel}>
          <div className={OwnerShopBoxModelCss.boxmodel_topbar}>
            <div className={OwnerShopBoxModelCss.boxmodel_title}>
              <p>CHANGE OWNERSHIP</p>
            </div>
            <div className={OwnerShopBoxModelCss.extra} />
            <div className={OwnerShopBoxModelCss.extra}/>
          </div>
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
                <a href="#l">PROCEED</a>	
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
        </div> 
      
	)
}

export default OwnerShipBoxModel;