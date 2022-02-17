const burgerMenuBlock = document.querySelector('.burger-menu');
const burgerMenuBtn = document.querySelector('.burger-menu__btn');
const svgBurgerMenuBtn = document.getElementsByName('.burger-menu__btn svg')

document.addEventListener("click", burgerMenuActive) 
function burgerMenuActive(event) {
  if (event.target.closest('.theme-switch-wrapper')) {
    return
  }
  if (event.target.closest(".burger-menu__btn")) {
    burgerMenuBlock.classList.toggle("_active");
  }
  if (!event.target.closest('.burger-menu')) {
    burgerMenuBlock.classList.remove("_active");
  }
}

