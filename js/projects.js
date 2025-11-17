// Projects JavaScript

// Project images - If images are not available, generate gradients
(function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectImg = card.querySelector('.project-img');
        if (!projectImg.querySelector('img')) {
            generateGradientBackground(projectImg, card.dataset.category);
        }
    });
    
    function generateGradientBackground(element, category) {
        let color1, color2;
        
        switch(category) {
            case 'data-science':
                color1 = '#4ECDC4';
                color2 = '#1A535C';
                break;
            case 'finance':
                color1 = '#E6C67C';
                color2 = '#7C3238';
                break;
            case 'systems':
                color1 = '#3D5A80';
                color2 = '#0A1128';
                break;
            default:
                color1 = '#4ECDC4';
                color2 = '#1A535C';
        }
        
        // Create gradient pattern
        const patternType = Math.floor(Math.random() * 3);
        let gradient;
        
        switch(patternType) {
            case 0:
                gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
                break;
            case 1:
                gradient = `radial-gradient(circle at 70% 30%, ${color1}, ${color2})`;
                break;
            case 2:
                gradient = `linear-gradient(to right, ${color1}, ${color2})`;
                break;
        }
        
        element.style.background = gradient;
        
        // Add decorative elements based on project category
        const decoration = document.createElement('div');
        decoration.classList.add('project-decoration');
        
        if (category === 'data-science') {
            decoration.innerHTML = `
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.2">
                    <circle cx="20" cy="20" r="5" fill="white"/>
                    <circle cx="50" cy="30" r="8" fill="white"/>
                    <circle cx="80" cy="60" r="6" fill="white"/>
                    <circle cx="30" cy="70" r="10" fill="white"/>
                    <circle cx="70" cy="20" r="4" fill="white"/>
                    <line x1="20" y1="20" x2="50" y2="30" stroke="white" stroke-width="1"/>
                    <line x1="50" y1="30" x2="80" y2="60" stroke="white" stroke-width="1"/>
                    <line x1="80" y1="60" x2="30" y2="70" stroke="white" stroke-width="1"/>
                    <line x1="30" y1="70" x2="20" y2="20" stroke="white" stroke-width="1"/>
                    <line x1="50" y1="30" x2="70" y2="20" stroke="white" stroke-width="1"/>
                </svg>
            `;
        } else if (category === 'finance') {
            decoration.innerHTML = `
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.2">
                    <path d="M10 70 L20 60 L30 65 L40 55 L50 58 L60 45 L70 50 L80 30 L90 40" stroke="white" stroke-width="2" fill="none"/>
                    <line x1="10" y1="80" x2="90" y2="80" stroke="white" stroke-width="1"/>
                    <line x1="10" y1="80" x2="10" y2="20" stroke="white" stroke-width="1"/>
                </svg>
            `;
        } else if (category === 'systems') {
            decoration.innerHTML = `
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.2">
                    <rect x="20" y="20" width="60" height="10" fill="white"/>
                    <rect x="20" y="40" width="40" height="10" fill="white"/>
                    <rect x="20" y="60" width="50" height="10" fill="white"/>
                    <text x="85" y="28" fill="white" font-family="monospace" font-size="8">$</text>
                    <text x="65" y="48" fill="white" font-family="monospace" font-size="8">$</text>
                    <text x="75" y="68" fill="white" font-family="monospace" font-size="8">$</text>
                </svg>
            `;
        }
        
        element.appendChild(decoration);
    }
})();

// Project filter animation effects
(function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event listeners to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add subtle animation to buttons
            btn.classList.add('pulse-animation');
            setTimeout(() => {
                btn.classList.remove('pulse-animation');
            }, 300);
        });
    });
})();

// Project hover effects
(function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Enhanced hover effect with slight rotation
        card.addEventListener('mouseenter', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateY = ((mouseX - cardCenterX) / (cardRect.width / 2)) * 3;
            const rotateX = ((cardCenterY - mouseY) / (cardRect.height / 2)) * 3;
            
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateY = ((mouseX - cardCenterX) / (cardRect.width / 2)) * 3;
            const rotateX = ((cardCenterY - mouseY) / (cardRect.height / 2)) * 3;
            
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
})();

// Project detail modal animation
(function() {
    const projectModal = document.querySelector('.project-modal');
    if (!projectModal) return;
    
    const modalContainer = projectModal.querySelector('.modal-container');
    
    projectModal.addEventListener('transitionend', () => {
        if (projectModal.classList.contains('active')) {
            modalContainer.classList.add('animate-content');
        } else {
            modalContainer.classList.remove('animate-content');
        }
    });
})();


