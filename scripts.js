document.addEventListener('DOMContentLoaded', function () {
    // === Particles.js Config ===
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.6,
                    anim: { enable: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: { opacity: 0.7 }
                    },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // === Typing Effect ===
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = "Scptric is Launching Soon ....";
        let i = 0;
        heroTitle.textContent = "";
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText[i];
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    // === Mobile Nav Toggle ===
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
