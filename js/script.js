 var slideIndex = 1;
 showDivs(slideIndex);

 function plusDivs(a) {
 	showDivs (slideIndex +=a);

 }

 function showDivs(a) {
 	showDivs(slideIndex += a);

 }

 function showDivs (a) {
 	var i;
 	var x = document.getElementByClassName('slider');
 	if (a>x.length) {slideIndex = 1}
 		if (a<1) {slideIndex = x.length}
 			for ( i = 0; i <x.length; i++) {
 				x[i].style.display = "none";

 				
 			}

 			x[slideIndex-1].style.display = "block";
 }