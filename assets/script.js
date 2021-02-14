// Assignment Code
var generateBtn = document.querySelector("#generate");
var button = document.querySelector("#card-footer");
var special = "!#$%&'()*+,-./:;<=>?@]{^_`{|}~"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var num = "0123456789"

// This function allows prompts/confirms to appear when button is clicked
function generatePassword() {
var userChoice =  prompt("Please choose number between 8-128");
if (userChoice < 8 || userChoice > 128) {
  alert("Choose between 8-128");
  prompt("Please choose number between 8-128");
}
var bigLetter = confirm("Would you like Upper Case letters?");
var smallLetter = confirm("Would you like Lower Case letters?");
var symbols = confirm("Would you like special characters?");
console.log(userChoice, bigLetter, smallLetter, symbols)
// add algorithm here
}




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
