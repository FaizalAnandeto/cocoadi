function Menu(button) {
    const list = document.getElementById('list');
    const isOpen = button.name === 'menu-outline';

    button.name = isOpen ? 'close-outline' : 'menu-outline';
    button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    button.setAttribute('aria-expanded', String(isOpen));
    list.classList.toggle('opacity-100', isOpen);
}

const siteNav = document.getElementById('site-nav');

if (siteNav) {
    const updateNavbar = () => siteNav.classList.toggle('is-scrolled', window.scrollY > 24);

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
}