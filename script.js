const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const regexPattern = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;


const hideResults = () => {
   resultsDiv.style.display = 'none';
}
hideResults();

const alertEmpty = () => {
    const inputVal = input.value;
    if (inputVal === '') {
        alert("Please provide a phone number");
    } 
}
checkBtn.addEventListener('click', alertEmpty);


const isNumValid = () => {
    const inputVal = input.value.trim();
    const matchResult = inputVal.match(regexPattern);
    if (matchResult !== null) {
        resultsDiv.style.display = 'flex';
        resultsDiv.innerHTML = `<p id="inserted-p">Valid US number: ${inputVal}</p>`;
    } else {
        resultsDiv.style.display = 'flex';
        resultsDiv.innerHTML = `<p id="inserted-p">Invalid US number: ${inputVal}</p>`;
    }
}

checkBtn.addEventListener('click', isNumValid);

const removeP = () => {
    const insertedP = document.getElementById('inserted-p');
    if (insertedP) {
    resultsDiv.removeChild(insertedP); 
    }
}
clearBtn.addEventListener('click', removeP);