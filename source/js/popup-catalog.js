var cartLink = document.querySelectorAll(".product-card__button");
var popup = document.querySelector(".order-modal");
var modalBtn = popup.querySelector(".modal-form__button");

cartLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("order-modal--show");
});

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
