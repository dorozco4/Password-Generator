// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min 
    min = 0
 }
 var rand = Math.random()
 return Math.floor(min*( 1 - rand ) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {
 
// started the window inputs by asking the user questions.
// if they do not put a number when asked from the first prompt, then they
// get a message saying this is not a number 
// then depending on the answer they give us, they get whether its too short or too long.


var signInput = window.prompt("How long should the password be?")

var passwordLength = parseInt(signInput)




if (isNaN(passwordLength)) {
  window.alert("This is not a number!")
  return
} 
  
if (passwordLength < 8 || passwordLength > 128) {
    window.alert(" Password is too short or too long enough")
    return
}

// then added a few more windows by asking if they wanted the numbers, upper/lower cased letters, and/or symboles.


var confirmNumbers= window.confirm("Would you like to add numbers?")
var confirmUppercase= window.confirm("Would you like to add upper case letters?")
var confirmLowercase= window.confirm("Would you like to add lower case letters?")
var confirmSymbols= window.confirm("Would you like to add symbol(s)?")


var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
var lowerCase = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
'w', 'x', 'y','z')
var symbolsS = ('!','@','#','$','%','^','*','?')


// had to make an array inside and array? for the numbers/letters/symbols all to be in one spot 
var randomItems = []

// Depending on their answe the bottom part will include what the user is aking for.

if (confirmNumbers === true) {
  randomItems.push(numbers)
}
if (confirmUppercase === true) {
  randomItems.push(upperCase)
}
if (confirmLowercase === true) {
  randomItems.push(lowerCase) 
} 
if (confirmSymbols === true) {
  randomItems.push(symbolsS)
}


var generatePassword = "" 


for (var i = 0; i < passwordLength; i++) { 
  var randomList = getRandomItem(randomItems) 
  var randomchar = getRandomItem(randomList)
  generatePassword += randomchar
}

return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  if(password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

