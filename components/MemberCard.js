import { elementFromHtml, escapeHtml, setExternalLink } from '../js/dom.js';
import { whatsappIcon } from './icons.js';

// يحتفظ كل نوع بأسلوبه البصري الأصلي فقط؛ ترتيب الأعضاء يُحدد ببيانات mobileOrder وdesktopOrder.
const variants = {
  lead: {
    card: 'shadow-sm md:shadow-lg bg-white ring-1 ring-brand-green/20 md:-translate-y-4 h-full relative z-20',
    delay: 100,
    photo: 'border-brand-green shadow-xs bg-brand-green-subtle',
    fallback: 'bg-brand-green-subtle text-brand-green',
    badge: 'text-purple-700 bg-purple-50 border-purple-200',
  },
  advisor: {
    card: 'h-full',
    delay: 300,
    photo: 'border-brand-green-border shadow-xs bg-brand-green-subtle',
    fallback: 'bg-brand-green-subtle text-brand-green',
    badge: 'text-brand-green bg-emerald-50 border-emerald-200',
  },
  vice: {
    card: 'h-full',
    delay: 200,
    photo: 'border-slate-200 shadow-xs bg-slate-100',
    fallback: 'bg-slate-100 text-brand-navy',
    badge: 'text-brand-green bg-emerald-50 border-emerald-200',
  },
  member: {
    card: 'h-full',
    delay: 100,
    photo: 'border-brand-green-border shadow-xs bg-brand-green-subtle',
    fallback: 'bg-brand-green-subtle text-brand-green',
    badge: 'text-brand-green bg-emerald-50 border-emerald-200',
  },
};

export function MemberCard(member) {
  const style = variants[member.variant] ?? variants.member;
  const card = elementFromHtml(`
    <div class="reveal-element solid-card rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between border-t-4 border-t-brand-green ${style.card} gap-4" style="transition-delay: ${style.delay}ms;">
      <div class="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0">
        <div class="flex flex-col items-center shrink-0 w-24 sm:w-28 md:w-full text-center">
          <div class="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border-2 ${style.photo} flex items-center justify-center group shrink-0">
            <img data-member-photo alt="${escapeHtml(member.name)}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="hidden w-full h-full flex flex-col items-center justify-center ${style.fallback} font-bold font-display text-xs md:text-base">
              <span>${escapeHtml(member.initials || '')}</span>
            </div>
          </div>
          <span class="md:hidden text-[10px] font-semibold ${style.badge} px-2 py-0.5 rounded border mt-2 text-center w-full">${escapeHtml(member.role)}</span>
        </div>
        <div class="flex-1 min-w-0 md:w-full flex flex-col items-start md:items-center text-right md:text-center pt-0.5 md:pt-3">
          <h3 class="text-sm md:text-base font-bold font-display text-brand-navy">${escapeHtml(member.name)}</h3>
          <span class="hidden md:inline-block text-[11px] font-semibold ${style.badge} px-2.5 py-0.5 rounded border mt-1 mb-2">${escapeHtml(member.role)}</span>
          <p class="text-ink-600 text-xs leading-relaxed mt-1.5 md:mt-0">${escapeHtml(member.description)}</p>
        </div>
      </div>
      <div class="w-full pt-3 border-t border-slate-100 flex justify-center">
        <a data-contact class="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs">
          <span>تواصل معي</span>${whatsappIcon}
        </a>
      </div>
    </div>`);

  const contact = card.querySelector('[data-contact]');
  if (member.whatsappUrl) {
    setExternalLink(contact, member.whatsappUrl);
  } else {
    // لا تعرض زر تواصل لا وجهة له عند إضافة عضو جديد دون رقم.
    contact.parentElement.remove();
  }

  const photo = card.querySelector('[data-member-photo]');
  const fallback = photo.nextElementSibling;
  const showFallback = () => {
    photo.style.display = 'none';
    fallback.classList.remove('hidden');
  };
  photo.addEventListener('error', showFallback);
  if (member.photo) photo.src = member.photo;
  else showFallback();

  return card;
}
