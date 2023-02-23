const portfolioSort = (button) => {
  let category = button.getAttribute("data-category");

  let portfolioItems = document.querySelectorAll(".portfolio-single-item");
  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

const knobs = document.querySelectorAll(".button");

knobs.forEach((button) => {
  button.addEventListener("click", () => {
    let data = button.classList[1];
    let menu = document.querySelectorAll(".menu__item");

    menu.forEach((item) => {
      item.style.display = "none";
      if (item.classList.contains(data)) {
        item.style.display = "block";
      }
    });
  });
});





