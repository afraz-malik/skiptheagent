import React from 'react'
import ListingCardsCss from './listingcards.module.scss'

//Router
import { Link, useHistory } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
// Components
import Button from '../button/button'
import { useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/user.actions.js'
import { API, fetchBackend } from '../../services/config.js'
import { toast } from 'react-toastify'
import { fetchListing } from '../../redux/data/data.actions.js'
import moment from 'moment'
const ListingCards = ({ product, url, logged }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.setUser.user)
  const history = useHistory()
  const likedByMe = () => {
    if (
      user &&
      user.role === 'User' &&
      user.likedAds.indexOf(product._id) !== -1
    ) {
      return true
    }
    return false
  }

  const savedAd = () => {
    if (!user) {
      toast.dismiss()
      toast.warn('Kindly Login or signup to save ads')
      return
    }
    let tempAds = user.likedAds.map((er) => er)
    tempAds.push(product._id)
    // console.log(tempAds)
    dispatch(
      updateUser({
        usercredentials: {
          likedAds: tempAds,
        },
      })
    )
  }
  const unSaveAd = () => {
    let tempAds = user.likedAds.map((er) => er)
    let arr = tempAds.filter((ar) => ar !== product._id)
    dispatch(
      updateUser({
        usercredentials: {
          likedAds: arr,
        },
      })
    )
  }
  const deleteAd = () => {
    let ans = window.confirm('Are you sure you want to remove this add?')
    if (!ans) return
    fetchBackend('DELETE', API.deleteAd + '/' + product._id).then((res) => {
      if (res.modifiedCount > 0) {
        toast.success('Ad Deleted Successfully')
        dispatch(fetchListing(true))
      }
    })
  }
  const editAd = () => {
    history.push({
      pathname: '/dashboard/postad',
      edit: true,
      product_id: product._id,
    })
  }
  return (
    <div className={ListingCardsCss['listingcards']}>
      <div className={ListingCardsCss['leftcard']}>
        <Link to={`/details?productId=${product._id}`}>
          <img alt="" src={product.photos[0]} />
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
            <p>
              Last updated:
              {moment.utc(product.updatedAt).local().fromNow()}
            </p>
          </div>
          {!product.isDeleted && (
            <>
              {user?._id === product.userId || user?.role === 'Admin' ? (
                <div className={ListingCardsCss['deleteEdit']}>
                  <Button onClick={() => deleteAd()}>
                    {user.role === 'User' ? 'DELETE' : 'Disable'}
                  </Button>
                  {user.role === 'User' && (
                    <Button edit onClick={() => editAd()}>
                      EDIT
                    </Button>
                  )}
                </div>
              ) : (
                <div className={ListingCardsCss['likenumber']}>
                  <div className={ListingCardsCss['likeimage']}>
                    <img
                      alt=""
                      className="likeimg"
                      src={likedByMe() ? 'images/liked.png' : 'images/like.png'}
                      onClick={() => (likedByMe() ? unSaveAd() : savedAd())}
                    />
                  </div>
                  <div className={ListingCardsCss['showbutton']}>
                    {/* <button>Show Phone Number</button> */}
                    <Button
                      onClick={() => toast.success(product.contact_info.phone)}
                    >
                      Show Phone Number
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingCards
