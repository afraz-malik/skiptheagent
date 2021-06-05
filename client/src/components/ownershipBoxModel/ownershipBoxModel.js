import React from 'react';
import './ownershipBoxModel.css'

const ownershipBoxModel = () =>{
	return(
        <div className="boxmodel">
          <div className="boxmodel_topbar">
            <div className="boxmodel_title">
              <p>CHANGE OWNERSHIP</p>
            </div>
            <div className="extra" />
            <div className="extra" />
          </div>
          <div className='boxmodel_body'> 
            <div className='left'>
              <p>FROM CURRENT MENTIONED CITY</p>
              <div className="select">
                <select name="cars" id="city">
                  <option value="volvo">City 1</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="proceed">
                <a href="#l">PROCEED</a>	
            </div>
            <div className='right'>
              <p>FROM CURRENT MENTIONED CITY</p>
              <div className='select'>
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

export default ownershipBoxModel;