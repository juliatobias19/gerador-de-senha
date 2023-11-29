// const inputEl = document.querySelector("#password")
let inputEl;
const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")

let passwordLength = 16

function generatePassword() {
    let chars = "abcdefghjklmnpqrstuvwxyz"

    const upperCaseChars = "ABCDEFGHKLMPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "!@#$%&?()[]{}" 

    if (upperCaseCheckEl.checked) {
        chars += upperCaseChars
      }

    if (numberCheckEl.checked) {
    chars += numberChars
    }

    if (symbolCheckEl.checked) {
    chars += symbolChars
    }

    let password = ""

    for(let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    inputEl.value = password
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

document.addEventListener("DOMContentLoaded", function() {
    inputEl = document.querySelector("#password");

    const passwordLengthEl = document.querySelector("#password-length");
    passwordLengthEl.addEventListener("input", function(){
        passwordLength = parseInt(passwordLengthEl.value);
        generatePassword();
    });

    upperCaseCheckEl.addEventListener("click", generatePassword)
    numberCheckEl.addEventListener("click", generatePassword)
    symbolCheckEl.addEventListener("click", generatePassword)

    document.querySelector("#copy-1").addEventListener('click', copy);
    document.querySelector("#copy-2").addEventListener('click', copy);

    generatePassword();
});
    
    // // *
    // document.addEventListener("DOMContentLoaded", function() {
    //     generatePassword();
    // });
    // //* Necessário pois está sendo usado em arquivos diferentes       

