import React, { useState } from 'react'
import DashboardProfileCss from './DashboardProfile.module.scss'
// Redux
import { connect, useDispatch } from 'react-redux'
import { updateUser, uploadImages } from '../../redux/user/user.actions'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'
import { SingleForgetBox } from '../ForgetPasswordBox/ForgetPasswordBox'
import { db_url } from '../../services/config.js'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  user: state.setUser.user,
  isLoading: state.setUser.loading,
})
const DashboardProfile = ({ user, isLoading }) => {
  const dispatch = useDispatch()
  const [showBox, manageBox] = useState(false)
  const [usercredentials, setUsercredentials] = useState({
    uid: user._id,
    displayName: user.displayName,
    email: user.email,
    zip: user.zip,
    phone: user.phone,
    username: user.username,
    gender: user.gender,
    country: user.country,
    city: user.city,
    blob: user.imgUrl,
  })
  const [images, setimages] = useState([])
  const showBoxFunction = () => {
    manageBox(true)
  }
  const hideBoxFunction = () => {
    manageBox(false)
  }
  const handleChange = (event) => {
    setUsercredentials({
      ...usercredentials,
      [event.target.name]: event.target.value,
    })
  }
  const handleImage = (event) => {
    setUsercredentials({
      ...usercredentials,
      blob: URL.createObjectURL(event.target.files[0]),
    })
    setimages([event.target.files[0]])
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    toast.dismiss()
    let err = []
    let { displayName, email, blob } = usercredentials
    if (!blob) err.push('You must select a profile picture')
    if (!displayName) err.push('Name is required')
    if (!email) err.push('Email is required')
    if (err.length > 0) {
      err.forEach((element) => {
        toast.error(element)
      })
      return
    }

    if (images.length > 0) {
      uploadImages({ payload: images }).then((data) => {
        dispatch(
          updateUser({
            images,
            usercredentials: {
              ...usercredentials,
              imgUrl: data[0],
            },
          })
        )
      })
    } else {
      dispatch(
        updateUser({
          images,
          usercredentials: {
            ...usercredentials,
            imgUrl: usercredentials.blob,
          },
        })
      )
    }
    // if (images == null) return
    // dispatch(imageUpload(images))
  }
  return (
    <div className={DashboardProfileCss.container}>
      <BoxModel title="Profile">
        <div className={DashboardProfileCss.body}>
          <div className={DashboardProfileCss.top}>
            {/* <img alt="" src="images\john.png" /> */}
            <img alt="" src={usercredentials.blob} />
            <input type="file" name="img" onChange={handleImage} />
            <h3>PROFILE PICTURE</h3>
            <form onSubmit={handleSubmit}>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>
                    FULL NAME <b style={{ color: 'red' }}>*</b>
                  </label>
                  <input
                    type="text"
                    value={`${usercredentials.displayName}`}
                    name="displayName"
                    onChange={handleChange}
                  />
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>EMAIL</label>
                  <input
                    type="text"
                    value={`${usercredentials.email}`}
                    name="email"
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>GENDER </label>
                  <select
                    name="gender"
                    id="city"
                    value={usercredentials.gender}
                    onChange={handleChange}
                    defaultValue="Male"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>COUNTRY </label>
                  <select
                    name="country"
                    id="city"
                    value={usercredentials.country}
                    onChange={handleChange}
                    defaultValue="Canada"
                  >
                    <option value="Canada">Canada</option>
                    <option value="Italy">Italy</option>
                    <option value="Switzerland3">Switzerland</option>
                  </select>
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>CITY </label>
                  <select
                    name="city"
                    id="city"
                    onChange={handleChange}
                    defaultValue="Alaslka"
                  >
                    <option value="Alaska">Alaska</option>
                    <option value="New York">New York</option>
                    <option value="Maldives">Maldives</option>
                  </select>
                </div>
                <div className={DashboardProfileCss.column}>
                  <label>ZIP CODE</label>
                  <input
                    type="number"
                    value={usercredentials.zip}
                    name="zip"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={DashboardProfileCss.row}>
                <div className={DashboardProfileCss.column}>
                  <label>USERNAME</label>
                  <input
                    type="text"
                    value={usercredentials.username}
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className={DashboardProfileCss.column}>
                  <span>
                    <label>phone Number</label>
                    <span className={DashboardProfileCss.error}>
                      &#9888; Not Verified
                    </span>
                  </span>
                  <input
                    type="text"
                    value={usercredentials.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <span className={DashboardProfileCss.changepassword}>
                PASSWORD:
                <span onClick={() => showBoxFunction()}>Change Password</span>
              </span>
              <Button type="submit">SAVE</Button>
            </form>
          </div>
        </div>
      </BoxModel>
      {showBox ? (
        <SingleForgetBox
          close={hideBoxFunction}
          email={usercredentials.email}
        />
      ) : null}
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export default connect(mapStateToProps)(DashboardProfile)
