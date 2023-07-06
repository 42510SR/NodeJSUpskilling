function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
}

function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
}

//Default export: If we want to default export then while importing we dont have to add curly braces, 
///we only use "import functionName from './path' "

export { capitalize, roundToDecimalPlace };


//Default export: If we want to default export then while importing we dont have to add curly braces, 
//we only use "import functionName from './path' "

// export function getPower(decimalPlaces) {
// 	return 10 ** decimalPlaces;
// }

// export default function  capitalize(word) {
// 	return word[0].toUpperCase() + word.slice(1);
// }

// export function roundToDecimalPlace(number, decimalPlaces = 2) {
// 	const round = getPower(decimalPlaces);
// 	return Math.round(number * round) / round;
// }