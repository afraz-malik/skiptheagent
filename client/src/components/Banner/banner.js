import React from 'react'
import BannerCss from './banner.module.css';

const Banner = () =>{
	return(
        <div className={BannerCss.banner}>
            <div className={BannerCss.bannertext}>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>		
            <div className={BannerCss.bannerform}>
                <form action="/action_page.php">
                    <input type="Email" placeholder="Enter your email"  />
                    <button type="submit">Subscribe</button>	
                </form>
            </div>
        </div>

	)
}

export default Banner;