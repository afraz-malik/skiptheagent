import React from 'react';
import HeaderCss from './Header.module.css'
const Header = () =>{
	return (
			<div>
				<header className={HeaderCss.header}>
					<div className={HeaderCss.leftheader}>
						<div className={HeaderCss.lefttext}>
							<p>Call Us Now: +01 123 456 78 </p>
							<p>Email: info@skiptheagent.com</p>	
						</div>
					</div>
					<div className={HeaderCss.rightheader}>
						<div className={HeaderCss.righttext}>
							<p className={HeaderCss.firstp}>Welcome to skiptheagent.</p>
							<p className={HeaderCss.secondp}> Kindly <a href='#dum' >SIGN IN</a> or <a href='#dum'>SIGN UP</a></p>
						</div>
					</div>
				</header>
				<div className={HeaderCss.smallheader}>
					<div className={HeaderCss.smalllogo}>
						<a href='#dum' ><h3>LOGO </h3></a>
					</div>
					<div className={HeaderCss.smalltext}>
						<p >Welcome to skiptheagent.</p>
						<p > Kindly <a href='#dummy'>SIGN IN</a> or <a href='#dum' >SIGN UP</a></p>
					</div>
				</div>
				<nav className={HeaderCss.nav}>
					<div className={HeaderCss.leftnav}>
						<div className={HeaderCss.logo}><h3><a href='#dum'>LOGO</a></h3></div>
					</div>
					<div className={HeaderCss.rightnav}>
						<ul>
							<li><a href='#dum'>SELL MY CAR</a></li>
							<li><a href='#dum'>SHOP FOR NEW CARS</a></li>
							<li className={HeaderCss.consolt}><a href='#dum'>CONSULTATIONS</a></li>
						</ul>
					</div>
				</nav>
			</div>

	)
}
export default Header;