import React from 'react';
import './BrandsBoxModel.css'

const BrandsBoxModel = () =>{
	return(
    <div className="boxmodel brands_boxmodel">
        <div className="boxmodel_topbar">
          <div className="boxmodel_title">
            <p>POPULAR BRANDS</p>
          </div>
          <div className="extra" />
          <div className="extra" />
          <div className="boxmodel_nav">
            <a href='#dummy'><img alt='' src="images/leftarrow.png" /></a>
            <a href='#dummy'><img alt='' src="images/rightarrow.png" /></a>
          </div>
        </div>
        <div className="boxmodel_body">
          <div className="brandslogo">
            <img alt='' src="images/brands.png" />
          </div>
        </div>
    </div>
    )
}

export default BrandsBoxModel;