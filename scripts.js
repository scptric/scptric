document.addEventListener('DOMContentLoaded', function () {
    // --- Particles.js Configuration ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.3,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.7
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // --- Typing Effect Setup ---
    const heroTitle = document.querySelector('.hero-content h1');
    const heroParagraph = document.querySelector('.hero-content p');

    if (heroTitle) {
        // Store the original text
        const originalText = heroTitle.textContent;

        function typeText(element, text, speed = 100) {
            return new Promise((resolve) => {
                let i = 0;
                element.textContent = '';
                const interval = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(interval);
                        resolve();
                    }
                }, speed);
            });
        }

        async function startTypingEffect() {
            // Hide paragraph initially
            if (heroParagraph) {
                heroParagraph.style.opacity = '0';
                heroParagraph.style.animation = 'none';
            }

            // Run typing effect
            await typeText(heroTitle, originalText, 100);

            // Show paragraph after typing completes
            if (heroParagraph) {
                heroParagraph.style.animation = 'fadeIn 1s ease-in forwards';
            }
        }

        // Start the typing effect
        startTypingEffect();
    }
});

