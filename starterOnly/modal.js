function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit")
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const cities = document.querySelectorAll("input[type=radio]");
const termsCheckbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch close button event
closeBtn.addEventListener("click", closeModal);

// launch close modal
function closeModal() {
  modalbg.style.display = "none";
}

// launch submit button event
submitBtn.addEventListener("click", function (event) {
  if (isValidText(firstInput) && isValidText(lastInput) && isValidQuantity(quantityInput) && isCityChecked() && isTermsChecked() && isValidEmail()) {


    console.log("Submitted")
  } else {
    // prevent page from reloading
    event.preventDefault();
  }
});

// test if text fields are empty or less than 2 letters
function isValidText(inputValue) {
  return inputValue != null && inputValue.value.length >= 2
}

// test if email is valid
function isValidEmail() {
  return emailInput != null && emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
}

// test is quantity is number
function isValidQuantity(inputValue) {
  return inputValue && inputValue.value.match(/^\d{1,}$/)
}

// test if a city checkbox is checked
function isCityChecked() {
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      return true;
    }
  }
  return false;
}

// test if terms checkbox is checked 
function isTermsChecked() {
  if (termsCheckbox.checked) {
    return true;
  } else {
    return false;
  }
}

// send form
function validate(event) {

}
