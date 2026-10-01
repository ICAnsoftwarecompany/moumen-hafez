import { Locale } from "@/types/site";

export const navigationContent = {
  ar: {
    home: "الرئيسية",
    about: "عني",
    consultation: "الاستشارة",
    call: "احجز مكالمة",
    switch: "English",
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
  },
  en: {
    home: "Home",
    about: "About",
    consultation: "Consultation",
    call: "Book a Call",
    switch: "العربية",
    menu: "Open menu",
    close: "Close menu",
  },
} as const;

export const homeContent = {
  ar: {
    heroEyebrow: "01 / المقدمة",
    heroTitle: "Moumen Hafez",
    heroTagline: "Technology for Better Business",
    heroDescription:
      "أساعد أصحاب الشركات والمهتمين بالبيزنس على فهم التكنولوجيا، اختيار الحل المناسب، واستخدامه لبناء عمل أكثر تنظيمًا وكفاءة وقابلية للنمو.",
    cta: "ناقش تحديًا في عملك",
    sections: {
      business: "02 / الأعمال والتكنولوجيا",
      thinking: "03 / طريقة التفكير",
      experience: "04 / خبرة من أرض الواقع",
      contact: "05 / لنتحدث",
    },
    businessIntro:
      "الموضوع ليس بيع خدمة محددة. الفكرة هي فهم قرارات التكنولوجيا التي تؤثر على التشغيل، العملاء، البيانات، وطريقة نمو العمل.",
    thinkingIntro: "التكنولوجيا المناسبة تبدأ بفهم طريقة العمل قبل اختيار النظام أو الأداة.",
    contactTitle: "هل لديك تحدٍ في العمل يحتاج تفكيرًا تقنيًا أو تشغيليًا؟",
    contactText: "ابدأ بجلسة قصيرة نفهم فيها المشكلة ونحدد هل التكنولوجيا هي الخطوة المناسبة فعلًا.",
    bookingPreview: {
      ariaLabel: "انتقل إلى صفحة حجز مكالمة استشارية",
      monthLabel: "اختر يومًا",
      durationLabel: "30 دقيقة",
      meetingLabel: "مكالمة عبر Google Meet",
      selectLabel: "اختر موعدك",
    },
  },
  en: {
    heroEyebrow: "01 / INTRO",
    heroTitle: "Moumen Hafez",
    heroTagline: "Technology for Better Business",
    heroDescription: "Helping businesses understand, choose, and use technology to operate better and grow smarter.",
    cta: "Discuss a business challenge",
    sections: {
      business: "02 / BUSINESS & TECHNOLOGY",
      thinking: "03 / HOW I THINK",
      experience: "04 / EXPERIENCE FROM REAL BUSINESS ENVIRONMENTS",
      contact: "05 / LET'S TALK",
    },
    businessIntro:
      "This is not about selling one fixed service. It is about understanding technology decisions that affect operations, customers, data, and business growth.",
    thinkingIntro: "The right technology starts with understanding how the business works before choosing a system or tool.",
    contactTitle: "Do you have a business challenge that needs technical and operational thinking?",
    contactText: "Start with a short session to understand the problem and decide whether technology is the right next step.",
    bookingPreview: {
      ariaLabel: "Go to the consultation call booking page",
      monthLabel: "Choose a day",
      durationLabel: "30 minutes",
      meetingLabel: "Google Meet call",
      selectLabel: "Choose a time",
    },
  },
} as const;

