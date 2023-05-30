let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000);
}
const onPrevClick = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex <= 0) slideIndex = slides.length++;
  console.log('INDEX:' + slideIndex);
  slides[slideIndex - 1].style.display = "block";
}
const onNextClick = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  console.log('INDEX:' + slideIndex);
  slides[slideIndex - 1].style.display = "block";
}
const onDotClick = (index) => {
  console.log('dot:' + index);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

$(document).ready(function () {
  showSlides();
  $('.prev').click(onPrevClick);
  $('.next').click(onNextClick);
  $('#dot-1').click(() => onDotClick(0));
  $('#dot-2').click(() => onDotClick(1));
  $('#dot-3').click(() => onDotClick(2));

});