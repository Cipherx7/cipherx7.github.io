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
