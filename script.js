document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const animationType = target.dataset.animate;

                if (animationType) {
                    target.classList.add(animationType);
                } else {
                    target.classList.add('animate-fade-up'); // Default
                }

                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const sections = document.querySelectorAll('.section-title');
    const eduCards = document.querySelectorAll('.edu-card');
    const skillCats = document.querySelectorAll('.skill-category');
    const projectCards = document.querySelectorAll('.project-card');
    const certCards = document.querySelectorAll('.cert-card');

    // Apply initial hidden state and data attributes
    sections.forEach(el => {
        el.classList.add('animate-hidden');
        el.dataset.animate = 'animate-pop';
        observer.observe(el);
    });

    eduCards.forEach((el, index) => {
        el.classList.add('animate-hidden');
        el.dataset.animate = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
        observer.observe(el);
    });

    skillCats.forEach((el, index) => {
        el.classList.add('animate-hidden');
        el.style.animationDelay = `${index * 0.2}s`;
        el.dataset.animate = 'animate-fade-up';
        observer.observe(el);
    });

    projectCards.forEach((el, index) => {
        el.classList.add('animate-hidden');
        el.dataset.animate = 'animate-pop';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    certCards.forEach((el, index) => {
        el.classList.add('animate-hidden');
        el.dataset.animate = 'animate-pop';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });
});
