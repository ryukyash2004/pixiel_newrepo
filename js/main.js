// Retro Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive elements
    initNavigation();
    initAnimations();
    initSoundEffects();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add pixel animation effect
            link.classList.add('pixel-animate');
            setTimeout(() => {
                link.classList.remove('pixel-animate');
            }, 300);
        });
    });
}

// Animation effects
function initAnimations() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('pixel-animate');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('pixel-animate');
        });
    });
}

// Sound effects (optional)
function initSoundEffects() {
    const soundEnabled = localStorage.getItem('soundEnabled') === 'true';
    const soundToggle = document.getElementById('sound-toggle');
    
    if (soundToggle) {
        soundToggle.checked = soundEnabled;
        
        soundToggle.addEventListener('change', (e) => {
            localStorage.setItem('soundEnabled', e.target.checked);
        });
    }
    
    // Add click sound to buttons if sound is enabled
    if (soundEnabled) {
        const buttons = document.querySelectorAll('.btn');
        const clickSound = new Audio('sounds/click.mp3');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                clickSound.currentTime = 0;
                clickSound.play().catch(() => {
                    // Handle autoplay restrictions
                    console.log('Sound playback prevented by browser');
                });
            });
        });
    }
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}); 