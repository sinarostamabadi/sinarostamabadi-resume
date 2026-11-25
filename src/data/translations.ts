export type Locale = "en" | "fa" | "tr";

export const locales: Locale[] = ["en", "fa", "tr"];

export type Translation = {
  nav: { href: string; label: string }[];
  profile: {
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    stackLine: string;
    city: string;
    availability: string;
    headline: string;
    support: string;
    summary: string;
    focus: string;
  };
  hero: {
    viewWork: string;
    downloadResume: string;
  };
  work: {
    eyebrow: string;
    title: string;
    privateDeployment: string;
    projects: {
      id: string;
      category: string;
      title: string;
      subtitle: string;
      description: string;
      tags: string[];
      url: string | null;
      urlLabel: string | null;
    }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    jobs: {
      role: string;
      company: string;
      period: string;
      points: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    levelExpert: string;
    levelAdvanced: string;
    groups: { title: string; items: string[] }[];
  };
  about: {
    eyebrow: string;
    title: string;
    highlights: { label: string; detail: string }[];
    educationDegree: string;
    educationNote: string;
    educationLanguage: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    support: string;
    emailMe: string;
    resumePdf: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinName: string;
    basedIn: string;
  };
  footer: { line: string };
  chrome: {
    resume: string;
    menuOpen: string;
    menuClose: string;
    themeLight: string;
    themeDark: string;
    language: string;
    languages: { en: string; fa: string; tr: string };
  };
};

const sharedProjectsMeta = {
  fintech: {
    id: "01",
    url: "https://muhasebetest.fintechsoft.com",
    urlLabel: "muhasebetest.fintechsoft.com",
    tags: ["React", "TypeScript", "TanStack Query", "Zustand", "Ant Design", "RBAC", "i18next", "Recharts"],
  },
  postaxi: {
    id: "02",
    url: "https://panel.pos.taxi",
    urlLabel: "panel.pos.taxi",
    tags: ["React", "TypeScript", "JWT / OTP", "TanStack Query", "ExcelJS", "React Native"],
  },
  pospazar: {
    id: "03",
    url: "https://panel.pospazar.net",
    urlLabel: "panel.pospazar.net",
    tags: ["React", "TypeScript", "PSP Integrations", "E-Invoicing", "Zustand", "React Native"],
  },
  freezone: {
    id: "04",
    url: null as string | null,
    urlLabel: null as string | null,
    tags: ["React", "SignalR", "dnd-kit", "Ant Design", "React Native"],
  },
};

export const translations: Record<Locale, Translation> = {
  en: {
    nav: [
      { href: "#work", label: "Work" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    profile: {
      firstName: "Sina",
      lastName: "Rostamabadi",
      name: "Sina Rostamabadi",
      role: "Full Stack Developer",
      stackLine: "React · Next.js · NestJS",
      city: "Karaj, Iran",
      availability: "Open to remote",
      headline: "I build production-ready systems.",
      support:
        "Clean APIs, sharp interfaces, and maintainable architecture for real-world web and mobile products.",
      summary:
        "Full Stack Developer with 3+ years of experience building production web and mobile products — from REST APIs and authentication to admin panels and real-time dashboards.",
      focus:
        "Focused on React, Next.js and NestJS with strong TypeScript. I care about clean architecture, readable code, and delivery that holds up in production.",
    },
    hero: {
      viewWork: "View selected work",
      downloadResume: "Download resume",
    },
    work: {
      eyebrow: "Selected work",
      title: "Shipped products for accounting, payments, and operations.",
      privateDeployment: "Private deployment",
      projects: [
        {
          ...sharedProjectsMeta.fintech,
          category: "Accounting & Payments",
          title: "Fintechsoft Accounting",
          subtitle: "Multi-tenant Accounting SaaS",
          description:
            "Multi-tenant accounting for invoices, transactions, bank accounts, partners, multi-currency, tax, employees and payroll — with workspaces, granular roles, and fully bilingual EN / TR.",
        },
        {
          ...sharedProjectsMeta.postaxi,
          category: "Accounting & Payments",
          title: "POSTaxi",
          subtitle: "Payment Platform for Taxi Fleets",
          description:
            "Admin panel and mobile apps for POS terminals, drivers, stations and integrators — commissions, payments, payouts, reconciliations, plus transaction, activity and risk reports.",
        },
        {
          ...sharedProjectsMeta.pospazar,
          category: "Accounting & Payments",
          title: "POSPazar",
          subtitle: "POS & Payments Management",
          description:
            "Multi-party payment operations for PSPs, integrators and sub-integrators: terminal lifecycle, payment approvals, bank payouts, e-invoicing and data-change approval workflows.",
        },
        {
          ...sharedProjectsMeta.freezone,
          category: "Workflow Platform",
          title: "Free-Zone Vehicle Clearance",
          subtitle: "Configurable multi-stage process engine",
          description:
            "Parallel stages, expert workload balancing, process payments and real-time session presence — web cartable plus React Native mobile app for an enterprise clearance workflow.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Roles & delivery.",
      lead: "Full-stack and front-end delivery across accounting, payments, and operations products.",
      jobs: [
        {
          role: "Full Stack Developer",
          company: "Upwork",
          period: "1 year",
          points: [
            "Delivered production products end-to-end — accounting, POS / payments and multi-stage workflows, from API contracts to UI.",
            "Designed a shared feature-based architecture (React + TypeScript, TanStack Query, Zustand, Ant Design) reused across products.",
            "Built modules for PSP / bank integrations, commissions, payouts and e-invoicing, with secure JWT + OTP auth and claim-based RBAC.",
            "Implemented SignalR real-time features and shipped React Native (Expo) apps for integrators and drivers.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "Tejarat Pardazan Electronic",
          period: "Contract",
          points: [
            "Developed the front end of the Free-Zone Vehicle Clearance system — a configurable multi-stage enterprise workflow platform.",
            "Built the web cartable UI for parallel process stages, expert workload balancing, process payments and session presence.",
            "Worked with React, TypeScript, Ant Design, SignalR and dnd-kit to deliver a production clearance experience for operators.",
            "Collaborated on the React Native (Expo) mobile companion for field and operational use.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "FutureWaves · London, Remote",
          period: "2023 — Present",
          points: [
            "Developed production React / Next.js apps for an international team using SSR / SSG, TypeScript and component-driven architecture.",
            "Owned state / data layers (Redux Toolkit, React Query) and reusable UI kits with MUI, Styled Components and SASS in agile delivery.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "One stack from frontend to backend.",
      levelExpert: "Expert",
      levelAdvanced: "Advanced",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "Vite", "SSR / SSG", "HTML / CSS"] },
        { title: "Backend", items: ["NestJS", "Node.js", "Express", "REST APIs", "DTO Validation"] },
        { title: "Data", items: ["SQL", "Prisma", "TypeORM", "Sequelize", "Redis"] },
        { title: "Mobile", items: ["React Native", "Expo"] },
        {
          title: "UI & state",
          items: ["Ant Design", "MUI", "Tailwind", "TanStack Query", "Zustand", "Redux Toolkit"],
        },
        { title: "Security", items: ["JWT / OTP", "RBAC", "SignalR", "i18n", "PSP integrations"] },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Clean architecture. Reliable delivery.",
      highlights: [
        { label: "One TypeScript stack", detail: "React · Next · Nest — frontend to API" },
        { label: "Web + Mobile", detail: "Admin panels and Expo apps" },
        { label: "Live products", detail: "Accounting and POS platforms in production" },
      ],
      educationDegree: "M.Sc. Software Engineering",
      educationNote: "Graduate degree",
      educationLanguage: "English — Professional",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build the next production product.",
      support:
        "Available for remote full-stack roles and product collaborations with React, Next.js and NestJS.",
      emailMe: "Email me",
      resumePdf: "Resume PDF",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      linkedinName: "Sina Rostamabadi",
      basedIn: "Based in",
    },
    footer: {
      line: "Full Stack Developer · Built with care · 2026",
    },
    chrome: {
      resume: "Resume",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      language: "Language",
      languages: { en: "English", fa: "Persian", tr: "Turkish" },
    },
  },
  fa: {
    nav: [
      { href: "#work", label: "کارها" },
      { href: "#experience", label: "سوابق" },
      { href: "#skills", label: "مهارت‌ها" },
      { href: "#about", label: "درباره" },
      { href: "#contact", label: "تماس" },
    ],
    profile: {
      firstName: "سینا",
      lastName: "رستم‌آبادی",
      name: "سینا رستم‌آبادی",
      role: "توسعه‌دهنده فول‌استک",
      stackLine: "React · Next.js · NestJS",
      city: "کرج، ایران",
      availability: "آماده همکاری ریموت",
      headline: "سیستم‌های پایدار برای محصول واقعی می‌سازم.",
      support:
        "API تمیز، رابط کاربری دقیق و معماری قابل‌نگهداری برای وب و موبایل در محیط پروداکشن.",
      summary:
        "توسعه‌دهنده فول‌استک با بیش از ۳ سال تجربه در ساخت محصولات وب و موبایل؛ از REST API و احراز هویت تا پنل ادمین و داشبوردهای لحظه‌ای.",
      focus:
        "تمرکزم روی React، Next.js و NestJS با TypeScript قوی است. معماری تمیز، کد خوانا و تحویلی که در پروداکشن پایدار بماند.",
    },
    hero: {
      viewWork: "مشاهده کارها",
      downloadResume: "دانلود رزومه",
    },
    work: {
      eyebrow: "نمونه کارها",
      title: "محصولات واقعی در حسابداری، پرداخت و عملیات.",
      privateDeployment: "نسخه خصوصی",
      projects: [
        {
          ...sharedProjectsMeta.fintech,
          category: "حسابداری و پرداخت",
          title: "حسابداری فین‌تک‌سافت",
          subtitle: "سامانه حسابداری چندمستأجری",
          description:
            "سامانه حسابداری چندمستأجری برای فاکتور، تراکنش، حساب بانکی، شرکا، چندارزی، مالیات و حقوق — با فضای کاری، نقش‌های دقیق و پشتیبانی کامل دوزبانه انگلیسی و ترکی.",
        },
        {
          ...sharedProjectsMeta.postaxi,
          category: "حسابداری و پرداخت",
          title: "POSTaxi",
          subtitle: "پلتفرم پرداخت ناوگان تاکسی",
          description:
            "پنل ادمین و اپ موبایل برای ترمینال POS، راننده، ایستگاه و اینتگریتور — شامل کمیسیون، پرداخت، تسویه، مغایرت‌گیری و گزارش تراکنش و ریسک.",
        },
        {
          ...sharedProjectsMeta.pospazar,
          category: "حسابداری و پرداخت",
          title: "POSPazar",
          subtitle: "مدیریت POS و پرداخت",
          description:
            "عملیات پرداخت چندطرفه برای PSP و اینتگریتور: چرخه عمر ترمینال، تأیید پرداخت، تسویه بانکی، صورتحساب الکترونیکی و گردش‌کار تأیید تغییرات.",
        },
        {
          ...sharedProjectsMeta.freezone,
          category: "پلتفرم گردش‌کار",
          title: "ترخیص خودرو منطقه آزاد",
          subtitle: "موتور فرایند چندمرحله‌ای قابل پیکربندی",
          description:
            "مراحل موازی، توزیع کار کارشناس، پرداخت فرایند و حضور لحظه‌ای نشست — کارتابل وب به‌همراه اپ React Native برای ترخیص سازمانی.",
        },
      ],
    },
    experience: {
      eyebrow: "سوابق",
      title: "نقش‌ها و تحویل محصول.",
      lead: "تحویل فول‌استک و فرانت‌اند در محصولات حسابداری، پرداخت و عملیات.",
      jobs: [
        {
          role: "توسعه‌دهنده فول‌استک",
          company: "Upwork",
          period: "۱ سال",
          points: [
            "محصولات حسابداری، پرداخت و گردش‌کار چندمرحله‌ای را از طراحی API تا رابط کاربری تحویل دادم.",
            "معماری مشترک مبتنی بر فیچر با React و TypeScript ساختم که بین چند محصول استفاده شد.",
            "ماژول‌های اتصال به درگاه و بانک، کمیسیون، تسویه و صورتحساب الکترونیکی را با احراز هویت امن پیاده‌سازی کردم.",
            "قابلیت‌های لحظه‌ای با SignalR و اپ موبایل React Native برای اینتگریتورها و رانندگان تحویل دادم.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "تجارت پردازان الکترونیک",
          period: "قراردادی",
          points: [
            "فرانت‌اند سیستم ترخیص خودرو منطقه آزاد را توسعه دادم؛ یک پلتفرم سازمانی با گردش‌کار چندمرحله‌ای.",
            "کارتابل وب را برای مراحل موازی، توزیع کار کارشناس، پرداخت فرایند و حضور آنلاین ساختم.",
            "با React، TypeScript، Ant Design و SignalR تجربه کاری پایدار برای اپراتورها آماده کردم.",
            "در ساخت اپ موبایل React Native برای استفاده میدانی همکاری داشتم.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "FutureWaves · لندن، ریموت",
          period: "۲۰۲۳ — اکنون",
          points: [
            "اپلیکیشن‌های React و Next.js را برای تیم بین‌المللی با SSR/SSG و TypeScript توسعه دادم.",
            "لایه state و data و کامپوننت‌های قابل‌استفاده مجدد را در تحویل اجایل مدیریت کردم.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "مهارت‌ها",
      title: "یک استک از فرانت تا بک‌اند.",
      levelExpert: "خبره",
      levelAdvanced: "پیشرفته",
      groups: [
        { title: "فرانت‌اند", items: ["React", "Next.js", "Vite", "SSR / SSG", "HTML / CSS"] },
        { title: "بک‌اند", items: ["NestJS", "Node.js", "Express", "REST APIs", "DTO Validation"] },
        { title: "داده", items: ["SQL", "Prisma", "TypeORM", "Sequelize", "Redis"] },
        { title: "موبایل", items: ["React Native", "Expo"] },
        {
          title: "UI و state",
          items: ["Ant Design", "MUI", "Tailwind", "TanStack Query", "Zustand", "Redux Toolkit"],
        },
        { title: "امنیت", items: ["JWT / OTP", "RBAC", "SignalR", "i18n", "یکپارچه‌سازی PSP"] },
      ],
    },
    about: {
      eyebrow: "درباره",
      title: "معماری تمیز. تحویل قابل اعتماد.",
      highlights: [
        { label: "یک استک TypeScript", detail: "React · Next · Nest — از فرانت تا API" },
        { label: "وب و موبایل", detail: "پنل ادمین و اپ‌های Expo" },
        { label: "محصولات زنده", detail: "پلتفرم حسابداری و POS در پروداکشن" },
      ],
      educationDegree: "کارشناسی ارشد مهندسی نرم‌افزار",
      educationNote: "تحصیلات تکمیلی",
      educationLanguage: "انگلیسی — سطح حرفه‌ای",
    },
    contact: {
      eyebrow: "تماس",
      title: "برای محصول بعدی آماده‌ام.",
      support:
        "برای موقعیت فول‌استک ریموت و همکاری محصولی با React، Next.js و NestJS در دسترس هستم.",
      emailMe: "ارسال ایمیل",
      resumePdf: "دانلود رزومه",
      email: "ایمیل",
      phone: "تلفن",
      linkedin: "لینکدین",
      linkedinName: "سینا رستم‌آبادی",
      basedIn: "مستقر در",
    },
    footer: {
      line: "توسعه‌دهنده فول‌استک · ساخته‌شده با دقت · ۲۰۲۶",
    },
    chrome: {
      resume: "رزومه",
      menuOpen: "باز کردن منو",
      menuClose: "بستن منو",
      themeLight: "حالت روشن",
      themeDark: "حالت تیره",
      language: "زبان",
      languages: { en: "انگلیسی", fa: "فارسی", tr: "ترکی" },
    },
  },
  tr: {
    nav: [
      { href: "#work", label: "İşler" },
      { href: "#experience", label: "Deneyim" },
      { href: "#skills", label: "Yetenekler" },
      { href: "#about", label: "Hakkımda" },
      { href: "#contact", label: "İletişim" },
    ],
    profile: {
      firstName: "Sina",
      lastName: "Rostamabadi",
      name: "Sina Rostamabadi",
      role: "Full Stack Developer",
      stackLine: "React · Next.js · NestJS",
      city: "Karaj, İran",
      availability: "Remote’a açığım",
      headline: "Production’a hazır sistemler geliştiriyorum.",
      support: "Gerçek ürünler için temiz API’ler, güçlü arayüzler ve sürdürülebilir mimari.",
      summary:
        "3+ yıllık deneyime sahip Full Stack Developer. REST API ve kimlik doğrulamadan admin panellerine ve gerçek zamanlı dashboard’lara kadar production ürünler geliştirdim.",
      focus:
        "React, Next.js ve NestJS odaklı çalışıyorum. Temiz mimari, okunabilir kod ve production’da ayakta kalan teslimat.",
    },
    hero: {
      viewWork: "İşleri gör",
      downloadResume: "Özgeçmişi indir",
    },
    work: {
      eyebrow: "Seçili işler",
      title: "Muhasebe, ödeme ve operasyon için canlı ürünler.",
      privateDeployment: "Özel sürüm",
      projects: [
        {
          ...sharedProjectsMeta.fintech,
          category: "Muhasebe & Ödemeler",
          title: "Fintechsoft Accounting",
          subtitle: "Çok kiracılı muhasebe SaaS",
          description:
            "Faturalar, işlemler, banka hesapları, partnerler, çoklu para birimi, vergi, çalışanlar ve bordro için çok kiracılı muhasebe — workspace’ler, ayrıntılı roller ve tam iki dilli EN / TR.",
        },
        {
          ...sharedProjectsMeta.postaxi,
          category: "Muhasebe & Ödemeler",
          title: "POSTaxi",
          subtitle: "Taksi filoları için ödeme platformu",
          description:
            "POS terminalleri, sürücüler, istasyonlar ve entegratörler için admin paneli ve mobil uygulamalar — komisyonlar, ödemeler, payout’lar, mutabakatlar ve işlem / risk raporları.",
        },
        {
          ...sharedProjectsMeta.pospazar,
          category: "Muhasebe & Ödemeler",
          title: "POSPazar",
          subtitle: "POS & ödeme yönetimi",
          description:
            "PSP’ler ve entegratörler için çok taraflı ödeme operasyonları: terminal yaşam döngüsü, ödeme onayları, banka ödemeleri, e-fatura ve veri değişikliği onay akışları.",
        },
        {
          ...sharedProjectsMeta.freezone,
          category: "İş Akışı Platformu",
          title: "Serbest Bölge Araç Çıkışı",
          subtitle: "Yapılandırılabilir çok aşamalı süreç motoru",
          description:
            "Paralel aşamalar, uzman iş dağılımı, süreç ödemeleri ve gerçek zamanlı oturum varlığı — kurumsal çıkış için web kartabl ve React Native mobil uygulama.",
        },
      ],
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Roller & teslimat.",
      lead: "Muhasebe, ödeme ve operasyon ürünlerinde full-stack ve front-end teslimat.",
      jobs: [
        {
          role: "Full Stack Developer",
          company: "Upwork",
          period: "1 yıl",
          points: [
            "Muhasebe, ödeme ve çok aşamalı iş akışı ürünlerini API’den arayüze kadar uçtan uca teslim ettim.",
            "Birden fazla üründe kullanılan ortak React + TypeScript mimarisi kurdum.",
            "Ödeme sağlayıcı ve banka entegrasyonları, komisyon, payout ve e-fatura modüllerini güvenli kimlik doğrulama ile geliştirdim.",
            "SignalR ile gerçek zamanlı özellikler ve entegratör / sürücü uygulamaları için React Native teslim ettim.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "Tejarat Pardazan Electronic",
          period: "Sözleşmeli",
          points: [
            "Serbest Bölge Araç Çıkışı sisteminin front-end’ini geliştirdim; çok aşamalı kurumsal iş akışı platformu.",
            "Paralel aşamalar, uzman iş dağılımı, süreç ödemeleri ve oturum varlığı için web kartabl arayüzü kurdum.",
            "React, TypeScript, Ant Design ve SignalR ile operatörler için production deneyimi teslim ettim.",
            "Saha kullanımı için React Native mobil uygulamada katkı sağladım.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "FutureWaves · Londra, Remote",
          period: "2023 — Günümüz",
          points: [
            "Uluslararası ekip için SSR/SSG ve TypeScript ile production React / Next.js uygulamaları geliştirdim.",
            "State / data katmanlarını ve yeniden kullanılabilir UI bileşenlerini agile teslimatta yönettim.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Yetenekler",
      title: "Tek stack: frontend’den backend’e.",
      levelExpert: "Uzman",
      levelAdvanced: "İleri",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "Vite", "SSR / SSG", "HTML / CSS"] },
        { title: "Backend", items: ["NestJS", "Node.js", "Express", "REST APIs", "DTO Validation"] },
        { title: "Veri", items: ["SQL", "Prisma", "TypeORM", "Sequelize", "Redis"] },
        { title: "Mobil", items: ["React Native", "Expo"] },
        {
          title: "UI & state",
          items: ["Ant Design", "MUI", "Tailwind", "TanStack Query", "Zustand", "Redux Toolkit"],
        },
        { title: "Güvenlik", items: ["JWT / OTP", "RBAC", "SignalR", "i18n", "PSP entegrasyonları"] },
      ],
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Temiz mimari. Güvenilir teslimat.",
      highlights: [
        { label: "Tek TypeScript stack", detail: "React · Next · Nest — frontend’den API’ye" },
        { label: "Web + Mobil", detail: "Admin panelleri ve Expo uygulamaları" },
        { label: "Canlı ürünler", detail: "Muhasebe ve POS platformları production’da" },
      ],
      educationDegree: "Yazılım Mühendisliği Yüksek Lisans",
      educationNote: "Lisansüstü",
      educationLanguage: "İngilizce — Profesyonel",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bir sonraki ürün için hazırım.",
      support: "Remote full-stack roller ve React, Next.js, NestJS ürün işbirliklerine açığım.",
      emailMe: "E-posta gönder",
      resumePdf: "Özgeçmiş PDF",
      email: "E-posta",
      phone: "Telefon",
      linkedin: "LinkedIn",
      linkedinName: "Sina Rostamabadi",
      basedIn: "Konum",
    },
    footer: {
      line: "Full Stack Developer · Özenle üretildi · 2026",
    },
    chrome: {
      resume: "Özgeçmiş",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
      themeLight: "Açık mod",
      themeDark: "Koyu mod",
      language: "Dil",
      languages: { en: "İngilizce", fa: "Farsça", tr: "Türkçe" },
    },
  },
};
