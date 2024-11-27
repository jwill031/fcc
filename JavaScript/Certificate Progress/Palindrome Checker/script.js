const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultP = document.getElementById("result");

const isPalindromeStr = (str) => {
	resultP.innerText = `${str} is a palindrome.`;
};
const isNotPalindrome = (str) => {
	resultP.innerText = `${str} is not a palindrome.`;
};

const isPalindrome = (str) => {
    let cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}

checkButton.addEventListener("click", () => {
	const input = textInput.value.trim();

	if (input === "") {
		alert("Please input a value");
	} else if (isPalindrome(input)) {
		isPalindromeStr(input);
	} else if (!isPalindrome(input)) {
		isNotPalindrome(input);
	}

	clearInput();
});

const clearInput = () => {
	textInput.value = "";
};

function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}

function isAlphanumericPalindrome(str) {
	let cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

	let hasLetters = /[a-z]/.test(cleanStr);
	let hasNumbers = /\d/.test(cleanStr);

	if (!hasLetters || !hasNumbers) {
		return false;
	}

	let reversedStr = cleanStr.split("").reverse().join("");

	return cleanStr === reversedStr;
}
