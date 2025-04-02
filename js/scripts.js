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

//LÓGICA GENERADOR CONTRASEÑA

//Para el range

const getPasswordLength = () => {
	passwordLengthElement.textContent = rangeInputElement.value;
	return getPasswordLength;
};
rangeInputElement.addEventListener('input', getPasswordLength);

//Para generar la contraseña en sí

let finalPassword = '';

const getPassword = () => {
	const inputValue = rangeInputElement.value;
	let randomCharacters = '';
	for (i = 0; i < inputValue; i++) {
		const randomPosition = Math.floor(Math.random() * finalPassword.length);
		const randomCharacter = finalPassword.charAt(randomPosition);
		randomCharacters += randomCharacter;
	}
	console.log(randomCharacters);

	return randomCharacters;
};

//tengo que hacer un bucle que recorra la longitud de las opciones selccionadas y guardarlas para pasarlas a finalpassword +=

// opciones de botones

const selectedOptions = () => {
	if (uppercaseInputElement.checked) {
		finalPassword += uppercaseCharacters;
	}
	if (lowerercaseInputElement.checked) {
		finalPassword += lowercaseCharacters;
	}
	if (numbersInputElement.checked) {
		finalPassword += numbers;
	}
	if (symbolsInputElement.checked) {
		finalPassword += symbols;
	}
};

//escuchas

uppercaseInputElement.addEventListener('change', selectedOptions);
lowerercaseInputElement.addEventListener('change', selectedOptions);
numbersInputElement.addEventListener('change', selectedOptions);
symbolsInputElement.addEventListener('change', selectedOptions);

//funcionamiento del botón
const generatePassword = () => {
	passwordElement.value = getPassword(); //Por qué es value y no text content?
};
generatorButtonElement.addEventListener('click', generatePassword);
