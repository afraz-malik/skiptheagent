import React from 'react';
import SearchByModelCss from './SearchByModel.module.css'
import BoxModel from '../boxModel/boxModel'
import SearchByModelGen from '../SearchByModelGen/SearchByModelGen'
const SearchByModel = () =>{
	return(
        <div className={SearchByModelCss.outside_searchcar_boxmodel}>
            <div className={SearchByModelCss.boxmodel}>
            <BoxModel title={"SEARCH BY CAR MODEL"}>
            {/* <div className={SearchByModelCss.boxmodel_topbar}>
                <div className={SearchByModelCss.boxmodel_title}>
                <p>SEARCH BY CAR MODEL</p>
                </div>
                <div className={SearchByModelCss.extra} />
                <div className={SearchByModelCss.extra} />
            </div> */}
            <div className={SearchByModelCss.boxmodel_body}>
                <SearchByModelGen/>
                <div className={SearchByModelCss.imgresult}>
                    <img alt='' src="images\vector_car.png" />
                </div>
            </div>
            </BoxModel>
            </div>
        </div>
        
    )
}

export default SearchByModel;