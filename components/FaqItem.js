import { elementFromHtml, escapeHtml } from '../js/dom.js';

export function FaqItem(faq, index) {
  // aria-expanded و aria-controls يواكبان التفاعل الأصلي (+ / −) مع تحسين الوصول.
  const id = `faq-answer-${index + 1}`;
  return elementFromHtml(`
    <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button type="button" aria-expanded="false" aria-controls="${id}" class="w-full p-4 text-right flex items-center justify-between text-xs sm:text-sm font-bold text-brand-navy hover:bg-slate-50 transition-colors">
        <span>${escapeHtml(faq.question)}</span>
        <span aria-hidden="true" class="faq-icon text-brand-green text-lg font-mono transition-transform duration-200">+</span>
      </button>
      <div id="${id}" class="faq-answer hidden px-4 pb-4 text-xs text-ink-600 leading-relaxed border-t border-slate-100 pt-3">${escapeHtml(faq.answer)}</div>
    </div>`);
}