export const businessAreas = {
  ar: [
    ["Business Operations", "فهم حركة العمل اليومية بين الأشخاص، البيانات، الأدوات، والقرارات."],
    ["Software Decisions", "تمييز متى تحتاج نظامًا جاهزًا، تطويرًا مخصصًا، أو تنظيمًا أبسط قبل أي برنامج."],
    ["Customer & Sales Systems", "تنظيم المتابعة، العملاء، المبيعات، وخدمة ما بعد البيع بصورة أوضح."],
    ["Automation", "اكتشاف المهام المتكررة التي يمكن تبسيطها أو أتمتتها دون تعقيد زائد."],
    ["AI", "استخدام الذكاء الاصطناعي عندما يخدم قرارًا أو تحليلًا أو سير عمل واضحًا."],
    ["Business Systems", "ربط الأنظمة بطريقة تخدم الإدارة والتشغيل وليس التقنية وحدها."],
  ],
  en: [
    ["Business Operations", "Understand how daily work moves between people, data, tools, and decisions."],
    ["Software Decisions", "Know when to use a ready-made system, custom development, or a simpler process first."],
    ["Customer & Sales Systems", "Structure follow-up, customers, sales, and after-sales service with more clarity."],
    ["Automation", "Find repetitive work that can be simplified or automated without extra complexity."],
    ["AI", "Use AI when it supports a clear decision, analysis, or workflow."],
    ["Business Systems", "Connect systems in a way that serves operations and management, not technology alone."],
  ],
} as const;

export const thinkingSteps = {
  ar: [
    ["UNDERSTAND", "فهم طريقة العمل والمشكلة الحقيقية قبل اقتراح أي أداة."],
    ["MAP", "رسم خطوات العمل والبيانات والمسؤوليات كما تحدث فعليًا."],
    ["SIMPLIFY", "تبسيط العملية قبل أتمتتها أو بناء نظام فوقها."],
    ["CHOOSE", "اختيار حل يناسب الحجم، الميزانية، والفريق."],
    ["IMPROVE", "التنفيذ تدريجيًا ثم القياس والتحسين."],
  ],
  en: [
    ["UNDERSTAND", "Understand the workflow and the real problem before suggesting a tool."],
    ["MAP", "Map the process, data, and responsibilities as they actually happen."],
    ["SIMPLIFY", "Simplify the process before automating it or building a system on top."],
    ["CHOOSE", "Choose a solution that fits the size, budget, and team."],
    ["IMPROVE", "Implement gradually, then measure and improve."],
  ],
} as const;

export const realExperienceContent = {
  ar: {
    title: "خبرة من أرض الواقع",
    intro:
      "خبرة عملية تشكلت من العمل مع الشركات وفهم عملياتها وتحدياتها، والمشاركة في تخطيط وتطبيق حلول تقنية تناسب طبيعة العمل واحتياجاته الفعلية.",
    supportingLine: "من التشغيل وإدارة الأنظمة إلى تخطيط وبناء الحلول البرمجية.",
    environmentsLabel: "Business Environments",
    environmentsTitle: "بيئات أعمال مختلفة، واحتياجات تشغيلية حقيقية.",
    industries: [
      ["Retail & Commerce", "التجزئة والتجارة وإدارة نقاط البيع"],
      ["Real Estate", "التطوير والاستثمار وإدارة العمليات العقارية"],
      ["Construction & Contracting", "المقاولات وإدارة المشروعات"],
      ["Food & Beverage", "إدارة وتشغيل المطاعم والمقاهي"],
      ["Distribution & Supply Chain", "التوزيع والمخزون وسلاسل الإمداد"],
      ["Education & Training", "التعليم والتدريب والمنصات التعليمية"],
      ["Professional & Business Services", "الخدمات المهنية وبيئات الأعمال الخدمية"],
    ],
    proofLabel: "خبرة عملية، وليست معرفة نظرية فقط",
    proofItems: [
      ["تشغيل ودعم", "تشغيل الأنظمة ودعم المستخدمين والعملاء وفهم ما يعطّل العمل اليومي."],
      ["تحليل ومتابعة", "تحليل عمليات العمل ومتابعة التنفيذ والاحتياجات والتعديلات الفعلية."],
      ["تخطيط وتطبيق", "تخطيط الحلول والمشاركة في تطويرها وتنفيذها وتحسينها تدريجيًا."],
      ["Automation & AI", "استخدام الأتمتة والذكاء الاصطناعي عندما توجد حالة استخدام واضحة."],
    ],
  },
  en: {
    title: "Experience Shaped by Real Business Environments",
    intro:
      "Practical experience shaped by working with businesses, understanding their operations and challenges, and helping plan and implement technology that fits how the work actually runs.",
    supportingLine: "From operations and system management to planning and building software solutions.",
    environmentsLabel: "Business Environments",
    environmentsTitle: "Different business contexts, grounded operational needs.",
    industries: [
      ["Retail & Commerce", "Retail operations, commerce, and point-of-sale management"],
      ["Real Estate", "Development, investment, and property operations"],
      ["Construction & Contracting", "Contracting workflows and project management"],
      ["Food & Beverage", "Restaurant and cafe operations"],
      ["Distribution & Supply Chain", "Distribution, inventory, and supply-chain workflows"],
      ["Education & Training", "Education, training, and learning platforms"],
      ["Professional & Business Services", "Professional services and service-led business operations"],
    ],
    proofLabel: "Practical exposure, beyond theoretical knowledge",
    proofItems: [
      ["Operations & Support", "Running systems, supporting users and clients, and seeing what interrupts daily work."],
      ["Analysis & Follow-up", "Understanding business processes while tracking delivery, needs, and real client changes."],
      ["Planning & Implementation", "Planning solutions and contributing to their development, implementation, and gradual improvement."],
      ["Automation & AI", "Using automation and AI integrations when a clear, useful business case exists."],
    ],
  },
} as const;

export const aboutContent = {
  ar: {
    eyebrow: "01 / عني",
    title: "رحلتي",
    backgroundWord: "ABOUT",
    intro: "تعلمت السوفت وير من جهة العميل والتشغيل قبل أن أتعلم كيف أبنيه.",
    stages: [
      ["بدأت من جهة العميل والتشغيل", "البداية كانت من مشاهدة كيف تستخدم الشركات البرامج في يومها العادي، وأين تتعطل المتابعة أو تضيع البيانات."],
      ["الدعم الفني علمني فهم المشكلة الحقيقية", "كل مشكلة دعم كانت فرصة لفهم السبب خلف العطل: هل هو برنامج، تدريب، عملية غير واضحة، أم توقع غير مضبوط؟"],
      ["الإدارة وسعت فهمي لطريقة عمل الشركات", "إدارة المتابعة والتدريب والتعامل مع فرق مختلفة جعلت الصورة أوسع من شاشة البرنامج."],
      ["بدأت أبني الأنظمة بدل استخدام الأنظمة فقط", "مع تطوير الأنظمة المخصصة أصبح السؤال: ما الذي يحتاجه العمل فعلًا حتى يصبح أكثر تنظيمًا؟"],
      ["المشروعات علمتني المنتج والعميل والتشغيل معًا", "الأنظمة الناجحة ليست كودًا فقط؛ هي قرار، تجربة مستخدم، بيانات، ومسؤوليات واضحة."],
      ["اليوم أربط البيزنس بالتكنولوجيا", "الهدف هو مساعدة أصحاب الأعمال على فهم القرار التقني بلغة عملية قريبة من التشغيل والنتيجة."],
    ],
  },
  en: {
    eyebrow: "01 / ABOUT",
    title: "My Story",
    backgroundWord: "ABOUT",
    intro: "I learned software from the customer and operations side before I learned how to build it.",
    stages: [
      ["I started from the customer and operations side", "The beginning was seeing how companies use software every day and where follow-up breaks or data gets lost."],
      ["Technical support taught me to find the real problem", "Every support issue was a chance to understand whether the cause was software, training, process, or expectation."],
      ["Management expanded how I understood companies", "Managing follow-up, training, and different teams made the picture larger than the software screen."],
      ["I started building systems, not only using them", "With custom development, the question became: what does the work actually need to become more organized?"],
      ["Projects taught me product, customer, and operations together", "Successful systems are not code alone; they are decisions, user experience, data, and clear ownership."],
      ["Today I connect business with technology", "The aim is to help business owners understand technology decisions in practical operational language."],
    ],
  },
} as const;

export const consultationContent = {
  ar: {
    eyebrow: "01 / استشارة تقنية للأعمال",
    title: "احجز مكالمة استشارية",
    backgroundWord: "LET'S TALK",
    description:
      "مكالمة تعريفية لمدة 30 دقيقة لفهم احتياجات نشاطك، ومناقشة التحديات الحالية، وتحديد كيف يمكن للتكنولوجيا والأنظمة المناسبة أن تساعدك في تنظيم العمل وتحسين التشغيل.",
    supportingLine: "بدون التزام، وبدون تعقيد. الهدف هو الوصول إلى نقطة بداية واضحة وعملية.",
    chooseTime: "اختر موعدك",
    overview: [
      ["مدة المكالمة", "30 دقيقة"],
      ["مكان الاجتماع", "Google Meet"],
      ["المكالمة التعريفية الأولى", "مجانية"],
      ["الهدف", "بدون التزام — نفهم الاحتياج"],
    ],
    topicsEyebrow: "02 / نطاق النقاش",
    topicsTitle: "ماذا يمكننا مناقشته؟",
    topicsIntro: "نركز على التحدي الذي يواجه العمل، ثم ننظر إلى النظام أو الأداة المناسبة في سياقه الفعلي.",
    topics: [
      "اختيار أو تطوير نظام ERP مناسب لطبيعة النشاط",
      "تنظيم المبيعات والعملاء باستخدام CRM",
      "أنظمة POS وإدارة الفروع",
      "تحسين العمليات الداخلية وميكنة الإجراءات",
      "ربط الأنظمة والأدوات المختلفة",
      "استخدام الأتمتة والذكاء الاصطناعي في العمليات",
      "تقييم نظام حالي ومعرفة نقاط الضعف",
      "تحديد هل النشاط يحتاج نظامًا جاهزًا أم تطويرًا مخصصًا",
    ],
    stepsEyebrow: "03 / خطوات بسيطة",
    stepsTitle: "كيف يتم الحجز؟",
    steps: [
      ["اختر الموعد", "اختر اليوم والوقت المناسب من المواعيد المتاحة."],
      ["أدخل بياناتك", "أدخل الاسم والبريد الإلكتروني والبيانات المطلوبة."],
      ["تأكيد الموعد", "سيتم تأكيد الحجز وإضافة الموعد إلى Google Calendar."],
      ["احضر المكالمة", "سيتم إنشاء رابط Google Meet تلقائيًا وإرساله مع تفاصيل الموعد."],
    ],
    bookingEyebrow: "04 / الحجز",
    bookingTitle: "اختر الموعد المناسب",
    bookingDescription: "اختر اليوم والوقت المناسب لك، وسيتم تأكيد الموعد وإرسال رابط Google Meet تلقائيًا.",
    availabilityNote: "المواعيد المتاحة يتم تحديثها تلقائيًا بناءً على جدول المواعيد الحالي.",
    calendarTitle: "حجز موعد استشارة",
    faqEyebrow: "05 / أسئلة شائعة",
    faqTitle: "قبل أن تحجز",
    faq: [
      ["هل المكالمة مجانية؟", "نعم، المكالمة التعريفية الأولى مجانية ومدتها 30 دقيقة."],
      ["أين تتم المكالمة؟", "عبر Google Meet، ويتم إرسال الرابط تلقائيًا بعد الحجز."],
      ["هل يمكن تعديل أو إلغاء الموعد؟", "يمكن إدارة الموعد من رسالة التأكيد التي يرسلها Google Calendar."],
      ["هل أحتاج لتحضير شيء؟", "يكفي تجهيز نبذة عن نشاطك والمشكلة أو العملية التي تريد تحسينها."],
    ],
    finalEyebrow: "06 / نقطة البداية",
    finalTitle: "هل لديك تحدٍ تقني أو تشغيلي وتريد معرفة نقطة البداية؟",
    finalDescription: "اختر موعدًا مناسبًا، وسنناقش وضعك الحالي والخطوة العملية التالية.",
  },
  en: {
    eyebrow: "01 / BUSINESS TECHNOLOGY CONSULTATION",
    title: "Book a Consultation Call",
    backgroundWord: "LET'S TALK",
    description:
      "A 30-minute introductory call to understand your business needs, discuss current challenges, and explore how the right technology and systems could improve organization and operations.",
    supportingLine: "No commitment and no unnecessary complexity. The aim is to establish a clear, practical starting point.",
    chooseTime: "Choose a time",
    overview: [
      ["Call duration", "30 minutes"],
      ["Meeting location", "Google Meet"],
      ["First introductory call", "Free"],
      ["Purpose", "No commitment — understand the need"],
    ],
    topicsEyebrow: "02 / DISCUSSION AREAS",
    topicsTitle: "What can we discuss?",
    topicsIntro: "We start with the business challenge, then consider the system or tool within its real operational context.",
    topics: [
      "Choosing or developing an ERP system suited to the business",
      "Organizing sales and customer operations with CRM",
      "POS systems and branch management",
      "Improving internal processes and digitizing workflows",
      "Connecting different systems and tools",
      "Using automation and AI in business operations",
      "Reviewing an existing system and identifying weaknesses",
      "Deciding between ready-made software and custom development",
    ],
    stepsEyebrow: "03 / A SIMPLE PROCESS",
    stepsTitle: "How does booking work?",
    steps: [
      ["Choose a time", "Select a suitable day and time from the available appointments."],
      ["Enter your details", "Provide your name, email address, and the requested information."],
      ["Confirm the appointment", "The booking is confirmed and added to Google Calendar."],
      ["Join the call", "A Google Meet link is created automatically and sent with the appointment details."],
    ],
    bookingEyebrow: "04 / BOOKING",
    bookingTitle: "Choose a convenient time",
    bookingDescription:
      "Select a day and time that works for you. Your appointment will be confirmed and a Google Meet link will be sent automatically.",
    availabilityNote: "Availability is updated automatically based on the current calendar.",
    calendarTitle: "Book a consultation",
    faqEyebrow: "05 / COMMON QUESTIONS",
    faqTitle: "Before you book",
    faq: [
      ["Is the call free?", "Yes. The first introductory call is free and lasts 30 minutes."],
      ["Where does the call take place?", "The call takes place on Google Meet, and the link is sent automatically after booking."],
      ["Can I reschedule or cancel?", "You can manage the appointment from the confirmation email sent by Google Calendar."],
      ["Do I need to prepare anything?", "A short overview of your business and the problem or process you want to improve is enough."],
    ],
    finalEyebrow: "06 / A STARTING POINT",
    finalTitle: "Have a technical or operational challenge and need clarity on where to start?",
    finalDescription: "Choose a suitable time and we will discuss your current situation and the next practical step.",
  },
} as const;

export const articlesContent = {
  ar: {
    eyebrow: "المقالات",
    title: "مقالات وأفكار",
    backgroundWord: "ARTICLES",
    description: "ملاحظات عملية عن التكنولوجيا وقرارات العمل، مبنية على خبرة تشغيلية حقيقية.",
    empty: "لا توجد مقالات بعد.",
    backToArticles: "كل المقالات",
  },
  en: {
    eyebrow: "Articles",
    title: "Articles & Notes",
    backgroundWord: "ARTICLES",
    description: "Practical notes on technology and business decisions, grounded in real operational experience.",
    empty: "No articles yet.",
    backToArticles: "All articles",
  },
} as const;

export function formatDate(locale: Locale, date: string) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
