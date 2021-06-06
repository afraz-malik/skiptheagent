import FooterCss from './Footer.module.css';

const Footer = () =>{
	return(
	<footer className={FooterCss.footer}>
		<div className={FooterCss.insidefooter}>
			<div className={FooterCss.foottitle}>
			<h3>SKIPTHEAGENT</h3>
			</div>
			<div className={FooterCss.links}> 
			<div className={FooterCss.footerdata}>
				<ul>
				<li> <a href='#dummy'> Contact Us</a></li>
				<li> <a href='#dummy'> About Us</a></li>
				<li> <a href='#dummy'> Terms &amp; Conditions</a></li>
				<li> <a href='#dummy'> Partners</a></li>
				</ul>
			</div>
			<div className={FooterCss.footerdata}>
				<ul>
				<li> <a href='#dummy'> Contact Us</a></li>
				<li> <a href='#dummy'> About Us</a></li>
				<li> <a href='#dummy'> Terms &amp; Conditions</a></li>
				<li> <a href='#dummy'> Partners</a></li>
				</ul>
			</div>
			<div className={`${FooterCss.footerdata}  ${FooterCss.footerdata1} `}>
				<div className={FooterCss.social}>
				<p>Follow US</p>						
				</div>
				<div className={FooterCss.socialimg}>
				<div className={FooterCss.socialimg1}>
					<a href='#dummy'><img alt='' src="images/fb.png" /></a>
				</div>
				<div className={FooterCss.socialimg1}>
					<a href='#dummy'><img alt='' src="images/in.png" /></a>
				</div>
				<div className={FooterCss.socialimg1}>
					<a href='#dummy'><img alt='' src="images/insta.png" /></a>
				</div>
				<div className={FooterCss.socialimg1}>
					<a href='#dummy'><img alt='' src="images/twitter.jpg" /></a>
				</div>
				</div>	
				<div className={FooterCss.downloadtext}>
				<p>Download App</p>
				</div>
				<div className={FooterCss.footerimg}>
				<div className={FooterCss.footerimg1}>	
					<a href='#dummy'><img alt='' src="images/playstore.png" /></a>
				</div>
				<div className={FooterCss.footerimg1}>
					<a href='#dummy'><img alt='' src="images/app_store.png" width="100px" /></a>
				</div>
				</div>
			</div>
			</div>
		</div>
		<div className={FooterCss.copyright}>
			<p>©2019 All rights reserved. All other trademarks are the property of their respective owners.</p>
		</div>
	</footer>

	)
}

export default Footer;