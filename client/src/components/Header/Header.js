import React from 'react';
import './Header.css'
const Header = () =>{
	return (
			<div>
				<header>
					<div className="leftheader">
						<div className="lefttext">
							<p>Call Us Now: +01 123 456 78 </p>
							<p>Email: info@skiptheagent.com</p>	
						</div>
					</div>
					<div className="rightheader">
						<div className="righttext">
							<p className="firstp">Welcome to skiptheagent.</p>
							<p className="secondp"> Kindly <a href='#dum' >SIGN IN</a> or <a href='#dum'>SIGN UP</a></p>
						</div>
					</div>
				</header>
				<div className="smallheader">
					<div className="smalllogo">
						<a href='#dum' ><h3>LOGO </h3></a>
					</div>
					<div className="smalltext">
						<p >Welcome to skiptheagent.</p>
						<p > Kindly <a href='#dummy'>SIGN IN</a> or <a href='#dum' >SIGN UP</a></p>
					</div>
				</div>
				<nav>
					<div className="leftnav">
						<div className="logo"><h3><a href='#dum'>LOGO</a></h3></div>
					</div>
					<div className="rightnav">
						<ul>
							<li><a href='#dum'>SELL MY CAR</a></li>
							<li><a href='#dum'>SHOP FOR NEW CARS</a></li>
							<li className="consolt"><a href='#dum'>CONSULTATIONS</a></li>
						</ul>
					</div>
				</nav>
			</div>

	)
}
export default Header;