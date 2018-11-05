'use strict';

var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");
// var bookingLink = document.querySelector(".best-seller__button");

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

// bookingLink.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.add("order-modal--show");
// });

var cartLink = document.querySelectorAll(".popup-link");

if (cartLink.length > 0) {
	var popup = document.querySelector(".order-modal");
	var modalBtn = popup.querySelector(".modal-form__button");

	for (var i = 0; i < cartLink.length; i++) {
	  cartLink[i].addEventListener("click", function(evt) {
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
}
