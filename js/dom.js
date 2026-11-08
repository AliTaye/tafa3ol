/**
 * مكونات المتصفح: الهياكل (HTML) تُبنى من قوالب واحدة، والمحتوى يُعامل كنص.
 * احفظ النصوص في data/ بدل نسخ/لصق HTML لكل بطاقة.
 */
export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

export function elementFromHtml(markup) {
  const template = document.createElement('template');
  template.innerHTML = markup.trim();
  return template.content.firstElementChild;
}

/** URL يُضبط كخاصية DOM بدل إدخاله في HTML غير موثوق. */
export function setExternalLink(link, url) {
  const parsed = new URL(url, document.baseURI);
  if (!['https:', 'http:'].includes(parsed.protocol)) {
    throw new Error('External links must use HTTPS or HTTP');
  }
  link.href = parsed.href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
}
