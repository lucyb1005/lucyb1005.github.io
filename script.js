 //DROPDOWN//
document.getElementById("menu-button").onclick = function() {showMenu()};
 function showMenu() {
   document.getElementById("menu-1").classList.toggle("show");
 }



//SIDEMENU//
const hambaguButton = document.getElementById("hamburger-icon");
hambaguButton.addEventListener("click", displaySideMenu);
const sideMenu = document.getElementById("side-menu");

function displaySideMenu() {
  sideMenu.classList.add("show-menu");
}

const closeMenu = document.getElementById("menu-close");
closeMenu.addEventListener("click", hideSideMenu);

function hideSideMenu() {
  sideMenu.classList.remove("show-menu");
} 