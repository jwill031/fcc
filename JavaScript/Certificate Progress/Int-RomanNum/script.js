// --------- DESCRIPTION ------------
// Firstly, i define the variables i need to access data from the html. then i check
// when the button is clicked, if the input doesnt meet the requirements, to send an error
// to the outputField. else convert the given number and print it back to the output.

const inputVal = document.getElementById("number");
const convButton = document.getElementById("convert-btn");
const outputField = document.getElementById("output");

convButton.addEventListener("click", () => {
    const num = inputVal.value;

    if (num === "") {
        updateText('Please enter a valid number')
    } else if (num < 1) {
        updateText('Please enter a number greater than or equal to 1');
    } else if (num >= 4000) {
        updateText('Please enter a number less than or equal to 3999');
    } else {
        outputField.innerText = intToRoman(num);
    }
});

const updateText = (text) => {
    outputField.innerText = `${text}`;
}

const intToRoman = (num) => {
	const symbols = [
		{ value: 1000, symbol: "M" }, // romanNumeral objects.
		{ value: 900, symbol: "CM" },
		{ value: 500, symbol: "D" },
		{ value: 400, symbol: "CD" },
		{ value: 100, symbol: "C" },
		{ value: 90, symbol: "XC" },
		{ value: 50, symbol: "L" },
		{ value: 40, symbol: "XL" },
		{ value: 10, symbol: "X" },
		{ value: 9, symbol: "IX" },
		{ value: 5, symbol: "V" },
		{ value: 4, symbol: "IV" },
		{ value: 1, symbol: "I" },
	];

    let result = '';

    for (let i = 0; i < symbols.length; i++) { // for when i is less than the length of the amount of symbols, add 1 to i
        while (num >= symbols[i].value) { // while the input is GREATER THAN or equal to the value of the roman numeral before conversion
            result += symbols[i].symbol; // add the conversion to the result we defined earlier.
            num -= symbols[i].value; // then take away the converted value from the input
        }
    }; // this will keep going until the whole number provided is converted
    // IE 356 = CCCLVI

    return result; // return result so we can get it from the function.
};
