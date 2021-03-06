import React, { useState } from 'react'
import OwnershipformCss from './Ownershipform.module.scss'
// Images
import Background1 from './1.jpg'
import Background2 from './2.png'
import Background3 from './3.png'
// Components
import Button from '../button/button'
import { toast } from 'react-toastify'

const Ownershipform = () => {
  const [display, setDisplay] = useState('none')
  const toggleForm = () => {
    setDisplay('block')
  }
  return (
    <div className={OwnershipformCss.fullwrapper}>
      <h1>HERE IS HOW WE CAN HELP</h1>
      <div className={OwnershipformCss.wrapper}>
        <div className={OwnershipformCss.insidewrapper}>
          <div
            className={OwnershipformCss.img}
            style={{ backgroundImage: `url(${Background1})` }}
          >
            <div className={OwnershipformCss.title}>
              <p>FILL THE FORM</p>
            </div>
            <div className={OwnershipformCss.subtitle}>
              Fill the form and submit the request
            </div>
          </div>
        </div>
        <div className={OwnershipformCss.insidewrapper}>
          <div
            className={OwnershipformCss.img}
            style={{ backgroundImage: `url(${Background2})` }}
          >
            <div className={OwnershipformCss.title}>
              <p>REVIEW</p>
            </div>
            <div className={OwnershipformCss.subtitle}>
              Our teams reviews the request
            </div>
          </div>
        </div>
        <div className={OwnershipformCss.insidewrapper}>
          <div
            className={OwnershipformCss.img}
            style={{
              background: `url(${Background3})`,
              backgroundSize: '100%',
              backgroundPosition: '-7px -76px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={OwnershipformCss.title}>
              <p>RESPONSE</p>
            </div>
            <div className={OwnershipformCss.subtitle}>
              Then they provide information
            </div>
          </div>
        </div>
      </div>
      <div className={OwnershipformCss.more}>
        <Button onClick={() => toggleForm()}>Show Form</Button>
      </div>
      <div
        className={OwnershipformCss.boxmodel}
        style={{ display: `${display}` }}
      >
        <div className={OwnershipformCss.boxmodel_body}>
          <h3>Fill the Form</h3>
          <form
            className={OwnershipformCss.signUpForm}
            onSubmit={(e) => {
              e.preventDefault()
              setDisplay('none')
              window.scrollTo(0, 0)
              toast.success(
                'Form Submitted Successfully, we will reach you soon'
              )
            }}
          >
            <input type="text" name="name" placeholder="Email" />
            <input type="email" name="email" placeholder="Country" />
            <input type="password" name="password" placeholder="City" />
            <input type="password" name="password" placeholder="Zip Code" />
            <input
              type="textarea"
              name="password"
              placeholder="What's the problem/Question?"
            />
            <Button type="submit" name="submit" login="login">
              SUBMIT FORM
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ownershipform
