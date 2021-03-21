const popupButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal");
const popupClose = popup.querySelector(".modal-close");

const popupForm = popup.querySelector(".modal-form");
const popupName = popup.querySelector("#modal-name");
const popupEmail = popup.querySelector("#modal-email");
const input = popup.querySelectorAll('input');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-shake");
  popupName.classList.remove("modal-error");
  popupEmail.classList.remove("modal-error");
  popupEmail.value = "";
});

popupForm.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-shake");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-shake");
    input.forEach(function(item, i, arr) {
      if (item.value === "") {
        item.classList.add("modal-error");
      } else {
        item.classList.remove("modal-error");
      }
    });
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", popupName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-shake");
      popupName.classList.remove("modal-error");
      popupEmail.classList.remove("modal-error");
      popupEmail.value = "";
    }
  }
});
