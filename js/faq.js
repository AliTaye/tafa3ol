/** Accordion مطابق للسلوك الأصلي: سؤال واحد مفتوح، والضغط ثانية يغلقه. */
export function initFaq() {
  const region = document.getElementById('faqItems');
  if (!region) return;
  region.addEventListener('click', (event) => {
    const button = event.target.closest('button[aria-controls]');
    if (!button || !region.contains(button)) return;

    const wasExpanded = button.getAttribute('aria-expanded') === 'true';
    region.querySelectorAll('button[aria-controls]').forEach((item) => {
      item.setAttribute('aria-expanded', 'false');
      item.querySelector('.faq-icon').textContent = '+';
      document.getElementById(item.getAttribute('aria-controls'))?.classList.add('hidden');
    });
    if (!wasExpanded) {
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.faq-icon').textContent = '−';
      document.getElementById(button.getAttribute('aria-controls'))?.classList.remove('hidden');
    }
  });
}
