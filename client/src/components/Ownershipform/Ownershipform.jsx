import React from 'react'
import OwnershipformCss from './Ownershipform.module.scss'
import { Link } from 'react-router-dom'

import BoxModel from '../boxModel/boxModel'
const Ownershipform = () => {
    return (
        <div  className={OwnershipformCss.fullwrapper}>
            <h1 >HERE IS HOW WE CAN HELP</h1>
            <div className={OwnershipformCss.wrapper}>
                <div className={OwnershipformCss.insidewrapper}>
                   <div className={OwnershipformCss.img} >
                        <div className={OwnershipformCss.title}>
                            <p>FILL THE FORM</p>
                        </div>
                        <div className={OwnershipformCss.subtitle}>
                            Fill the form and submit the request
                        </div>
                    </div>
                </div> 
                <div className={OwnershipformCss.insidewrapper}>
                   <div className={OwnershipformCss.img} >
                        <div className={OwnershipformCss.title}>
                            <p>REVIEW</p>
                        </div>
                        <div className={OwnershipformCss.subtitle}>
                            Our teams reviews the request
                        </div>
                    </div>
                </div> 
                <div className={OwnershipformCss.insidewrapper}>
                   <div className={OwnershipformCss.img} >
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
                <a href='#dumm' className={OwnershipformCss.viewmorea}>
                Show Form
                </a>
            </div>
            <div className={OwnershipformCss.boxmodel}>
                    <div className={OwnershipformCss.boxmodel_body}>
                        <h3>Fill the Form</h3>
                        <form className={OwnershipformCss.signUpForm}>
                            <input type="text" name="name" placeholder="Email" />
                            <input type="email" name="email" placeholder="Country" />
                            <input type="password" name="password" placeholder="City" />
                            <input type="password" name="password" placeholder="Zip Code" />
                            <input type="textarea" name="password" placeholder="What's the problem/Question?" />
                            <input type="submit" name="login" value="SUBMIT FORM" />
                        </form>
                    </div>
            </div>
        
        
        </div>
    )
}

export default Ownershipform
