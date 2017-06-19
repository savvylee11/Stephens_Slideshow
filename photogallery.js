$ (document) .ready(function(){
	$ ("p") .click(function){
		$ (this) .hide();
	});
});




var slideIndex = 1; 
showDivs (slideIndex); 

function plusDivs (n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i; 
	var x = document.getElementsByClassName ("mySides");
		console.log ("How Many Slides?" + x);
	if (n> x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++_ {

}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
	

