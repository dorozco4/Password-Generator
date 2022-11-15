// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
 
var signInput = window.prompt("How long should the password be?")

var passwordLength = parseInt(signInput)

var confirmNumbers= window.confirm("Would you like to add numbers?")
var confirmUppercase= window.confirm("Would you like to add upper case letters?")
var confirmLowercase= window.confirm("Would you like to add lower case letters?")
var confirmSymbols= window.confirm("Would you like to add symbol(s)?")


if (isNaN(passwordLength)) {
  window.alert("This is not a number!")
  return
} 
  
if (passwordLength < 8 || passwordLength > 128) {
    window.alert(" Password is too short or not long enough")
    return
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
n 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)