var button = document.querySelector(".button-date-search");

var popup = document.querySelector(".date-form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("visually-hidden")) {
    popup.classList.remove("visually-hidden");
    popup.classList.add("date-animate");
  }
  else{
    popup.classList.add("visually-hidden");
    popup.classList.remove("date-animate");
  }
});
