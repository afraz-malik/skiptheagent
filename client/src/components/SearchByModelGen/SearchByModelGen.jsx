import React from 'react'
import SearchByModelGenCss from './SearchByModelGen.module.css'
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})

const SearchByModelGen = ({url}) => {
    return (
        <div className={SearchByModelGenCss["searchcar"]}>
            <div className={SearchByModelGenCss["uparrow"]}>
                <a href="#next"><img alt='' src="images\rightarrow.png" /></a>
            </div>
            <div className={SearchByModelGenCss["search_card_col"]}>
                <div className={SearchByModelGenCss["search_card"]}>
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Coupe</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]}>
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>SUV</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]} >
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Convertible</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]}>
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Sedan</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]}>
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Coupe</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]}>
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>SUV</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]} >
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Convertible</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
                <div className={SearchByModelGenCss["search_card"]} >
                    <div className={SearchByModelGenCss["card_title"]}>
                        <h2>Sedan</h2>
                    </div>
                    <div className={SearchByModelGenCss["card_price_search"]}>
                        <div className={SearchByModelGenCss["card_price"]}>
                            <p>Price Range 150k - 200k</p>
                        </div>
                        <div className={SearchByModelGenCss["card_search"]}>
                            <Link to={`${url}login`}>SEARCH</Link
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div className={SearchByModelGenCss["downarrow"]}>
                <img alt='' src="images\leftarrow.png" />
            </div>
        </div>

    )
}
export default connect(mapStateToProps)(SearchByModelGen)