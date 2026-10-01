import { Article, ArticleCategory, Locale } from "@/types/site";

// Seed Content: edit, replace, or expand these local articles before publishing long-term content.
export const categories: ArticleCategory[] = [
  "Business Technology",
  "Software Decisions",
  "AI & Automation",
  "CRM & Customer Operations",
  "Digital Transformation",
  "Practical Experience",
];

export const articles: Article[] = [
  {
    title: "إمتى تحتاج برنامجًا جديدًا، وإمتى تحتاج فقط لتنظيم طريقة شغلك؟",
    slug: "when-do-you-need-new-software",
    excerpt:
      "قبل شراء أداة جديدة، اسأل: هل المشكلة في نقص البرنامج أم في غياب طريقة واضحة للعمل؟",
    category: "Software Decisions",
    publishedAt: "2026-09-13",
    readingTime: "4",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "ar",
    content: [
      "كثير من قرارات التكنولوجيا تبدأ من شعور حقيقي بالفوضى: ملفات كثيرة، رسائل متفرقة، ومتابعة غير واضحة. لكن الحل لا يكون دائمًا شراء برنامج جديد.",
      "أحيانًا يكون المطلوب هو توثيق خطوات العمل، تحديد المسؤوليات، وتوحيد مصدر البيانات قبل اختيار أي أداة. البرنامج الجيد ينجح عندما يجد عملية واضحة يمكنه دعمها.",
      "ابدأ بسؤال بسيط: ما القرار أو المتابعة التي نريد تحسينها؟ بعد ذلك ستعرف هل تحتاج نظامًا جاهزًا، تطويرًا مخصصًا، أو فقط إعادة تنظيم طريقة العمل الحالية.",
    ],
  },
  {
    title: "قبل اختيار CRM: هل المشكلة في الأداة أم في عملية المتابعة؟",
    slug: "before-choosing-crm",
    excerpt:
      "اختيار CRM لا يبدأ باسم النظام، بل بفهم دورة العميل من أول تواصل حتى خدمة ما بعد البيع.",
    category: "CRM & Customer Operations",
    publishedAt: "2026-09-12",
    readingTime: "3",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "ar",
    content: [
      "نظام CRM يمكنه تنظيم بيانات العملاء والمتابعات، لكنه لا يعالج وحده عملية مبيعات غير محددة أو فريقًا لا يعرف ما الخطوة التالية.",
      "قبل مقارنة الأنظمة، ارسم رحلة العميل: من أين تأتي الفرصة؟ من يتابع؟ متى نعتبرها فرصة حقيقية؟ وما البيانات التي يحتاجها المدير لاتخاذ قرار؟",
      "عندما تصبح العملية واضحة، يتحول اختيار CRM من قرار عشوائي إلى قرار عملي مبني على احتياج واضح وحجم مناسب.",
    ],
  },
  {
    title: "أين تضيف الأتمتة قيمة حقيقية داخل شركتك؟",
    slug: "where-automation-adds-value",
    excerpt:
      "الأتمتة ليست هدفًا بحد ذاتها؛ قيمتها تظهر عندما تقلل عملًا متكررًا أو تمنع خطأً مكلفًا.",
    category: "AI & Automation",
    publishedAt: "2026-09-11",
    readingTime: "4",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "ar",
    content: [
      "أفضل مكان للبدء في الأتمتة هو المهام المتكررة ذات القواعد الواضحة: تنبيهات، نقل بيانات، إنشاء تقارير، أو متابعة حالات محددة.",
      "لا تبدأ بالأكثر إبهارًا. ابدأ بما يستهلك وقت الفريق يوميًا أو يسبب أخطاء متكررة، ثم قِس النتيجة قبل التوسع.",
      "الأتمتة الناجحة تحتاج عملية مستقرة وبيانات نظيفة ومسؤولية واضحة. بدون ذلك قد تنقل الفوضى من اليد إلى النظام.",
    ],
  },
  {
    title: "When do you need new software, and when do you need a better process?",
    slug: "when-do-you-need-new-software",
    excerpt:
      "Before buying another tool, ask whether the real issue is missing software or an unclear way of working.",
    category: "Software Decisions",
    publishedAt: "2026-09-13",
    readingTime: "4",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "en",
    content: [
      "Many technology decisions start with a real sense of operational friction: scattered files, disconnected chats, and unclear follow-up. But the answer is not always another app.",
      "Sometimes the first step is documenting the workflow, clarifying responsibilities, and creating one reliable source of data. Good software works best when it supports a clear process.",
      "Start with a practical question: what decision or follow-up are we trying to improve? The answer will show whether you need an off-the-shelf platform, custom development, or better structure around the tools you already use.",
    ],
  },
  {
    title: "Before choosing a CRM: is the issue the tool or the follow-up process?",
    slug: "before-choosing-crm",
    excerpt:
      "Choosing a CRM starts with understanding the customer journey, not with comparing product names.",
    category: "CRM & Customer Operations",
    publishedAt: "2026-09-12",
    readingTime: "3",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "en",
    content: [
      "A CRM can organize customer data and follow-up, but it cannot fix an undefined sales process on its own.",
      "Before comparing platforms, map the customer journey: where does a lead come from, who follows up, when does it become a real opportunity, and what data does management need?",
      "Once the process is clear, choosing a CRM becomes a practical decision based on fit, team size, and the level of structure your business actually needs.",
    ],
  },
  {
    title: "Where does automation create real value inside your business?",
    slug: "where-automation-adds-value",
    excerpt:
      "Automation is not the goal. Its value appears when it reduces repetitive work or prevents expensive mistakes.",
    category: "AI & Automation",
    publishedAt: "2026-09-11",
    readingTime: "4",
    coverImage: "/images/brand/moumen-cover.png",
    locale: "en",
    content: [
      "The best automation opportunities are repetitive tasks with clear rules: alerts, data transfer, report creation, and status-based follow-up.",
      "Do not start with the flashiest workflow. Start with what takes the team time every day or creates recurring mistakes, then measure the result before expanding.",
      "Successful automation needs a stable process, clean data, and clear ownership. Without that, you may simply move confusion from people into the system.",
    ],
  },
];

export function getArticles(locale: Locale) {
  return articles
    .filter((article) => article.locale === locale)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getArticle(locale: Locale, slug: string) {
  return articles.find((article) => article.locale === locale && article.slug === slug);
}
