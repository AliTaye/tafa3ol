/**
 * اللقاءات: أضف لقاءً جديدًا كعنصر في هذه القائمة فقط.
 * id: الرقم الظاهر في «لقاء تفاعل #...» (لا تكرر الرقم)
 * status: "past" أو "upcoming" — مستقل عن وجود رابط التغطية.
 * coverageUrl: رابط تغطية X، أو null؛ تتحول البطاقة تلقائيًا إلى رابط عند إضافته.
 * cover: مسار صورة الغلاف، أو null للخلفية الافتراضية.
 * dateLabel/location: النصوص المعروضة كما هي، وليس مطلوبًا تحديد تاريخ فعلي للقاءات القادمة.
 */
export const meetups = [
  {
    id: 4,
    title: 'اللقاء القادم؟',
    description: 'نعمل على ترتيب تفاصيل اللقاء القادم. ابقَ بالقرب وشاركنا مقترحاتك في مجتمع الواتساب!',
    status: 'upcoming',
    dateLabel: 'قريبًا',
    location: 'يُحدد لاحقًا',
    cover: null,
    imageAlt: '',
    coverageUrl: null,
    sponsor: null,
  },
  {
    id: 3,
    title: 'تجربة المستخدم الاصطناعي',
    description: 'ماذا لو كان المستخدم هو الذكاء الاصطناعي؟ كيف سنقدم له تجربة مستخدم أفضل؟',
    status: 'past',
    dateLabel: 'الإثنين 04 / 11',
    location: 'مكة • سكاي أوفيس',
    cover: 'pics/aiuser-image.jpeg',
    imageAlt: 'غلاف تجربة المستخدم الاصطناعي',
    coverageUrl: 'https://x.com/tafa3ol_com/status/2119051219658305539',
    sponsor: { label: 'برعاية سكاي أوفيس', icon: '☁️', style: 'sky' },
  },
  {
    id: 2,
    title: 'التصميم المقنع',
    description: 'نظرة في علم النفس السلوكي ومبادئ التأثير والإقناع الإدراكي في بناء التجربة',
    status: 'past',
    dateLabel: 'الإثنين 05 / 10',
    location: 'مكة • سكاي أوفيس',
    cover: 'pics/Persuasive design pic.jpg',
    imageAlt: 'غلاف التصميم الإقناعي',
    coverageUrl: 'https://x.com/tafa3ol_com/status/2107874249327169679',
    sponsor: { label: 'برعاية سكاي أوفيس', icon: '☁️', style: 'sky' },
  },
  {
    id: 1,
    title: 'AI & IA',
    description: 'استعراض تجارب نخبة من التقنيين لأدوات الذكاء الاصطناعي، واستعراض مفهوم معمارية المعلومات',
    status: 'past',
    dateLabel: 'الأحد 20 / 9',
    location: 'مكة • سكاي أوفيس',
    cover: 'pics/tafa3ol-1st.jpeg',
    imageAlt: 'غلاف AI & IA',
    // الغلاف الأول يستخدم كلاسات Tailwind بدل inline style كما في النسخة الأصلية.
    coverTreatment: 'utility',
    coverageUrl: 'https://x.com/tafa3ol_com/status/2102426083064975491?s=20',
    sponsor: { label: 'برعاية زد', icon: '✨', style: 'emerald' },
  },
];
