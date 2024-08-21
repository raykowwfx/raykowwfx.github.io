// Adding Sound Effects to Buttons
document.querySelectorAll('.glow-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const sound = new Audio('sounds/hover.mp3');
        sound.play();
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
