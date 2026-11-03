const revealButtons = document.querySelectorAll(".reveal-btn");
const hideButtons = document.querySelectorAll(".hide-btn");

function getDisplay(animal) {
  return document.getElementById(animal + "-display");
}

revealButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const display = getDisplay(button.dataset.target);
    display.classList.remove("hidden");
  });
});


hideButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const display = getDisplay(button.dataset.target);
    display.classList.add("hidden");
  });
});