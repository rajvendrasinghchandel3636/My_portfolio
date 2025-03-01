  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero section text animation
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".hero-content h1");
    title.style.opacity = "0";
    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transition = "opacity 1.5s ease-in-out";
    }, 500);
});