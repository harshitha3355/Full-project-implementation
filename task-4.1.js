const textArray = ["Web Developer", "Graphic Designer", "Creative Thinker"];
let textIndex = 0;
let charIndex = 0;
const baseTypingSpeed = 100; 
const baseErasingSpeed = 50; 
const pauseBetweenTexts = 2000; 

function getRandomSpeed(baseSpeed) {
    return baseSpeed + Math.floor(Math.random() * 50) - 25;
}

function type() {
    if (charIndex < textArray[textIndex].length) {
        document.querySelector(".t-text").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, getRandomSpeed(baseTypingSpeed));
    } else {
        setTimeout(erase, pauseBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector(".t-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, getRandomSpeed(baseErasingSpeed));
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

function hamburg() {
    if (window.innerWidth <= 768) { 
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.add('show');
        document.querySelector('.hamburg').style.display = 'none';
        document.querySelector('.cancel').style.display = 'block';
    }
}

function cancel() {
    if (window.innerWidth <= 768) {
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.remove('show');
        document.querySelector('.hamburg').style.display = 'block';
        document.querySelector('.cancel').style.display = 'none';
    }
}

document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        cancel();
    });
});