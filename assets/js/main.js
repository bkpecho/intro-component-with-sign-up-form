const button = document.querySelector('.intro__button');
const form = document.querySelector('.intro__form');

const hiddenClass = document.querySelector('.hidden');
const errorClass = document.querySelector('.error');

button.addEventListener('click', buttonClick);

function buttonClick() {
  const fNameInput = document.querySelector('#firstName');
  const lNameInput = document.querySelector('#lastName');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const fNameError = document.querySelector(
    '.intro__input--validate.firstName'
  );
  const lNameError = document.querySelector('.intro__input--validate.lastName');
  const emailError = document.querySelector('.intro__input--validate.email');
  const passwordError = document.querySelector(
    '.intro__input--validate.password'
  );

  let isFormValid = true;

  if (!validateInput(fNameInput, fNameError)) {
    isFormValid = false;
  }

  if (!validateInput(lNameInput, lNameError)) {
    isFormValid = false;
  }

  if (!validateEmail(emailInput, emailError)) {
    isFormValid = false;
  }

  if (!validateInput(passwordInput, passwordError)) {
    isFormValid = false;
  }

  if (isFormValid) {
    // Reset added and removed classes
    fNameInput.classList.remove('error');
    lNameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    fNameError.classList.add('hidden');
    lNameError.classList.add('hidden');
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');

    // Reset form
    form.reset();
  }
}

function validateInput(inputField, showErrorMessage) {
  if (isEmptyOrSpaces(inputField.value)) {
    inputField.classList.add('error');
    showErrorMessage.classList.remove('hidden');
    return false;
  } else {
    inputField.classList.remove('error');
    showErrorMessage.classList.add('hidden');
    return true;
  }
}

function validateEmail(inputField, showErrorMessage) {
  // Regular expression for email validation
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (isEmptyOrSpaces(inputField.value) || !emailRegex.test(inputField.value)) {
    inputField.classList.add('error');
    showErrorMessage.classList.remove('hidden');
    return false;
  } else {
    inputField.classList.remove('error');
    showErrorMessage.classList.add('hidden');
    return true;
  }
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
