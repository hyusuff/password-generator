// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*()".split("");

function generatePassword() {
  var pre = [];
  var post = "";
  var passwordLength = prompt("how long do you want the password to be?");
  console.log(passwordLength);
  if (passwordLength > 7 && passwordLength < 129) {
    if (confirm("Would you like uppercase characters in your password?")) {
      pre = pre.concat(uppercase);
    }
    if (confirm("Would you like lowercase characters in your password?")) {
      pre = pre.concat(lowercase);
    }
    if (confirm("Would you like number characters in your password?")) {
      pre = pre.concat(numbers);
    }
    if (confirm("Would you like symbols characters in your password?")) {
      pre = pre.concat(symbols);
    }
    if (pre.length == 0) {
      alert("you must choose at least one to create a password");
      generatePassword();
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var mix = Math.floor(Math.random() * pre.length);
        post += pre[mix];
      }
    }
    return post;
  } else {
    alert("your password must be between 8 and less than 128 characters");
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
