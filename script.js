// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.setAttribute('aria-expanded', String(!expanded));
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Hint the WhatsApp tooltip on first load
window.addEventListener('load', () => {
  const tip = document.querySelector('.whatsapp-float .wa-tip');
  if (!tip) return;
  tip.style.transition = 'none';
  tip.style.opacity = '1';
  tip.style.transform = 'translateY(0)';
  setTimeout(() => {
    tip.style.transition = '';
    tip.style.opacity = '';
    tip.style.transform = '';
  }, 1600);
});


