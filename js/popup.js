const popupButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal");
const popupClose = popup.querySelector(".modal-close");

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
