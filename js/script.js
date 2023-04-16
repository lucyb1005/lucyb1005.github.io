//DROPDOWN 
const menu1Button = document.getElementById('menu-1-button');
const menu1Dropdown = document.getElementById('menu-1');

menu1Button.addEventListener("click", displayMenuOne);

function displayMenuOne() {
  menu1Dropdown.classList.add("show");
}


