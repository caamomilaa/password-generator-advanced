//ELEMENTOS DE HTML
const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('password-length');
const rangeElement = document.getElementById('range-input');
const buttonGenerateElement = document.getElementById('generator-button');

// const uppercaseInputElement = document.getElementById('uppercase-input');
// const lowercaseInputElement = document.getElementById('lowercase-input');
// const numbersInputElement = document.getElementById('numbers-input');
// const symbolsInputElement = document.getElementById('symbols-input');

const checkboxElements = document.querySelectorAll('.input');

let passwordLength = rangeElement.value;

let allowedCharacters = '';
let finalPassword = '';

//CARACTERES DE LA CONTRSEÑA

const charactersBank = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '01234567890',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?/'
};

const checkTest = () => {
  const checkboxElements = document.querySelectorAll('.input:checked');
  checkboxElements.forEach(input => {
    const randomIndex = Math.floor(
      Math.random() * charactersBank[input.id].length
    );
    finalPassword += charactersBank[input.id].charAt(randomIndex);
    allowedCharacters += charactersBank[input.id];
  });
};
//BUCLE Y UN IF

const setPasswordLength = () => {
  passwordLength = rangeElement.value;
  lengthTextElement.textContent = passwordLength;
};

const generateAleatoryNumber = max => {
  return Math.floor(Math.random() * max);
};

const setDisabledButton = () => {
  if (
    uppercaseInputElement.checked ||
    lowercaseInputElement.checked ||
    numbersInputElement.checked ||
    symbolsInputElement.checked
  ) {
    buttonGenerateElement.disabled = false;
  } else {
    buttonGenerateElement.disabled = true;
  }
};

const setAllowedCharacters = () => {
  allowedCharacters = '';
  finalPassword = '';

  for (const characters of charactersBank) {
    console.log(characters);
  }
};
setAllowedCharacters();
// const setAllowedCharacters = () => {
//   allowedCharacters = '';
//   finalPassword = '';

//   if (uppercaseInputElement.checked) {
//     allowedCharacters += uppercase;
//     finalPassword += uppercase.charAt(generateAleatoryNumber(uppercase.length));
//   }

//   if (lowercaseInputElement.checked) {
//     allowedCharacters += lowercase;
//     finalPassword += lowercase.charAt(generateAleatoryNumber(lowercase.length));
//   }

//   if (numbersInputElement.checked) {
//     allowedCharacters += numbers;
//     finalPassword += numbers.charAt(generateAleatoryNumber(numbers.length));
//   }

//   if (symbolsInputElement.checked) {
//     allowedCharacters += symbols;
//     finalPassword += symbols.charAt(generateAleatoryNumber(symbols.length));
//   }
// };

// const generatePassword = () => {
//   setAllowedCharacters();
//   for (let i = finalPassword.length; i < rangeElement.value; i++) {
//     finalPassword += allowedCharacters.charAt(
//       generateAleatoryNumber(allowedCharacters.length)
//     );
//   }

//   passwordElement.value = finalPassword;
//   finalPassword = '';
// };

// uppercaseInputElement.addEventListener('change', setDisabledButton);
// lowercaseInputElement.addEventListener('change', setDisabledButton);
// numbersInputElement.addEventListener('change', setDisabledButton);
// symbolsInputElement.addEventListener('change', setDisabledButton);

// rangeElement.addEventListener('input', setPasswordLength);
// buttonGenerateElement.addEventListener('click', generatePassword);
