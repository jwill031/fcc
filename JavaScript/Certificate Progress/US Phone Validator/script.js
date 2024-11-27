const USER_INPUT = document.getElementById('user-input');
const CHECK_BTN = document.getElementById('#check-btn');
const CLEAR_BTN = document.getElementById('clear-btn');
const RESULTS = document.getElementById('results-div');
const RESULT_APPEND = document.getElementById('result');

CHECK_BTN.addEventListener('click', () => {
    const input = USER_INPUT.value.trim();
    const subString = 'abcdefghijklmnopqrstuvwxyz'

    if (USER_INPUT === '' || USER_INPUT.includes(subString)) {
        alert("Please provide a phone number")
    }
})