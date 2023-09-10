// script.js
document.addEventListener('DOMContentLoaded', function() {
  var textElement = document.getElementById('typedText');
  var textToType = 'Abhishek..';
  var speed = 100; // Typing speed in milliseconds

  function typeText(index) {
    if (index < textToType.length) {
      textElement.innerHTML += textToType.charAt(index);
        index++;
      setTimeout(function() {
        typeText(index);
      }, speed);
    }
  }

  typeText(0);
  });
