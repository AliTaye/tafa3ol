import { elementFromHtml, escapeHtml, setExternalLink } from '../js/dom.js';
import { locationIcon } from './icons.js';

// الشكلان (سابق/قادم) هما نفس المكوّن، بفروع تنسيق تطابق الموقع الأصلي.
const UPCOMING_TEXTURE = "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]";

const sponsorStyles = {
  sky: { text: 'text-sky-400', icon: 'text-sky-300' },
  emerald: { text: 'text-emerald-400', icon: 'text-amber-400' },
};

function sponsorBadge(sponsor) {
  if (!sponsor) return '';
  const style = sponsorStyles[sponsor.style] ?? sponsorStyles.sky;
  return `<span class="hidden sm:flex px-2.5 py-1 rounded-lg bg-slate-800/80 ${style.text} backdrop-blur-md font-medium text-[11px] border border-slate-700/60 items-center gap-1">
    <span>${escapeHtml(sponsor.label)}</span>
    <span class="${style.icon}">${escapeHtml(sponsor.icon)}</span>
  </span>`;
}

function upcomingHead(meetup) {
  return `<div class="relative h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-b border-slate-200">
    <div class="absolute inset-0 ${UPCOMING_TEXTURE} opacity-50"></div>
    <div class="absolute top-3.5 inset-x-4 flex items-center justify-between gap-2 text-xs">
      <span class="px-2 sm:px-2.5 py-1 rounded-lg bg-white/90 text-brand-navy backdrop-blur-md font-bold text-[9px] sm:text-[11px] border border-slate-200 flex items-center gap-1 shadow-sm">
        <span>⏳</span><span>${escapeHtml(meetup.dateLabel ?? 'قريبًا')}</span>
      </span>
    </div>
    <div class="absolute bottom-3 inset-x-4 z-10">
      <span class="text-[10px] sm:text-[11px] font-semibold text-brand-green">لقاء تفاعل #${escapeHtml(meetup.id)}</span>
      <h3 class="text-xs sm:text-base font-bold font-display text-brand-navy leading-snug line-clamp-2">${escapeHtml(meetup.title)}</h3>
    </div>
  </div>`;
}

function pastHead(meetup) {
  // الصورة اختيارية، وتظهر الخلفية اللونية نفسها في حال عدم وجودها.
  const utilityTreatment = meetup.coverTreatment === 'utility';
  const coverClasses = utilityTreatment
    ? 'w-full h-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105'
    : 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
  return `<div class="relative h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-slate-900 to-brand-navy">
    ${meetup.cover ? `<img data-meetup-cover alt="${escapeHtml(meetup.imageAlt || meetup.title)}" class="${coverClasses}" ${utilityTreatment ? '' : 'style="opacity: 0.25; mix-blend-mode: luminosity;"'} />` : ''}
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent"></div>
    <div class="absolute top-3.5 inset-x-4 flex items-center justify-between gap-2 text-xs">
      <span class="px-2 sm:px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 backdrop-blur-md font-medium text-[9px] sm:text-[11px] border border-slate-700/60 flex items-center gap-1">
        <span>📅</span><span>${escapeHtml(meetup.dateLabel)}</span>
      </span>
      ${sponsorBadge(meetup.sponsor)}
    </div>
    <div class="absolute bottom-3 inset-x-4">
      <span class="text-[10px] sm:text-[11px] font-semibold text-slate-400">لقاء تفاعل #${escapeHtml(meetup.id)}</span>
      <h3 class="text-xs sm:text-base font-bold font-display text-white leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">${escapeHtml(meetup.title)}</h3>
    </div>
  </div>`;
}

/** عقدة واحدة فقط لكل لقاء؛ وجود تغطية لا يغير تصنيف اللقاء. */
export function MeetupCard(meetup) {
  const upcoming = meetup.status === 'upcoming';
  const clickable = Boolean(meetup.coverageUrl);
  const tag = clickable ? 'a' : 'div';
  const classes = upcoming
    ? 'meetup-card solid-card rounded-2xl overflow-hidden flex flex-col justify-between bg-white group hover:border-brand-green/60 transition-all cursor-default'
    : 'meetup-card solid-card rounded-2xl overflow-hidden flex flex-col justify-between bg-slate-50/70 opacity-95 group hover:border-brand-green/60 transition-all cursor-default';

  const card = elementFromHtml(`<${tag} class="${classes}" data-type="${upcoming ? 'upcoming' : 'past'}">
    <div>
      ${upcoming ? upcomingHead(meetup) : pastHead(meetup)}
      <div class="p-4 sm:p-5">
        <p class="text-ink-600 text-[10px] sm:text-sm leading-relaxed mb-2 line-clamp-3">${escapeHtml(meetup.description)}</p>
      </div>
    </div>
    <div class="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t ${upcoming ? 'border-slate-100' : 'border-slate-200/80'} flex items-center justify-between text-xs">
      <div class="flex items-center gap-1.5 ${upcoming ? 'text-ink-500' : 'text-ink-600'} font-medium text-[9px] sm:text-[11px]">
        ${locationIcon(upcoming ? 'text-slate-400' : 'text-brand-green')}
        <span class="truncate">${escapeHtml(meetup.location)}</span>
      </div>
      ${upcoming ? '' : `<div class="flex items-center gap-2">
        <span class="text-brand-green font-semibold text-[11px] flex items-center gap-0.5"><span>✓</span></span>
      </div>`}
    </div>
  </${tag}>`);

  if (clickable) {
    setExternalLink(card, meetup.coverageUrl);
    card.title = 'مشاهدة تغطية اللقاء على منصة X';
    card.classList.replace('cursor-default', 'cursor-pointer');
    card.classList.add('block', 'text-inherit', 'no-underline');
  }

  const cover = card.querySelector('[data-meetup-cover]');
  if (cover) {
    cover.addEventListener('error', () => { cover.style.display = 'none'; });
    cover.src = meetup.cover;
  }

  return card;
}
