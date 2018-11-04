var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");
var bookingLink = document.querySelector(".best-seller__button");
var cartLink = document.querySelectorAll(".product-card__button");
var popup = document.querySelector(".order-modal");
var modalBtn = popup.querySelector(".modal-form__button");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

bookingLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("order-modal--show");
});

for (var i = 0; i < cartLink.length; i++) {
  cartLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("order-modal--show");
  })
};

modalBtn.addEventListener("click", function() {
  popup.classList.remove("order-modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("order-modal--show")) {
      evt.preventDefault();
      popup.classList.remove("order-modal--show");
    }
  }
});
