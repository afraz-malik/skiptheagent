import React from 'react';
import ListingCardsCss from './listing-cards.module.css';

import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'
import Button from '../button/button';

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})


const ListingCards = ({url}) => {
    return (
        <div className={ListingCardsCss["listingcards"]}>
            <div className={ListingCardsCss["leftcard"]}>
                <Link to={`${url}details`}><img alt='' src="images\listingcar.jpg" /></Link>
            </div>
            <div className={ListingCardsCss["rightcard"]}>
                <div className={ListingCardsCss["cardtop"]}>
                    <div className={ListingCardsCss["cardname"]}>
                        <Link to={`${url}details`}><p>2019 Fiat 124 Spider</p></Link>
                    </div>
                    <div className={ListingCardsCss["cardprice"]}>
                        <p>$22,547</p>
                    </div>
                </div>
                <div className={ListingCardsCss["carddetails"]}>
                    <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit auctor aliqut.</p>
                </div>
                <div className={ListingCardsCss["cardpoints"]}>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\placeholder.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>Paris</p>
                        </div>
                    </div>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\calendar.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>2019</p>
                        </div>
                    </div>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\meter.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>3,200 KM</p>
                        </div>
                    </div>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\fuel.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>Hybrid</p>
                        </div>
                    </div>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\lightning.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>2000CC</p>
                        </div>
                    </div>
                    <div className={ListingCardsCss["cardpickups"]}>
                        <div className={ListingCardsCss["cardpickup1"]}>
                            <img alt='' src="images\transmission.png" />
                        </div>
                        <div className={ListingCardsCss["cardpickup2"]}>
                            <p>Automatic</p>
                        </div>
                    </div>
                </div>
                <div className={ListingCardsCss["cardbottom"]}>
                    <div className={ListingCardsCss["lastupdate"]}>
                        <p>Last updated: 24 min ago</p>
                    </div>
                    <div className={ListingCardsCss["likenumber"]}>
                        <div className={ListingCardsCss["likeimage"]}>
                            <img alt='' className="likeimg" src="images\like.png" />
                        </div>
                        <div className={ListingCardsCss["showbutton"]}>
                            {/* <button>Show Phone Number</button> */}
                            <Button>Show Phone Number</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(ListingCards)