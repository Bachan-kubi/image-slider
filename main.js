let slideIndex = 1;


function showSlider(n){
    let i; 
    let slideContainer = document.getElementsByClassName('slide-container');
    let dot = document.getElementsByClassName('dot');
    if(n>slideContainer.length){slideIndex=1};
    if(n<slideContainer.length){slideIndex = slideContainer.length};
    for(i=0; i<slideContainer.length; i++){
        slideContainer[i].style.display = 'none';
    };
    for(i=0;i<dot.length; i++){
        dot[i].className = dot[i].className.replace('active', '')
    };
    slideContainer[slideIndex-1].style.display = 'block';
    dot[slideIndex-1].style.display += " active";
    console.log(slideContainer, dot)
};
function plusSlider(n){
    showSlider(slideIndex += n);
};
function currentSlider(n){
    showSlider(slideIndex = n);
};

showSlider(slideIndex);