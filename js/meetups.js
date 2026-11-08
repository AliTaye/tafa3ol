/** فلترة اللقاءات بألوانها وحركة السلايدر الحالية (250ms). */
export function initMeetups(meetups) {
  const grid = document.getElementById('meetupsGrid');
  const emptyState = document.getElementById('emptyFilterState');
  const slider = document.getElementById('filter-slider');
  const buttons = Array.from(document.querySelectorAll('.filter-btn'));
  if (!grid) return;

  // المصدر الوحيد للعدد: مصفوفة البيانات، وليس جميع عناصر DOM المتداخلة.
  document.getElementById('count-all').textContent = String(meetups.length);
  document.getElementById('count-upcoming').textContent = String(meetups.filter((m) => m.status === 'upcoming').length);
  document.getElementById('count-past').textContent = String(meetups.filter((m) => m.status === 'past').length);

  function updateSliderPosition(button) {
    if (!button || !slider) return;
    slider.style.width = `${button.offsetWidth}px`;
    // الصفحة RTL؛ offsetLeft يعطي المسافة من اليسار كما في النسخة الأصلية.
    slider.style.left = `${button.offsetLeft}px`;
  }

  let transitionTimer = null;
  let activeType = 'all';
  function filterMeetups(type, btn) {
    if (transitionTimer) clearTimeout(transitionTimer);
    activeType = type;

    buttons.forEach((button) => {
      button.classList.remove('active', 'text-white');
      button.classList.add('text-ink-600');
      button.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active', 'text-white');
    btn.classList.remove('text-ink-600');
    btn.setAttribute('aria-pressed', 'true');
    updateSliderPosition(btn);

    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px) scale(0.98)';
    if (emptyState) {
      emptyState.style.opacity = '0';
      emptyState.style.transform = 'translateY(10px) scale(0.98)';
    }

    transitionTimer = window.setTimeout(() => {
      const cards = Array.from(grid.children);
      let visibleCount = 0;
      cards.forEach((card) => {
        if (activeType === 'all' || card.dataset.type === activeType) {
          // حافظ على display:flex الأصلي، مع بطاقات الرابط وغير الرابط.
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      emptyState?.classList.toggle('hidden', visibleCount !== 0);
      void grid.offsetWidth; // إعادة حساب التخطيط قبل الحركة العكسية.
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0) scale(1)';
      if (emptyState && visibleCount === 0) {
        emptyState.style.opacity = '1';
        emptyState.style.transform = 'translateY(0) scale(1)';
      }
      transitionTimer = null;
    }, 250);
  }

  for (const button of buttons) {
    const type = button.id.replace('btn-', '');
    button.setAttribute('aria-pressed', String(type === 'all'));
    button.addEventListener('click', () => filterMeetups(type, button));
  }
  const alignSlider = () => updateSliderPosition(document.querySelector('.filter-btn.active'));
  window.addEventListener('resize', alignSlider);
  // في الموقع الأصلي يبدأ السلايدر عند تحميل الصفحة لضمان حساب العرض الصحيح.
  if (document.readyState === 'complete') alignSlider();
  else window.addEventListener('load', alignSlider, { once: true });
}
