import React from 'react';
import BrandsBoxModelCss from './BrandsBoxModel.module.css'
import BoxModel from '../boxModel/boxModel'

const BrandsBoxModel = () =>{
	return(
    <div className={BrandsBoxModelCss.boxmodel}>
    <BoxModel title={"POPULAR BRANDS"}> 
        {/* <div className={BrandsBoxModelCss.boxmodel_topbar}>
          <div className={BrandsBoxModelCss.boxmodel_title}>
            <p>POPULAR BRANDS</p>
          </div>
          <div className={BrandsBoxModelCss.extra} />
          <div className={BrandsBoxModelCss.extra} />
          <div className={BrandsBoxModelCss.boxmodel_nav}>
            <a href='#dummy'><img alt='' src="images/leftarrow.png" /></a>
            <a href='#dummy'><img alt='' src="images/rightarrow.png" /></a>
          </div>
        </div> */}
        <div className={BrandsBoxModelCss.boxmodel_body}>
          <div className={BrandsBoxModelCss.brandslogo}>
            <img alt='' src="images/brands.png" />
          </div>
        </div>
      </BoxModel>    
    </div>
    )
}

export default BrandsBoxModel;