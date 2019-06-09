var slideIndex = 0;
function plusSlides (n) { 
showSlides(slideIndex += n);
}
function showSlides (n) {
var i;
var slides = document.getElementsByClassName("blogSlides");
var add = document.getElementsByClassName("");
if(n>slides.length) {
slideIndex = 1
}
if (n<1) {
slideIndex = slides.length
}for (i=0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < add.length; i++) {
add[i].className = add[i].className.replace("");
}
 slides[slideIndex - 1].style.display="";
 add[slideIndex - 1];
}
document.addEventListener("DOMContentLoaded", function (e) {
});

