const GOOGLE_FORM_URL = 'https://forms.gle/sQmWoPeUZXBgLm9v8';

export function initNavigation() {
  document.querySelectorAll('.google-form-link').forEach((link) => {
    link.href = GOOGLE_FORM_URL;
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const header = document.querySelector('header');

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', String(!isHidden));
  }
  mobileMenuBtn?.addEventListener('click', toggleMobileMenu);
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', toggleMobileMenu);
  });

  function handleMobileNavMorph() {
    if (!header) return;
    if (window.innerWidth < 768) {
      if (window.scrollY > 50) {
        header.classList.remove('mobile-nav-hidden');
        header.classList.add('mobile-nav-visible');
      } else {
        header.classList.remove('mobile-nav-visible');
        header.classList.add('mobile-nav-hidden');
      }
    } else {
      header.classList.remove('mobile-nav-hidden', 'mobile-nav-visible');
    }
  }
  window.addEventListener('scroll', handleMobileNavMorph, { passive: true });
  window.addEventListener('resize', handleMobileNavMorph);
  handleMobileNavMorph();
}
