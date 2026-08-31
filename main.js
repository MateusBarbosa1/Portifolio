// Terminal Editorial: interações diretas, rápidas e discretas; sem dependência de framework.
const header = document.querySelector('#site-header');
const nav = document.querySelector('#main-nav');
const menuButton = document.querySelector('#menu-button');
const currentYear = document.querySelector('#current-year');

if (currentYear) currentYear.textContent = new Date().getFullYear();

const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
};

menuButton?.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealItems.forEach((item, index) => {
    item.style.animationDelay = `${Math.min(index * 35, 280)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
