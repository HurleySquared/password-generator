// Assignment Code
var generateBtn = document.querySelector("#generate");
var button = document.querySelector("#card-footer");
var userChoice = "";

// This function allows prompts/confirms to appear when button is clicked
function generatePassword() {
  // variables to be added to user password if accepted
  var special = "!#$%&'()*+,-./:;<=>?@]{^_`{|}~";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  
  var userChoice = prompt("Please choose number between 8-128");
  if (userChoice < 8 || userChoice > 128) {
    alert("Choose between 8-128");
    return;
  }
  
  var bigLetter = confirm("Would you like Upper Case letters?\n(OK if yes)");
  var smallLetter = confirm("Would you like Lower Case letters?\n(OK if yes)");
  var numbers = confirm("Would you like numbers?\n(OK if yes)");
  var symbols = confirm("Would you like special characters?\n(OK if yes)");
  // Console log the number of characters and yes(true) or no(false) to options
  console.log(userChoice, bigLetter, smallLetter, numbers, symbols);
  
  var userPass = "";
  // If statements to gather strings based on userChoice
  if (bigLetter === true) {
    userPass = userPass.concat(upper);
  }
  if (smallLetter === true) {
    userPass = userPass.concat(lower);
  }
  if (numbers === true) {
    userPass = userPass.concat(num);
  }
  if (symbols === true) {
    userPass = userPass.concat(special);
  }
  // cosole.log the user choices to see selected strings
  console.log(userPass);
  
  var newUserPass = "";
  // Leaves var newUserPass an empty string until 'for loop' is factored
  for (var i = 0; i < userChoice; i++) {
    newUserPass = newUserPass + userPass[Math.floor(Math.random() * userPass.length)];
    console.log(newUserPass)
  } 
  return newUserPass;
  
} //Ending Function squirly bracket 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

