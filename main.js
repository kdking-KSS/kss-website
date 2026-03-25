document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Scroll-triggered nav background blur
    const header = document.querySelector('.site-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Initial check on page load
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
    }

    // Active page link highlight
    const currentLocation = location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    if (navItems.length > 0) {
        navItems.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentLocation || (currentLocation === '/' && linkPath === 'index.html')) {
                // Don't underline buttons
                if (!link.classList.contains('btn-primary')) {
                    link.classList.add('active');
                }
            }
        });
    }

    // Formspree custom submission handling (if contact form exists)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            const statusMessage = document.getElementById('form-status');
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    if (statusMessage) {
                        statusMessage.innerHTML = "Got it. KD will be in touch within 2 business days.";
                        statusMessage.style.color = "var(--color-purple-mid)";
                        statusMessage.style.display = "block";
                        statusMessage.style.marginTop = "20px";
                        statusMessage.style.fontWeight = "600";
                    } else {
                        alert("Got it. KD will be in touch within 2 business days.");
                    }
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                if (statusMessage) {
                    statusMessage.innerHTML = "Oops! There was a problem submitting your form.";
                    statusMessage.style.color = "red";
                    statusMessage.style.display = "block";
                    statusMessage.style.marginTop = "20px";
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            }
        });
    }
});
