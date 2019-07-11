

function revealSidebar(){
    document.getElementById('sideBar').classList.toggle('is-reveal');
    document.getElementById('sideBarHide').classList.toggle('is-hidden');
    document.getElementById('sideBarReveal').classList.toggle('is-hidden');
}

function hideSidebar(){
    document.getElementById('sideBar').classList.toggle('is-reveal');
    document.getElementById('sideBarHide').classList.toggle('is-hidden');
    document.getElementById('sideBarReveal').classList.toggle('is-hidden');
}

function openModal(){
    document.getElementById("beeModal").style.display="block";
}
function closeModal(){
    document.getElementById("beeModal").style.display="none";
}

document.getElementById("beeLogo").addEventListener("click", openModal);
document.getElementById("beeLogo").addEventListener("click", currentSlide(1));
document.getElementById("beeClose").addEventListener("click", closeModal);
document.getElementById("sideBarReveal").addEventListener("click", revealSidebar);
document.getElementById("sideBarHide").addEventListener("click", hideSidebar);

var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}