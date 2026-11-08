import { elementFromHtml, escapeHtml } from '../js/dom.js';

const icons = {
  meetups: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  whatsapp: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  audit: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
};

const variants = {
  green: {
    card: 'border-t-brand-green', iconBox: 'bg-brand-green-subtle text-brand-green border-brand-green-border',
    title: 'text-brand-navy', desc: 'text-ink-600', footer: 'border-slate-100 text-brand-green text-xs font-semibold',
  },
  emerald: {
    card: 'border-t-emerald-600', iconBox: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'text-brand-navy', desc: 'text-ink-600', footer: 'border-slate-100 text-emerald-700 text-xs font-semibold',
  },
  muted: {
    card: 'border-t-slate-300 bg-slate-50/50', iconBox: 'bg-white text-ink-500 border-slate-200 shadow-xs',
    title: 'text-ink-800', desc: 'text-ink-500', footer: 'border-slate-200 text-ink-500 text-xs font-medium',
  },
};

export function PillarCard(pillar, index) {
  const style = variants[pillar.variant] ?? variants.green;
  return elementFromHtml(`
    <div class="reveal-element solid-card rounded-2xl p-6 flex flex-col justify-between border-t-4 ${style.card}" style="transition-delay: ${(index + 1) * 100}ms;">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="w-11 h-11 rounded-xl ${style.iconBox} border flex items-center justify-center">${icons[pillar.icon] ?? icons.meetups}</span>
          ${pillar.badge ? `<span class="text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">${escapeHtml(pillar.badge)}</span>` : ''}
        </div>
        <h3 class="text-base font-bold font-display ${style.title} mb-2">${escapeHtml(pillar.title)}</h3>
        <p class="${style.desc} text-xs sm:text-sm leading-relaxed">${escapeHtml(pillar.description)}</p>
      </div>
      <div class="mt-5 pt-3 border-t ${style.footer}">${escapeHtml(pillar.footer)}</div>
    </div>`);
}
