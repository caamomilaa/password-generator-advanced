//ELEMENTOS DE HTML

const passwordElement = document.getElementById('password');
const passwordLengthElement = document.getElementById('password-length');
const rangeInputElement = document.getElementById('range-input');
const generatorButtonElement = document.getElementById('generator-button');
const uppercaseInputElement = document.getElementById('uppercase-input');
const lowerercaseInputElement = document.getElementById('lowercase-input');
const numbersInputElement = document.getElementById('numbers-input');
const symbolsInputElement = document.getElementById('symbols-input');

//CARACTERES DE LA CONTRSEÑA

const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '01234567890';
const symbols = '!@#$%^&*()_+-={}[]:;<>,.?/';

//LÓGICA DE LA CONTRSEÑA

const getPasswordLength = () => {
  passwordLengthElement.textContent = rangeInputElement.value;
  return getPasswordLength;
};

const selectedOptions = () => {
  let selectedCharacters = '';
  if (uppercaseInputElement.checked) {
    selectedCharacters += uppercaseCharacters;
  }
  if (lowerercaseInputElement.checked) {
    selectedCharacters += lowercaseCharacters;
  }
  if (numbersInputElement.checked) {
    selectedCharacters += numbers;
  }
  if (symbolsInputElement.checked) {
    selectedCharacters += symbols;
  }

  //AL MENOS UNO DE ELLOS

  activateButton();
  return selectedCharacters;
};

const generatePassword = () => {
  const rangeBar = rangeInputElement.value;

  let randomPasswordCharacters = selectedOptions();
  let totalRandomCharacters = '';

  for (i = 0; i < rangeBar; i++) {
    const randomPosition = Math.floor(
      Math.random() * randomPasswordCharacters.length
    );
    const randomCharacter = randomPasswordCharacters.charAt(randomPosition);
    totalRandomCharacters += randomCharacter;
  }
  return totalRandomCharacters;
};

const finalPassword = () => {
  passwordElement.value = generatePassword();
};

const activateButton = () => {
  if (
    uppercaseInputElement.checked ||
    lowerercaseInputElement.checked ||
    numbersInputElement.checked ||
    symbolsInputElement.checked
  ) {
    generatorButtonElement.disabled = false;
  } else {
    generatorButtonElement.disabled = true;
  }
};

rangeInputElement.addEventListener('input', getPasswordLength);
uppercaseInputElement.addEventListener('change', selectedOptions);
lowerercaseInputElement.addEventListener('change', selectedOptions);
numbersInputElement.addEventListener('change', selectedOptions);
symbolsInputElement.addEventListener('change', selectedOptions);
generatorButtonElement.addEventListener('click', finalPassword);
