// JavaScript code for carousel functionality

// Set the slide index to 1 (first slide)
var slideIndex = 1;
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Wrap around to the first slide if reached the end
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Wrap around to the last slide if reached the beginning
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add the "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

console.log(slideIndex-1)
// The expression slides[slideIndex - 1] is used to access the specific slide element within the slides array based on the current slideIndex.

// In JavaScript, array indices start from 0, so to access the first slide element, you would use slides[0]. However, in the carousel, the slide indices are displayed starting from 1 (e.g., "1 / 3", "2 / 3", etc.), so we need to adjust the index by subtracting 1.

// Therefore, slides[slideIndex - 1] gives us the corresponding slide element based on the current slideIndex. For example, if slideIndex is 1, it will access slides[0], which refers to the first slide element with the class name "mySlides".

// The code slides[slideIndex - 1].style.display = "block"; is used to show the current slide in a slideshow. The slides variable is an array of all the slides in the slideshow. The slideIndex variable is the index of the current slide. The -1 in the code is used to subtract 1 from the slideIndex variable because the array indices start at 0. So, if the slideIndex variable is 1, the code will actually show the second slide in the array.

// The style.display property is used to set the display of an element. The value "block" means that the element will be displayed. So, the code slides[slideIndex - 1].style.display = "block"; will show the current slide in the slideshow.