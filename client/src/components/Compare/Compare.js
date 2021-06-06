import React from 'react';
import CompareCss from './Compare.module.css';

const Compare = () =>{
	return(
	<div className={CompareCss.compare}>
		<div className={CompareCss.comparetext}>
			<h6>STILL UNSURE?</h6>
			<p>Our comparison tool allows you to select up to 4 vehicles and compare them side by side.</p>
			<a className={CompareCss.compare_a} href="#dum" >ADD TO COMPARE</a>
		</div>
	</div>
	)
}

export default Compare;