import { capitalize, roundToDecimalPlace } from './modulesExport.mjs';

function displayTotal(name, total) {
	return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}

console.log(displayTotal('kingsley', 20.444));
// "Xyz, your total cost is: 20.44"

export { displayTotal };