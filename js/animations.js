/** الحركات المرئية الأصلية: شريط التمرير + إظهار العناصر ودخولها/خروجها. */
export function initAnimations() {
  const progressEl = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (progressEl) progressEl.style.width = `${height > 0 ? (winScroll / height) * 100 : 0}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // استدعاء المراقب بعد إنشاء المكونات حتى لا تفوته العناصر المضافة حديثًا.
  const revealElements = document.querySelectorAll('.reveal-element');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
      else entry.target.classList.remove('revealed');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el) => revealObserver.observe(el));
}
