window.alert('Welcome to Abdulsalam Portfolio');

// Menu Bar Responsive
function toggleMenu() {
    let navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

const textElement = document.getElementById('dynamic-text');
const text = textElement.textContent;
textElement.textContent = '';

let index = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 1000;

function type() {
    if (isDeleting) {
        if (index > 0) {
            index--;
            textElement.textContent = text.substring(0, index);
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = false;
            setTimeout(type, pauseDuration);
        }
    } else {
        if (index < text.length) {
            index++;
            textElement.textContent = text.substring(0, index);
            setTimeout(type, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(type, pauseDuration);
        }
    }
}

type();
