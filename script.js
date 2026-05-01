document.addEventListener('DOMContentLoaded', () => {

    // Page loader
    document.body.classList.add('loading');
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.classList.remove('loading');
            }, 2000);
        }
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('toggle');
            navLinks.classList.toggle('active');
        });
        
        // Close menu on nav link click
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('toggle');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Close menu when clicking outside navbar
    document.addEventListener('click', function(e) {
        if (navLinks && hamburger) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        }
    });

    // Sticky navbar - glass effect on scroll
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll reveal
    document.querySelectorAll('.fade-in-up').forEach(el => {
        new IntersectionObserver(e => {
            if (e[0].isIntersecting) e[0].target.classList.add('visible');
        }, { threshold: 0.1 }).observe(el);
    });

    // Testimonials - infinite scroll
    const ts = document.querySelector('.testimonials-scroll');
    if (ts) {
        ts.querySelectorAll('.testimonial-card').forEach(c => ts.appendChild(c.cloneNode(true)));
    }

    // Hero slideshow
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let i = 0;
        setInterval(() => {
            slides[i].classList.remove('active');
            i = (i + 1) % slides.length;
            slides[i].classList.add('active');
        }, 5000);
    }
});