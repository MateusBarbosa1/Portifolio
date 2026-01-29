// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link (apenas em mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Só fecha o menu se estiver em modo mobile (hamburger visível)
        if (window.getComputedStyle(hamburger).display !== 'none') {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Animação de fade-in ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.tech-card, .project-card, .stat').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Efeito de glow ao mover o mouse na hero section
const hero = document.querySelector('.hero');
if (hero) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        hero.style.background = `
            radial-gradient(circle at ${x * 100}% ${y * 100}%, 
            rgba(139, 92, 246, 0.1) 0%, 
            rgba(10, 14, 39, 1) 100%)
        `;
    });
}

// Contador animado para stats
const stats = document.querySelectorAll('.stat-number');
const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
};

// Observar stats para iniciar animação
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animated) {
            entry.target.animated = true;
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

// Efeito hover nos botões
document.querySelectorAll('.btn, .link-btn, .contact-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Navbar sticky com efeito
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(180deg, rgba(10, 14, 39, 0.98) 0%, rgba(10, 14, 39, 0.9) 100%)';
        navbar.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.1)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(10, 14, 39, 0.8) 100%)';
        navbar.style.boxShadow = 'none';
    }
});

// Ripple effect ao clicar
document.querySelectorAll('.btn, .link-btn, .contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('✨ Portfólio carregado com sucesso!');
