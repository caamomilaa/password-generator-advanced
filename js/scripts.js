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
		const randomPosition = Math.floor(
			Math.random() * uppercaseCharacters.length
		);
		const randomCharacter = uppercaseCharacters.charAt(randomPosition);
		selectedCharacters += randomCharacter;
	}
	if (lowerercaseInputElement.checked) {
		const randomPosition = Math.floor(
			Math.random() * lowercaseCharacters.length
		);
		const randomCharacter = lowercaseCharacters.charAt(randomPosition);
		selectedCharacters += randomCharacter;
	}
	if (numbersInputElement.checked) {
		const randomPosition = Math.floor(Math.random() * numbers.length);
		const randomCharacter = numbers.charAt(randomPosition);
		selectedCharacters += randomCharacter;
	}
	if (symbolsInputElement.checked) {
		const randomPosition = Math.floor(Math.random() * symbols.length);
		const randomCharacter = symbols.charAt(randomPosition);
		selectedCharacters += randomCharacter;
	}

	//AL MENOS UNO DE ELLOS

	activateButton();
	return selectedCharacters;
};
// ****PRUEBA****

// const getRandom = () => {
// 	let charactersThatIget = '';
// 	if (10 % 2 === 0) {
// 		//quiero que me selecciones una aleatoria
// 		const randomPosition = Math.floor(
// 			Math.random() * uppercaseCharacters.length
// 		);
// 		const randomCharacter = uppercaseCharacters.charAt(randomPosition);
// 		charactersThatIget += randomCharacter;
// 	}

// 	console.log(charactersThatIget);
// 	return charactersThatIget;
// };

// const generatePassword = () => {
// 	const rangeBar = rangeInputElement.value;

// 	let randomPasswordCharacters = charactersThatIget;
// 	let totalRandomCharacters = '';

// 	for (i = 0; i < rangeBar; i++) {
// 		const randomPosition = Math.floor(
// 			Math.random() * randomPasswordCharacters.length
// 		);
// 		const randomCharacter = randomPasswordCharacters.charAt(randomPosition);
// 		totalRandomCharacters += randomCharacter;
// 	}
// 	return totalRandomCharacters;
// };

// ****PRUEBA****
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
		passwordElement.value = 'P4$5W0RD!';
	}
};

rangeInputElement.addEventListener('input', getPasswordLength);
uppercaseInputElement.addEventListener('change', selectedOptions);
lowerercaseInputElement.addEventListener('change', selectedOptions);
numbersInputElement.addEventListener('change', selectedOptions);
symbolsInputElement.addEventListener('change', selectedOptions);
generatorButtonElement.addEventListener('click', finalPassword);
