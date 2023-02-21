const valInput = document.querySelector('#validation-input');

valInput.addEventListener('blur', borderColor);

function borderColor(event) {
    const inputDataLength = Number(valInput.dataset.length);
    const inputValueLength = Number(valInput.value.trim().length);
  
    if (inputValueLength === inputDataLength) {
        valInput.classList.add('valid');
        valInput.classList.remove('invalid');
    } else {
        valInput.classList.remove('valid');
        valInput.classList.add('invalid');
    }
}
console.log(valInput)
