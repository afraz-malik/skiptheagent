import './Footer.css';

const Footer = () =>{
	return(
	<footer>
		<div className="insidefooter">
			<div className="foottitle">
			<h3>SKIPTHEAGENT</h3>
			</div>
			<div className="links"> 
			<div className="footerdata">
				<ul>
				<li> <a href='#dummy'> Contact Us</a></li>
				<li> <a href='#dummy'> About Us</a></li>
				<li> <a href='#dummy'> Terms &amp; Conditions</a></li>
				<li> <a href='#dummy'> Partners</a></li>
				</ul>
			</div>
			<div className="footerdata">
				<ul>
				<li> <a href='#dummy'> Contact Us</a></li>
				<li> <a href='#dummy'> About Us</a></li>
				<li> <a href='#dummy'> Terms &amp; Conditions</a></li>
				<li> <a href='#dummy'> Partners</a></li>
				</ul>
			</div>
			<div className="footerdata footerdata1">
				<div className="social">
				<p>Follow US</p>						
				</div>
				<div className="socialimg">
				<div className="socialimg1">
					<a href='#dummy'><img alt='' src="images/fb.png" /></a>
				</div>
				<div className="socialimg1">
					<a href='#dummy'><img alt='' src="images/in.png" /></a>
				</div>
				<div className="socialimg1">
					<a href='#dummy'><img alt='' src="images/insta.png" /></a>
				</div>
				<div className="socialimg1">
					<a href='#dummy'><img alt='' src="images/twitter.png" /></a>
				</div>
				</div>	
				<div className="downloadtext">
				<p>Download App</p>
				</div>
				<div className="footerimg">
				<div className="footerimg1">	
					<a href='#dummy'><img alt='' src="images/playstore.png" /></a>
				</div>
				<div className="footerimg1">
					<a href='#dummy'><img alt='' src="images/app_store.png" width="100px" /></a>
				</div>
				</div>
			</div>
			</div>
		</div>
		<div className="copyright">
			<p>©2019 All rights reserved. All other trademarks are the property of their respective owners.</p>
		</div>
	</footer>

	)
}

export default Footer;