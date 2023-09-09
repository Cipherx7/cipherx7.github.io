// script.js

function type() {
    const target = document.getElementById('typing');
    const text = "Abhishek Pawar";
    let index = 0;

    function typeNextCharacter() {
        target.textContent += text[index];
        index++;
        if (index < text.length) {
            const randomPause = Math.floor(Math.random() * 300) + 100; // Random pause between 100ms and 400ms
            setTimeout(typeNextCharacter, randomPause);
        }
    }

    let cursorVisible = true;
    const cursorInterval = setInterval(() => {
        const cursor = document.getElementById('cursor');
        if (cursor) {
            cursor.style.visibility = cursorVisible ? 'visible' : 'hidden';
            cursorVisible = !cursorVisible;
        }
    }, 500); // Cursor blink speed (500ms)

    typeNextCharacter();

    // Stop cursor blinking after typing is complete
    setTimeout(() => {
        clearInterval(cursorInterval);
        const cursor = document.getElementById('cursor');
        if (cursor) {
            cursor.style.visibility = 'visible'; // Ensure cursor is visible at the end
        }
    }, text.length * 250); // Adjust the timing as needed
}

window.addEventListener('load', type);

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const toggleBtn = document.querySelector('.toggle-btn');
    const symbol = document.querySelector('.symbol');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.style.backgroundColor = '#000000';
        toggleBtn.style.color = '#ffffff';
        symbol.innerHTML = '&#9728;'; // Change symbol to a sun "&#9728;"
    } else {
        toggleBtn.style.backgroundColor = '#f0f0f0';
        toggleBtn.style.color = '#000000';
        symbol.innerHTML = '&#9732;'; // Change symbol to a moon "&#9732;"
    }
}

$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  var twitterPos = $('#twitter').position();
  var githubPos = $('#github').position();
  var stackPos = $('#stack').position();
  var linkedinPos = $('#linkedin').position();
  var codePos = $('#code').position();
  var plusPos = $('#plus').position();
  var mailPos = $('#mail').position();
  var imgPos = $('.me').position();
  
  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top + 100,
    left: '47%'
  });
  
  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top + 10,
      left: twitterPos.left - 10
    }, 500);
  }, 250);
  
  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top,
      left: twitterPos.left
    }, 250);
    
    $('#github').animate({
      top: githubPos.top + 10,
      left: githubPos.left - 6
    }, 500);
  }, 500);
  
  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top,
      left: githubPos.left
    }, 250);
    
    $('#stack').animate({
      top: stackPos.top + 10,
      left: stackPos.left - 3
    }, 500);
  }, 750);
  
  setTimeout(function() {
    $('#stack').animate({
      top: stackPos.top,
      left: stackPos.left
    }, 250);
    
    $('#linkedin').animate({
      top: linkedinPos.top + 10,
      left: linkedinPos.left
    }, 500);
  }, 1000);
  
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);
    
    $('#code').animate({
      top: codePos.top + 10,
      left: codePos.left + 3
    }, 500);
  }, 1250);
  
  setTimeout(function() {
    $('#code').animate({
      top: codePos.top,
      left: codePos.left
    }, 250);
    
    $('#plus').animate({
      top: plusPos.top + 10,
      left: plusPos.left + 6
    }, 500);
  }, 1500);
  
  setTimeout(function() {
    $('#plus').animate({
      top: plusPos.top,
      left: plusPos.left
    }, 250);
    
    $('#mail').animate({
      top: mailPos.top + 10,
      left: mailPos.left + 10
    }, 500);
  }, 1750);
  
  setTimeout(function() {
    $('#mail').animate({
      top: mailPos.top,
      left: mailPos.left
    }, 250);
  }, 2000);
  
})
