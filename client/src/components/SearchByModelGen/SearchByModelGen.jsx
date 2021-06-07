import React from 'react'
import SearchByModelGenCss from './SearchByModelGen.module.css'
import SearchCard from './SearchCard'

const SearchByModelGen = () => {
 
    return (
        <div className={SearchByModelGenCss["searchcar"]}>
            <div className={SearchByModelGenCss["uparrow"]}>
                <a href="#next"><img alt='' src="images\rightarrow.png" /></a>
            </div>
            <div className={SearchByModelGenCss["search_card_col"]}>
            {
                [...Array(5)].map((i, j)=>
                    <SearchCard key={j}/>
                )
            }
             </div>
            <div className={SearchByModelGenCss["downarrow"]}>
                <img alt='' src="images\leftarrow.png" />
            </div>
        </div>

    )
}
export default(SearchByModelGen)