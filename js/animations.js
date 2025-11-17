// Animations JavaScript

// Hero Canvas Background
(function() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = '#F1FAEE';
            this.alpha = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.size > 0.2) this.size -= 0.01;
            
            // Wrap particles around the screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particle array
    let particles = [];
    function initParticles() {
        particles = [];
        const particleCount = Math.floor(canvas.width * canvas.height / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push(new Particle(x, y));
        }
    }
    
    initParticles();
    window.addEventListener('resize', initParticles);
    
    // Connect particles with lines
    function connectParticles() {
        const maxDistance = 150;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(241, 250, 238, ${opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Mouse interaction
    let mouse = {
        x: null,
        y: null,
        radius: 100
    };
    
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw and update particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Mouse interaction
            if (mouse.x && mouse.y) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const forceX = dx / distance;
                    const forceY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    
                    particles[i].x += forceX * force * 2;
                    particles[i].y += forceY * force * 2;
                }
            }
        }
        
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    animate();
})();

// Text typing animation
(function() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeChar() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, Math.random() * 50 + 50);
            }
        }
        
        // Start typing animation when element is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeChar, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
})();

// Parallax effect
(function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    });
})();

// GSAP animations (if GSAP is loaded)
(function() {
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from('.hero-badge', {
            opacity: 0,
            y: -20,
            duration: 1,
            delay: 0.3
        });
        
        gsap.from('.hero-title', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5
        });
        
        gsap.from('.hero-description', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.7
        });
        
        gsap.from('.hero-actions', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.9
        });
        
        // Section titles animation
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8
            });
        });
        
        // Staggered card animations
        gsap.utils.toArray('.experience-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: i * 0.15
            });
        });
        
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: i * 0.15
            });
        });
    }
})();
// Add to animations.js - Enhanced hero background

// Add this function to create a more dynamic background
function enhanceHeroBackground() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Create floating elements
    const floatingElements = document.createElement('div');
    floatingElements.classList.add('floating-elements');
    
    // Add 15 floating shapes
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Randomize position, size, and animation
        const size = Math.random() * 60 + 10;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animDuration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.15 + 0.05;
        
        // Apply styles
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.animationDuration = `${animDuration}s`;
        element.style.animationDelay = `${delay}s`;
        element.style.opacity = opacity;
        
        // Add shape variation
        const shapeType = Math.floor(Math.random() * 4);
        switch(shapeType) {
            case 0:
                element.classList.add('floating-circle');
                break;
            case 1:
                element.classList.add('floating-square');
                break;
            case 2:
                element.classList.add('floating-triangle');
                break;
            case 3:
                element.classList.add('floating-plus');
                break;
        }
        
        floatingElements.appendChild(element);
    }
    
    // Add mouse parallax effect
    heroSection.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        floatingElements.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Add to hero section
    heroSection.appendChild(floatingElements);
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', enhanceHeroBackground);


