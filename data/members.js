/**
 * عدّل بيانات أعضاء فريق تفاعل من هنا فقط.
 *
 * mobileOrder: ترتيب البطاقة من الأعلى إلى الأسفل على الجوال والأجهزة المتوسطة.
 * desktopOrder: ترتيب البطاقة من اليمين إلى اليسار عند عرض 5 أعمدة (1024px فأكثر).
 * variant: يحدد أسلوب البطاقة فقط، ولا يتحكم في ترتيبها.
 * photo / whatsappUrl: اتركها null إذا لم تتوفر، وسيظهر بديل الصورة ويختفي زر التواصل.
 *
 * ملاحظة: رتاج ورائف مدخلان مبدئيان؛ أكمل وصفهما وصورهما وروابطهما لاحقًا.
 */
export const members = [
  {
    name: 'علي طيب',
    role: 'رئيس المبادرة',
    description: 'متخصص في تفاعل الإنسان مع الحاسب وتصميم تجارب المستخدم وسهولة الوصول',
    photo: 'pics/ali.png',
    initials: 'ع.ط',
    whatsappUrl: 'https://wa.me/966559597829',
    variant: 'lead',
    mobileOrder: 2,
    desktopOrder: 3,
  },
  {
    name: 'محمد جبلي',
    role: 'مستشار المبادرة',
    description: 'طالب دكتوراه في علوم الحاسب ومحاضر بجامعة أم القرى، مهتم بتفاعل الإنسان والحاسب',
    photo: 'pics/mohammed.jpg',
    initials: 'م.ج',
    whatsappUrl: 'https://wa.me/966505501575',
    variant: 'advisor',
    mobileOrder: 1,
    desktopOrder: 4,
  },
  {
    name: 'أحمد الزهراني',
    role: 'نائب الرئيس',
    description: 'متخصص في تفاعل الإنسان مع الحاسب، مهتم بدراسة سلوكيات المستخدمين',
    photo: 'pics/ahmed.jpg',
    initials: 'أ.ز',
    whatsappUrl: 'https://wa.me/966500778984',
    variant: 'vice',
    mobileOrder: 3,
    desktopOrder: 2,
  },
  {
    name: 'رتاج',
    role: 'عضو الفريق',
    description: 'ستُضاف نبذة العضو هنا قريبًا.',
    photo: null, // استبدلها بمسار الصورة بعد إضافتها إلى pics/
    initials: 'ر.ت',
    whatsappUrl: null, // أضف الرابط بصيغة https://wa.me/9665... عند توفره
    variant: 'member',
    mobileOrder: 4,
    desktopOrder: 1,
  },
  {
    name: 'رائف',
    role: 'عضو الفريق',
    description: 'ستُضاف نبذة العضو هنا قريبًا.',
    photo: null, // استبدلها بمسار الصورة بعد إضافتها إلى pics/
    initials: 'ر.ف',
    whatsappUrl: null, // أضف الرابط بصيغة https://wa.me/9665... عند توفره
    variant: 'member',
    mobileOrder: 5,
    desktopOrder: 5,
  },
];
