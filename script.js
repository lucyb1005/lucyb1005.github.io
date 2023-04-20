//DROPDOWN//
const button = document.getElementById("menu-button");
const menuList = document.getElementById("menu-1");

button.addEventListener("click", displayMenuOne);

function displayMenuOne() {
  menuList.classList.add("show");
}

document.addEventListener("click", hideMenu)
