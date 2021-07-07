import FooterCss from './Footer.module.css'

//Router
import { Link } from 'react-router-dom'
//Redux

const Footer = ({ url }) => {
  return (
    <footer className={FooterCss.footer}>
      <div className={FooterCss.insidefooter}>
        <div className={FooterCss.foottitle}>
          <h3>SKIPTHEAGENT</h3>
        </div>
        <div className={FooterCss.links}>
          <div className={FooterCss.footerdata}>
            <ul>
              <li>
                {' '}
                <Link to="#dum"> Contact Us</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> About Us</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> Terms &amp; Conditions</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> Partners</Link>
              </li>
            </ul>
          </div>
          <div className={FooterCss.footerdata}>
            <ul>
              <li>
                {' '}
                <Link to="#dum"> Contact Us</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> About Us</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> Terms &amp; Conditions</Link>
              </li>
              <li>
                {' '}
                <Link to="#dum"> Partners</Link>
              </li>
            </ul>
          </div>
          <div className={`${FooterCss.footerdata}  ${FooterCss.footerdata1} `}>
            <div className={FooterCss.social}>
              <p>Follow US</p>
            </div>
            <div className={FooterCss.socialimg}>
              <div className={FooterCss.socialimg1}>
                <Link to="#dum">
                  <img alt="" src="images\fb.png" />
                </Link>
              </div>
              <div className={FooterCss.socialimg1}>
                <Link to="#dum">
                  <img alt="" src="images\in.png" />
                </Link>
              </div>
              <div className={FooterCss.socialimg1}>
                <Link to="#dum">
                  <img alt="" src="images\insta.png" />
                </Link>
              </div>
              <div className={FooterCss.socialimg1}>
                <Link to="#dum">
                  <img alt="" src="images\twitter.jpg" />
                </Link>
              </div>
            </div>
            <div className={FooterCss.downloadtext}>
              <p>Download App</p>
            </div>
            <div className={FooterCss.footerimg}>
              <div className={FooterCss.footerimg1}>
                <Link to="#dum">
                  <img alt="" src="images\playstore.png" />
                </Link>
              </div>
              <div className={FooterCss.footerimg1}>
                <Link to="#dum">
                  <img alt="" src="images\app_store.png" width="100px" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={FooterCss.copyright}>
        <p>
          ©2019 All rights reserved. All other trademarks are the property of
          their respective owners.
        </p>
      </div>
    </footer>
  )
}

export default Footer
