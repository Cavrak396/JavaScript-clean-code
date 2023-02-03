let buttons = document.querySelectorAll(".informations__button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let active = "active";
    let box = button.nextElementSibling;
    let text = button.querySelector(".information__text-click");

    if (text.innerHTML === "clicked") {
      text.innerHTML = "Just click me";
    } else {
      text.innerHTML = "clicked";
    }
    box.classList.toggle(active);
  });
});
