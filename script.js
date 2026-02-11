// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    setupLetterAnimations();
    setupButtonInteractions();
    setupFunButtons();
});

// Create floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartEmojis = ['💕', '💖', '💗', '💝', '💘', '💓', '❤️', '💌'];
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart(heartsContainer, heartEmojis);
        }, i * 300);
    }
    
    // Continue creating hearts periodically
    setInterval(() => {
        createHeart(heartsContainer, heartEmojis);
    }, 2000);
}

function createHeart(container, emojis) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Setup letter animations
function setupLetterAnimations() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });
}

// Setup main button interactions
function setupButtonInteractions() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const responseMessage = document.getElementById('responseMessage');
    const interactiveElements = document.getElementById('interactiveElements');
    
    yesBtn.addEventListener('click', function() {
        handleYesResponse();
    });
    
    noBtn.addEventListener('click', function() {
        handleNoResponse();
    });
}

function handleYesResponse() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    const responseMessage = document.getElementById('responseMessage');
    const interactiveElements = document.getElementById('interactiveElements');
    const mainTitle = document.getElementById('mainTitle');
    
    // Create celebration effect
    createCelebrationExplosion();
    
    // Hide buttons and show message
    buttonsContainer.style.display = 'none';
    responseMessage.innerHTML = 'Katherine said YES!';
    responseMessage.className = 'response-message show';
    responseMessage.style.color = '#d63384';
    
    // Show interactive elements after a delay
    setTimeout(() => {
        interactiveElements.style.display = 'block';
    }, 1500);
    
    // Create extra hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
        }, i * 100);
    }
}

function handleNoResponse() {
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    // Make the no button run away
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.5s ease';
    
    // Show cute message
    responseMessage.innerHTML = '😊 Are you sure? Think about it... 💕';
    responseMessage.className = 'response-message show';
    responseMessage.style.color = '#ff6b9d';
    
    // Change no button text
    noBtn.innerHTML = '<span class="btn-text">Maybe... 🤔</span><span class="btn-sparkle">💭</span>';
    
    // After a few seconds, reset
    setTimeout(() => {
        noBtn.style.position = 'relative';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
        noBtn.innerHTML = '<span class="btn-text">No 💔</span><span class="btn-sparkle">💨</span>';
        responseMessage.className = 'response-message';
    }, 3000);
}

// Setup fun buttons
function setupFunButtons() {
    document.getElementById('hugBtn').addEventListener('click', () => {
        createSpecialEffect('🤗', 'Sending you a big warm hug!');
        createHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
    });
    
    document.getElementById('kissBtn').addEventListener('click', () => {
        createSpecialEffect('😘', 'Blowing you a sweet kiss!');
        createFloatingKisses();
    });
    
    document.getElementById('tongueBtn').addEventListener('click', () => {
        createSpecialEffect('😜', 'You\'re so fun and cute!');
        createTongueEffect();
    });
    
    document.getElementById('flowerBtn').addEventListener('click', () => {
        createSpecialEffect('🌹', 'A beautiful rose for you!');
        createFlowerRain();
    });
    
    document.getElementById('heartBtn').addEventListener('click', () => {
        createSpecialEffect('💝', 'More love coming your way!');
        createMassiveHeartExplosion();
    });
    
    document.getElementById('resetBtn').addEventListener('click', () => {
        resetApp();
    });
}

// Special effect creator
function createSpecialEffect(emoji, message) {
    const effect = document.createElement('div');
    effect.className = 'special-effect';
    effect.textContent = emoji;
    effect.style.left = '50%';
    effect.style.top = '50%';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 2000);
}

// Heart burst effect
function createHeartBurst(x, y) {
    const hearts = ['💕', '💖', '💗', '💝'];
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'special-effect';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 100;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        heart.style.setProperty('--end-x', endX + 'px');
        heart.style.setProperty('--end-y', endY + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// Celebration explosion
function createCelebrationExplosion() {
    const colors = ['#ff6b9d', '#ff8cc8', '#ffb3d9', '#ffc0e6', '#ffd6e7'];
    const container = document.body;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 200 + 100;
        const endX = window.innerWidth / 2 + Math.cos(angle) * velocity;
        const endY = window.innerHeight / 2 + Math.sin(angle) * velocity;
        
        particle.style.transition = 'all 1s ease-out';
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.style.left = endX + 'px';
            particle.style.top = endY + 'px';
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Floating kisses
function createFloatingKisses() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'special-effect';
            kiss.textContent = '😘';
            kiss.style.left = Math.random() * window.innerWidth + 'px';
            kiss.style.top = window.innerHeight + 'px';
            kiss.style.animation = 'floatUp 3s ease-out forwards';
            
            document.body.appendChild(kiss);
            
            setTimeout(() => {
                kiss.remove();
            }, 3000);
        }, i * 200);
    }
}

// Make elements dance
function makeElementsDance() {
    const elements = document.querySelectorAll('.fun-btn, .celebration-title');
    elements.forEach((el, index) => {
        el.style.animation = `dance 0.5s ease-in-out ${index * 0.1}s`;
    });
    
    // Add dance keyframe if not exists
    if (!document.querySelector('#dance-style')) {
        const style = document.createElement('style');
        style.id = 'dance-style';
        style.textContent = `
            @keyframes dance {
                0%, 100% { transform: rotate(0deg) scale(1); }
                25% { transform: rotate(-5deg) scale(1.05); }
                75% { transform: rotate(5deg) scale(1.05); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Flower rain
function createFlowerRain() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'special-effect';
            flower.textContent = '🌹';
            flower.style.left = Math.random() * window.innerWidth + 'px';
            flower.style.top = '-50px';
            flower.style.animation = 'fall 3s ease-in forwards';
            
            document.body.appendChild(flower);
            
            setTimeout(() => {
                flower.remove();
            }, 3000);
        }, i * 150);
    }
    
    // Add fall keyframe if not exists
    if (!document.querySelector('#fall-style')) {
        const style = document.createElement('style');
        style.id = 'fall-style';
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Massive heart explosion
function createMassiveHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '❤️'];
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'special-effect';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 50);
    }
}

// Tongue effect
function createTongueEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const tongue = document.createElement('div');
            tongue.className = 'special-effect';
            tongue.textContent = '😜';
            tongue.style.left = Math.random() * window.innerWidth + 'px';
            tongue.style.top = Math.random() * window.innerHeight + 'px';
            tongue.style.fontSize = (Math.random() * 25 + 20) + 'px';
            
            document.body.appendChild(tongue);
            
            setTimeout(() => {
                tongue.remove();
            }, 2000);
        }, i * 100);
    }
}

// Reset app
function resetApp() {
    location.reload();
}

// Add some extra interactivity
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.01) { // 1% chance on mouse move
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '5px';
        trail.style.height = '5px';
        trail.style.backgroundColor = '#ff8cc8';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '999';
        trail.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(3)';
        }, 10);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
});
