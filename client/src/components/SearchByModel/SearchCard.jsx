import React ,{useState}from 'react'
import SearchByModelCss from './SearchByModel.module.css'

import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'


const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})

const SearchCard = ({url}) => {
    const [hidden, setHidden] = useState('true');
    const toggleHidden=()=>{
        setHidden(!hidden);
    }
    return(
        <div className={SearchByModelCss["search_card"]} onMouseEnter={()=>toggleHidden()} onMouseLeave={()=>toggleHidden()}>
        <div className={SearchByModelCss["card_title"]}>
            <h2>Coupe</h2>
        </div>
        <div className={SearchByModelCss["card_price_search"]}>
            <div className={SearchByModelCss["card_price"]}>
                <p>Price Range 150k - 200k</p>
            </div>
            <div className={SearchByModelCss["card_search"]} style={hidden? {display: 'none'}: {display: 'flex'}} >
                <Link to={`${url}listing`}>SEARCH</Link> 
            </div>
        </div>
    </div>

    )
}

export default  connect(mapStateToProps)(SearchCard);