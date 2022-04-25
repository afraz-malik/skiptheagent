import React, { useState } from 'react'
import ListingCardsCss from './listingcards.module.scss'

//Router
import { Link } from 'react-router-dom'
//Redux
// Components
import Button from '../button/button'

const ListingCards = ({ product, url, logged }) => {
  const [src, setSrc] = useState('images/like.png')
  const manageLike = () => {
    if (src === 'images/liked.png') {
      setSrc('images/like.png')
    } else {
      setSrc('images/liked.png')
    }
  }
  return (
    <div className={ListingCardsCss['listingcards']}>
      <div className={ListingCardsCss['leftcard']}>
        <Link to={`/details?productId=${product._id}`}>
          <img alt="" src="images\listingcar.jpg" />
        </Link>
      </div>
      <div className={ListingCardsCss['rightcard']}>
        <div className={ListingCardsCss['cardtop']}>
          <div className={ListingCardsCss['cardname']}>
            <Link to={`/details?productId=${product._id}`}>
              <p>{product.car_info}</p>
            </Link>
          </div>
          <div className={ListingCardsCss['cardprice']}>
            <p>${product.selling.price}</p>
          </div>
        </div>
        <div className={ListingCardsCss['carddetails']}>
          <p>{product.description}</p>
        </div>
        <div className={ListingCardsCss['cardpoints']}>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\placeholder.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.city}</p>
            </div>
          </div>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\calendar.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.model}</p>
            </div>
          </div>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\meter.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.mileage_km} KM</p>
            </div>
          </div>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\fuel.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.details.engine_type}</p>
            </div>
          </div>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\lightning.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.details.engine_capacity} CC</p>
            </div>
          </div>
          <div className={ListingCardsCss['cardpickups']}>
            <div className={ListingCardsCss['cardpickup1']}>
              <img alt="" src="images\transmission.png" />
            </div>
            <div className={ListingCardsCss['cardpickup2']}>
              <p>{product.details.transmission}</p>
            </div>
          </div>
        </div>
        <div className={ListingCardsCss['cardbottom']}>
          <div className={ListingCardsCss['lastupdate']}>
            <p>Last updated:{product.last_updated} min ago</p>
          </div>
          {logged ? (
            <div className={ListingCardsCss['deleteEdit']}>
              <Button>DELETE</Button>
              <Button edit={true}>EDIT</Button>
            </div>
          ) : (
            <div className={ListingCardsCss['likenumber']}>
              <div className={ListingCardsCss['likeimage']}>
                <img
                  alt=""
                  className="likeimg"
                  src={src}
                  onClick={() => manageLike()}
                />
              </div>
              <div className={ListingCardsCss['showbutton']}>
                {/* <button>Show Phone Number</button> */}
                <Button onClick={() => alert('+92 324 8205435')}>
                  Show Phone Number
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingCards
