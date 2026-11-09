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
    description: 'متخصص في تفاعل الإنسان مع الحاسب، أخصائي تجربة عميل في نبرة',
    photo: 'pics/ali.png',
    initials: 'A.R.T',
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
    initials: 'M.J',
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
    initials: 'A.Z',
    whatsappUrl: 'https://wa.me/966500778984',
    variant: 'vice',
    mobileOrder: 3,
    desktopOrder: 2,
  },
  {
    name: 'رتاج نتو',
    role: 'عضو الإدارة',
    description: 'متخصصة في تفاعل الإنسان مع الحاسب، وبالتحديد أبحاث المستخدم',
    photo: 'pics/retaj.jpeg',
    initials: 'R.N',
    whatsappUrl: 'https://wa.me/966567791427',
    variant: 'member',
    mobileOrder: 4,
    desktopOrder: 1,
  },
  {
    name: 'رائف خالد',
    role: 'عضو الإدارة',
    description: 'متخصص في تقاعل الإنسان مع الحاسب، باحث تجربة مستخدم',
    photo: 'pics/raeef.jpeg',
    initials: 'R.F',
    whatsappUrl: 'https://wa.me/966557303473', 
    variant: 'member',
    mobileOrder: 5,
    desktopOrder: 5,
  },
];
