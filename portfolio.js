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



const dugmad = document.querySelectorAll(".button");

dugmad.forEach((button) => {
    let data = button.getAttribute("data-category");
    button.addEventListener("click", () => {
     
    let items = document.querySelectorAll(".menu__item");
    
    items.forEach((item) => {
        item.style.display ="none";
    })

     items.forEach((item) => {
        if(item.getAttribute("data-category").includes(data)) {
            item.style.display ="block";
        }
     })
    
  




    })
})