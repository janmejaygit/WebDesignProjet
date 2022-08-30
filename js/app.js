const toggler = document.querySelector("#toggler");
const headerNavbar = document.querySelector("#headerNavbar");

function toggleNavbar() {
  headerNavbar.classList.toggle("active");
}

toggler.addEventListener("click", () => toggleNavbar());

// range slider1

const slider1 = document.querySelector(".slider1 input")
const montovalue = document.querySelector(".range__valuemonto");
montovalue.textContent = slider1.value ;


slider1.oninput = function(){
   montovalue.textContent = this.value;
   return 
}

// range slider2
const slider2 = document.querySelector(".slider2 input")
const seamonsvalue = document.querySelector(".range__valueseamons");
seamonsvalue.textContent = slider2.value; 

slider2.oninput = function(){
  seamonsvalue.textContent = this.value
}

// range totle value

const totleValue = document.querySelector(".range__totalevalue");

totleValue.textContent = slider1.value * slider2.value 