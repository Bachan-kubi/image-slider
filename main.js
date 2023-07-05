// function showSlider(n){
//     let i; 
//     let slideContainer = document.getElementsByClassName('slide-container');
//     let dot = document.getElementsByClassName('dot');
//     if(n>slideContainer.length){
//         slideIndex=1;
//     };
//     if(n<slideContainer.length){
//         slideIndex = slideContainer.length;
//     };
//     for(i=0; i<slideContainer.length; i++){
//         console.log(i)
//         slideContainer[i].style.display = 'none';
//     };
//     for(i=0;i<dot.length; i++){
//         console.log(i)
//         dot[i].className = dot[i].className.replace(' active', '')
//     };
//     slideContainer[slideIndex-1].style.display = 'block';
//     dot[slideIndex-1].style.display += " active";
// };
// function plusSlider(n){
//     showSlider(slideIndex += n);
// };
// function currentSlider(n){
//     showSlider(slideIndex = n);
// };

// let slideIndex = 0;
// showSlider(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};
let slideIndex = 1;
showSlides(slideIndex);