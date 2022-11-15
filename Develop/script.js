// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector('#password')


function generatePassword() {
  console.log("Password has been entered!")
  


  return "Password goes here"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 