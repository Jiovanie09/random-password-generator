var x = "0123456789~!@#$%^&*()_+[]{},./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function getVal() {
  var characters = ""
  var length = parseInt(prompt("How long should your password be?"))
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Password length must be between 8 and 128. How long should your password be?"))
  }

  var shouldUseNumbers = confirm("Should I use numbers?")
  if (shouldUseNumbers) {
    characters += "0123456789"
  }
  var shouldUseUpperCase = confirm("should I use Uppercase characters?")
  if (shouldUseUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var shouldUseLowerCase = confirm("should I use Lowercase characters?")
  if (shouldUseLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  var shouldUseSymbolsCase = confirm("should I use Symbol characters?")
  if (shouldUseSymbolsCase) {
    characters += "~!@#$%^&*()_+[]{},./"
  }
  var password = '';
  for (var i = 0; i < length; i++) {
    var c = Math.floor((Math.random() * characters.length) + 0);
    password += characters.charAt(c);
  }
  document.getElementById("pass").value = password;
}

document.getElementById("generate").addEventListener("click",getVal)
