const userInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');
const numLibrary = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX',
	10: 'X',
	20: 'XX',
	30: 'XXX',
	40: 'XL',
	50: 'L',
	60: 'LX',
	70: 'LXX',
	80: 'LXXX',
	90: 'XC',
	100: 'C',
	200: 'CC',
	300: 'CCC',
	400: 'CD',
	500: 'D',
	600: 'DC',
	700: 'DCC',
	800: 'DCCC',
	900: 'CM',
	1000: 'M',
	2000: 'MM',
	3000: 'MMM',
};

// function checkUserInput() {
// 	if (userInput.value.length === 0) {
// 		output.textContent = 'Please enter a valid number.';
// 	} else if (userInput.value <= 0) {
// 		output.textContent = 'Please enter a number greater than or equal to 1.';
// 	} else if (userInput.value >= 4000) {
// 		output.textContent = 'Please enter a number less than or equal to 3999.';
// 	} else output.textContent = convertToRoman(userInput.value);
// }

function checkUserInput() {
	userInput.value.length === 0
		? (output.textContent = 'Please enter a valid number.')
		: userInput.value <= 0
		? (output.textContent = 'Please enter a number greater than or equal to 1.')
		: userInput.value >= 4000
		? (output.textContent = 'Please enter a number less than or equal to 3999.')
		: (output.textContent = convertToRoman(userInput.value));
}

function convertToRoman(number) {
	return number
		.split('')
		.map(
			(element, index, array) =>
				element * Math.pow(10, array.length - index - 1)
		)
		.map((key) => numLibrary[key])
		.join('');
}

convertButton.addEventListener('click', checkUserInput);
