import { meetups } from '../data/meetups.js';
import { members } from '../data/members.js';
import { faqs } from '../data/faqs.js';
import { pillars } from '../data/pillars.js';
import { MeetupCard } from '../components/MeetupCard.js';
import { MemberCard } from '../components/MemberCard.js';
import { FaqItem } from '../components/FaqItem.js';
import { PillarCard } from '../components/PillarCard.js';
import { initNavigation } from './navigation.js';
import { initMeetups } from './meetups.js';
import { initFaq } from './faq.js';
import { initAnimations } from './animations.js';

/**
 * 1) اجلب البيانات، 2) ارسم البطاقات، 3) اربط التفاعلات والمراقبين.
 * تشغيل هذه الخطوات بهذا الترتيب يمنع فقدان حركات scroll reveal أو تكرار المستمعين.
 */
document.getElementById('pillarGrid').replaceChildren(...pillars.map(PillarCard));
document.getElementById('meetupsGrid').replaceChildren(...meetups.map(MeetupCard));
// نعيد ترتيب عقد DOM نفسها عند تغيّر عرض الشاشة، بدل استخدام CSS order فقط؛
// هكذا يظل ترتيب التنقل بلوحة المفاتيح وقارئ الشاشة موافقًا للترتيب المرئي.
// لا ننشئ البطاقات مرة ثانية عند تغيير الحجم، حتى تستمر الصور والحركات والروابط.
const teamGrid = document.getElementById('teamGrid');
const memberCards = members.map((member, index) => ({ member, index, card: MemberCard(member) }));
const desktopTeamLayout = window.matchMedia('(min-width: 1024px)');
function updateTeamOrder() {
  const orderKey = desktopTeamLayout.matches ? 'desktopOrder' : 'mobileOrder';
  const sorted = [...memberCards].sort((a, b) =>
    (a.member[orderKey] ?? Number.MAX_SAFE_INTEGER) - (b.member[orderKey] ?? Number.MAX_SAFE_INTEGER)
    || a.index - b.index
  );
  teamGrid.replaceChildren(...sorted.map(({ card }) => card));
}
updateTeamOrder();
desktopTeamLayout.addEventListener('change', updateTeamOrder);
document.getElementById('faqItems').replaceChildren(...faqs.map(FaqItem));

initNavigation();
initMeetups(meetups);
initFaq();
initAnimations();
