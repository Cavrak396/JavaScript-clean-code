//Variables

let link = document.querySelectorAll(".menu__link--click");
let appear = "appear";

//Functions
link.forEach(function (button) {
  let dropdown = button.nextElementSibling;
  button.addEventListener("click", function () {
    if (dropdown.classList.contains(appear)) {
      dropdown.classList.remove(appear);
    } else {
      let openDropdownLists = document.querySelectorAll(".menu__dropdown");
      openDropdownLists.forEach(function (openDropdownList) {
        openDropdownList.classList.remove(appear);
      });
    }
    dropdown.classList.toggle(appear);
  });
});
