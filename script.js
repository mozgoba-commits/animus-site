/* ===== Hero entrance orchestration ===== */
document.addEventListener('DOMContentLoaded', () => {
    const heroEls = document.querySelectorAll('.hero__tag, .hero__title, .hero__sub, .hero__actions');
    heroEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity .8s cubic-bezier(.22,1,.36,1) ${i * .15 + .2}s, transform .8s cubic-bezier(.22,1,.36,1) ${i * .15 + .2}s`;
    });
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            heroEls.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        });
    });
});

/* ===== Reveal on scroll ===== */
const reveals = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

/* ===== Header scroll state ===== */
const header = document.getElementById('header');
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            header.classList.toggle('scrolled', window.scrollY > 60);
            ticking = false;
        });
        ticking = true;
    }
});

/* ===== Mobile nav ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});
nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
    });
});

/* ===== Form (placeholder) ===== */
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Отправлено!';
    btn.disabled = true;
    btn.style.opacity = '.7';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.opacity = '';
        e.target.reset();
    }, 3000);
});
