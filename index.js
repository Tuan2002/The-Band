const clickBtns = document.querySelectorAll('.buy-ticket');
const modal = document.querySelector('.modal');
const modalOuter = document.querySelector('.buy-container');
const closeBtns = document.querySelectorAll('.js-close');
var headerElement = document.getElementById('header');
var menuBtn = document.getElementById('menu-btn');
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
function showModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
}
function hideModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
}
function keepModal(event) {
    event.stopPropagation();
}
for (let i = 0; i < clickBtns.length; i++) {
  clickBtns[i].addEventListener('click', showModal);
}
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', hideModal);
}
modal.addEventListener('click', hideModal);
modalOuter.addEventListener('click', keepModal);
var headerHeight = headerElement.clientHeight;
menuBtn.onclick = function() {
  var isClose = headerElement.clientHeight === headerHeight;
  if (isClose) {
    headerElement.style.height = "auto";
  }
  else {
    headerElement.style.height = "46px";
  }
}
//  Automaticly hide menu when click on it
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
  var item = menuItems[i];
  item.onclick = function(event) {
    var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subNav');
    if (isParent) {
      event.preventDefault();
    }
    else 
    headerElement.style.height = "46px";
  }
}