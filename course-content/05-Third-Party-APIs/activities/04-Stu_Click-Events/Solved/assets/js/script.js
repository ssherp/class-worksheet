// Use the correct selector `#` to select a button by its ID and not class
//The jQuery selector at the top of the file used the incorrect selector syntax and should select by ID and not class:
console.log("$", $)
console.log("$('#password-btn')", $('#password-btn'));
console.log("$('<div>')", $('<div>'));
// selects all elements - h1
console.log("document.querySelectorAll('h1')", document.querySelectorAll('h1'));
console.log("$('h1')", $('h1'));
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  //The fromCharCode() method converts Unicode values into characters.
  //Required. One or more Unicode values to be converted
  //return. A String, representing the character(s) representing the specified unicode number(s)
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
  // Math.floor(Math.random() * 77) => 0-76
  //0-76 + 34 => 34-110
  //https://en.wikipedia.org/wiki/List_of_Unicode_characters
  //https://asecuritysite.com/coding/asc2
}

// Function returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Change the event listener to `click` to make the event trigger on single-click
// Because the .on() method will listen for any valid browser event, we can simply change it to say click:
// https://api.jquery.com/on/
passwordBtnEl.on('click', function () {
  //After the password is generated, it's displayed to the element that passwordDisplayEl references:
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
  // console.log(passwordDisplayEl.textContent);

});


// https://api.jquery.com/on/
// passwordBtnEl.on('dblclick', function () {
//   //After the password is generated, it's displayed to the element that passwordDisplayEl references:
//   var newPassword = passwordGenerator(15);
//   passwordDisplayEl.text(newPassword);
// });

// https://api.jquery.com/click/
// passwordBtnEl.click(function() {
//    //After the password is generated, it's displayed to the element that passwordDisplayEl references:
//   var newPassword = passwordGenerator(15);
//   passwordDisplayEl.text(newPassword);
// });

// https://api.jquery.com/dblclick/
// passwordBtnEl.dblclick(function() {
//    //After the password is generated, it's displayed to the element that passwordDisplayEl references:
//   var newPassword = passwordGenerator(15);
//   passwordDisplayEl.text(newPassword);
// });


//We create the variables first, then the functionality, then the event listener bindings. 
//This approach ensures that everything exists before we put it to use in the JavaScript.