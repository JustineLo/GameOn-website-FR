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
  $isFormValid = true;

  if (!isValidText(firstInput)) {
    $isFormValid = false;
  }
  if (!isValidText(lastInput)) {
    $isFormValid = false;
  }
  if (!isValidEmail()) {
    $isFormValid = false;
  }
  if (!isValidQuantity(quantityInput)) {
    $isFormValid = false;
  }
  if (!isCityChecked()) {
    $isFormValid = false;
  }
  if (!isTermsChecked()) {
    $isFormValid = false;
  }

  if ($isFormValid) {
    event.preventDefault();
    console.log("Submitted")
  } else {
    // prevent page from reloading 
    event.preventDefault();
  }
});

function displayErrorMessage(input, message) {
  const errorDiv = input.parentNode.insertBefore(document.createElement("div"), input.nextSibling)
  errorDiv.setAttribute("id", input.id + "-error")
  errorDiv.innerHTML = message
  errorDiv.style.color = 'red'
}

function removeErrorMessage(input) {
  const errorDiv = document.getElementById(input.id + "-error")
  if (errorDiv != null) {
    errorDiv.remove()
  }
}

// test if text fields are empty or less than 2 letters
function isValidText(input) {
  if (input != null && input.value.length >= 2) {
    removeErrorMessage(input)
    return true
  } else {
    if (document.getElementById(input.id + "-error") === null) {
      displayErrorMessage(input, "Veuillez entrer 2 caractères ou plus")
    }
    return false
  }

}

// test if email is valid
function isValidEmail() {
  if (emailInput != null && emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
    removeErrorMessage(emailInput)
    return true
  } else {
    if (document.getElementById("email-error") === null) {
      displayErrorMessage(emailInput, "Veuillez une adresse e-mail valide")
    }
    return false
  }
}

// test is quantity is number
function isValidQuantity() {
  if (quantityInput != null && quantityInput.value.match(/^\d{1,}$/)) {
    removeErrorMessage(quantityInput)
    return true
  } else {
    if (document.getElementById("quantity-error") === null) {
      displayErrorMessage(quantityInput, "Veuillez saisir un nombre")
    }
    return false
  }
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
    removeErrorMessage(termsCheckbox)
    return true;
  } else {
    if (document.getElementById("checkbox1-error") === null) {
      displayErrorMessage(termsCheckbox, "Vous devez vérifier que vous acceptez les termes et conditions")
    }
    return false;
  }
}

// send form
function validate(event) {

}
