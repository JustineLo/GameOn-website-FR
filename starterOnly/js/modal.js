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
const endCloseBtn = document.querySelector(".btn-close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit")
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const cities = document.querySelectorAll("input[type=radio]");
const termsCheckbox = document.getElementById("checkbox1");
const formDiv = document.getElementsByName("reserve");
const thankyouDiv = document.getElementById("thankyou-page");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formDiv[0].style.display = "block";
  thankyouDiv.style.display = "none";
}

// launch close button event
closeBtn.addEventListener("click", closeModal);

// launch close button event after validation
endCloseBtn.addEventListener("click", closeModal);

// launch close modal
function closeModal() {
  modalbg.style.display = "none";
}

// launch submit button event
submitBtn.addEventListener("click", function (event) {
  let isFormValid = true;

  if (!isValidText(firstInput)) {
    isFormValid = false;
  }
  if (!isValidText(lastInput)) {
    isFormValid = false;
  }
  if (!isValidEmail()) {
    isFormValid = false;
  }

  if (!isValidBirthdate()) {
    isFormValid = false;
  }

  if (!isValidQuantity(quantityInput)) {
    isFormValid = false;
  }
  if (!isCityChecked()) {
    isFormValid = false;
  }
  if (!isTermsChecked()) {
    isFormValid = false;
  }

  event.preventDefault();
  if (isFormValid) {
    thankyouDiv.style.display = "flex";
    formDiv[0].style.display = "none";
    formDiv[0].reset();
  }

});


// display error message under concerned field
function displayErrorMessage(input, message) {
  const formData = input.parentNode;
  formData.setAttribute("data-error-visible", true)
  formData.setAttribute("data-error", message)
}

// remove error message if field is validated
function removeErrorMessage(input) {
  const formData = input.parentNode;
  formData.setAttribute("data-error-visible", false)
}

// test if text fields are empty or less than 2 letters
function isValidText(input) {
  if (input != null && input.value.length >= 2) {
    removeErrorMessage(input)
    return true
  } else {
    displayErrorMessage(input, "Veuillez entrer 2 caractères ou plus")
    return false
  }
}

// test if email is valid
function isValidEmail() {
  if (emailInput != null && (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(emailInput.value)) {
    removeErrorMessage(emailInput)
    return true
  } else {
    displayErrorMessage(emailInput, "Veuillez une adresse e-mail valide")
    return false
  }
}

// test if birthdate is valid
function isValidBirthdate() {
  let date = new Date(birthdate.value).getTime();
  if (isNaN(date) || Date.now() < date) {
    displayErrorMessage(birthdateInput, "Veuillez saisir une date de naissance valide")
    return false
  } else {
    removeErrorMessage(birthdateInput)
    return true
  }
}

// test is quantity is number
function isValidQuantity() {
  if (quantityInput != null && (/^\d{1,}$/).test(quantityInput.value)) {
    removeErrorMessage(quantityInput)
    return true
  } else {
    displayErrorMessage(quantityInput, "Veuillez saisir un nombre")
    return false
  }
}

// test if a city checkbox is checked
function isCityChecked() {
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      removeErrorMessage(cities[i])
      return true;
    }
  }
  displayErrorMessage(cities[0], "Veuillez cocher une ville")
  return false;
}

// test if terms checkbox is checked 
function isTermsChecked() {
  if (termsCheckbox.checked) {
    removeErrorMessage(termsCheckbox)
    return true;
  } else {
    displayErrorMessage(termsCheckbox, "Vous devez vérifier que vous acceptez les termes et conditions")
    return false;
  }
}


// send form
function validate(event) {

}
