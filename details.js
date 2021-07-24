function displayImage(smallImg) {
	var fullimg= document.getElementsByClassName("cover")[0];
	fullimg.src = smallImg.src;
	// body...
}
function ViewMore() {

	var viewmore = document.getElementsByClassName('hidden')[0];
	var viewmorea = document.getElementsByClassName('viewmorea')[0];
	var less = document.getElementsByClassName('less')[0];

	viewmore.style.display='flex';
	viewmorea.style.display = "none";
	less.style.display = "flex"
}
function ViewLess() {

	var viewmore = document.getElementsByClassName('hidden')[0];
	var viewmorea = document.getElementsByClassName('viewmorea')[0];
	var less = document.getElementsByClassName('less')[0];

	viewmore.style.display='none';
	viewmorea.style.display = "flex";
	less.style.display = "none"
}
function CarDetails() {
	var carfeatures = document.getElementsByClassName('carfeatures')[0];
	var cardetails = document.getElementsByClassName('cardetails')[0];
	var skew1 = document.getElementsByClassName('skew1')[0];
	var skew2 = document.getElementsByClassName('skew2')[0];
	
	carfeatures.style.display = "none";
	cardetails.style.display = "table";
	skew1.style.backgroundColor = "var(--default-color)";
	skew2.style.backgroundColor = "grey";
}
function CarFeatures() {

	var carfeatures = document.getElementsByClassName('carfeatures')[0];
	var cardetails = document.getElementsByClassName('cardetails')[0];
	var skew1 = document.getElementsByClassName('skew1')[0];
	var skew2 = document.getElementsByClassName('skew2')[0];
	
	carfeatures.style.display = "table";
	cardetails.style.display = "none";
	skew1.style.backgroundColor = "grey";
	skew2.style.backgroundColor = "var(--default-color)";

}
var index;
function showSearch(index) {
	var showsearch = document.getElementsByClassName('card_search')[index];
	showsearch.style.display= "flex";
}
function hideSearch(index) {
	var showsearch = document.getElementsByClassName('card_search')[index];
	showsearch.style.display= "none";
}
function sellCarAfter() {
	document.getElementsByClassName('sellcar')[0].className = "sellcar sellcarafter";
}
function sellCarNormal() {
	document.getElementsByClassName('sellcar')[0].className = "sellcar";
}
var index1=0;
function showResults(index1) {
	var insidesecond = document.getElementsByClassName('insidesecond')[index1];
	var rotate = document.getElementsByClassName('arrow')[index1];
	if (insidesecond.style.display === "flex") {
		insidesecond.style.display = "none";
		rotate.style.transform ="rotate(-90deg)";
	}
	else{
		insidesecond.style.display = "flex";
		rotate.style.transform ="rotate(0deg)";		
	}

}
function showMainResults() {
	var main = document.getElementsByClassName('outside_leftsectioncard')[0];
	var firstarrow = document.getElementsByClassName('firstarrow')[0];
	if (main.style.display === "none" || main.style.display === "") {
		main.style.display = "block";
		firstarrow.style.transform ="rotate(0deg)";	
	}
	else{
		main.style.display = "none";
		firstarrow.style.transform ="rotate(-90deg)";
	}	
}
var index2 = 0;
function closeBox(index2) {
	var boxmodel = document.getElementsByClassName('boxmodel')[index2];
	boxmodel.style.display="none";
}