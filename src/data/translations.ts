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
  };
  footer: {
    line: string;
  };
  chrome: {
    resume: string;
    menuOpen: string;
    menuClose: string;
    themeLight: string;
    themeDark: string;
    language: string;
    languages: {
      en: string;
      fa: string;
      tr: string;
    };
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
      availability: "Remote OK",
      headline: "Systems that feel inevitable.",
      support:
        "I design and ship production web and mobile products — clean APIs, sharp interfaces, and architecture that stays maintainable.",
      summary:
        "Full Stack Developer with 3+ years shipping web and mobile products — from REST APIs, auth and SQL models to polished admin panels and real-time dashboards.",
      focus:
        "I specialize in React, Next.js and NestJS with strong TypeScript foundations. Clean architecture, maintainable code, and delivery that holds up in production.",
    },
    hero: {
      viewWork: "View selected work",
      downloadResume: "Download resume",
    },
    work: {
      eyebrow: "Selected work",
      title: "Products shipped for accounting, payments, and operations.",
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
      title: "Path through production teams.",
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
      title: "One stack, end to end.",
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
      title: "Clean architecture. Maintainable delivery.",
      highlights: [
        { label: "One TypeScript stack", detail: "React · Next · Nest — frontend to API" },
        { label: "Web + Mobile", detail: "Admin panels and Expo apps" },
        { label: "Live products", detail: "Accounting & POS platforms shipped" },
      ],
      educationDegree: "M.Sc. Software Engineering",
      educationNote: "Graduate degree",
      educationLanguage: "English — Professional",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build the next production system.",
      support:
        "Open to remote full-stack roles and product collaborations — React, Next.js, NestJS, and beyond.",
      emailMe: "Email me",
      resumePdf: "Resume PDF",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      linkedinName: "Sina Rostamabadi",
    },
    footer: {
      line: "Full Stack Developer · Built with intention · 2026",
    },
    chrome: {
      resume: "Resume",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      language: "Language",
      languages: {
        en: "English",
        fa: "Persian",
        tr: "Turkish",
      },
    },
  },
  fa: {
    nav: [
      { href: "#work", label: "نمونه کارها" },
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
      availability: "آماده کار ریموت",
      headline: "سیستم‌هایی که طبیعی به‌نظر می‌رسند.",
      support:
        "محصولات وب و موبایل پروداکشن طراحی و تحویل می‌دهم؛ API تمیز، رابط کاربری دقیق و معماری قابل نگهداری.",
      summary:
        "توسعه‌دهنده فول‌استک با بیش از ۳ سال تجربه در ساخت محصولات وب و موبایل — از REST API، احراز هویت و مدل‌های SQL تا پنل ادمین و داشبوردهای بلادرنگ.",
      focus:
        "تخصص من React، Next.js و NestJS با پایه قوی TypeScript است. معماری تمیز، کد قابل نگهداری و تحویلی که در پروداکشن دوام می‌آورد.",
    },
    hero: {
      viewWork: "مشاهده نمونه کارها",
      downloadResume: "دانلود رزومه",
    },
    work: {
      eyebrow: "نمونه کارهای منتخب",
      title: "محصولات تحویل‌شده برای حسابداری، پرداخت و عملیات.",
      privateDeployment: "دیپلوی خصوصی",
      projects: [
        {
          ...sharedProjectsMeta.fintech,
          category: "حسابداری و پرداخت",
          title: "حسابداری فین‌تک‌سافت",
          subtitle: "SaaS حسابداری چندمستأجری",
          description:
            "حسابداری چندمستأجری برای فاکتور، تراکنش، حساب بانکی، شرکا، چندارزی، مالیات، کارکنان و حقوق — همراه با ورک‌اسپیس، نقش‌های جزئی و کاملاً دوزبانه EN / TR.",
        },
        {
          ...sharedProjectsMeta.postaxi,
          category: "حسابداری و پرداخت",
          title: "POSTaxi",
          subtitle: "پلتفرم پرداخت برای ناوگان تاکسی",
          description:
            "پنل ادمین و اپ موبایل برای ترمینال‌های POS، رانندگان، ایستگاه‌ها و اینتگریتورها — کمیسیون، پرداخت، تسویه، مغایرت‌گیری و گزارش‌های تراکنش، فعالیت و ریسک.",
        },
        {
          ...sharedProjectsMeta.pospazar,
          category: "حسابداری و پرداخت",
          title: "POSPazar",
          subtitle: "مدیریت POS و پرداخت‌ها",
          description:
            "عملیات پرداخت چندطرفه برای PSPها، اینتگریتورها و ساب‌اینتگریتورها: چرخه عمر ترمینال، تأیید پرداخت، تسویه بانکی، صورتحساب الکترونیکی و گردش‌کار تأیید تغییر داده.",
        },
        {
          ...sharedProjectsMeta.freezone,
          category: "پلتفرم گردش‌کار",
          title: "ترخیص خودرو منطقه آزاد",
          subtitle: "موتور فرایند چندمرحله‌ای قابل پیکربندی",
          description:
            "مراحل موازی، توزیع بار کارشناس، پرداخت فرایند و حضور بلادرنگ نشست — کارتابل وب به‌همراه اپ React Native برای گردش‌کار سازمانی ترخیص.",
        },
      ],
    },
    experience: {
      eyebrow: "سوابق شغلی",
      title: "مسیر در تیم‌های پروداکشن.",
      jobs: [
        {
          role: "توسعه‌دهنده فول‌استک",
          company: "Upwork",
          period: "۱ سال",
          points: [
            "محصولات پروداکشن را end-to-end تحویل دادم — حسابداری، POS / پرداخت و گردش‌کارهای چندمرحله‌ای، از قرارداد API تا UI.",
            "معماری feature-based مشترک (React + TypeScript، TanStack Query، Zustand، Ant Design) طراحی کردم که بین محصولات استفاده شد.",
            "ماژول‌های یکپارچه‌سازی PSP / بانک، کمیسیون، تسویه و صورتحساب الکترونیکی را با JWT + OTP و RBAC مبتنی بر claim ساختم.",
            "قابلیت‌های بلادرنگ SignalR را پیاده کردم و اپ‌های React Native (Expo) برای اینتگریتورها و رانندگان تحویل دادم.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "تجارت پردازان الکترونیک",
          period: "قراردادی",
          points: [
            "فرانت‌اند سیستم ترخیص خودرو منطقه آزاد را توسعه دادم — پلتفرم سازمانی گردش‌کار چندمرحله‌ای قابل پیکربندی.",
            "UI کارتابل وب را برای مراحل موازی، توزیع بار کارشناس، پرداخت فرایند و حضور نشست ساختم.",
            "با React، TypeScript، Ant Design، SignalR و dnd-kit تجربه پروداکشن ترخیص را برای اپراتورها تحویل دادم.",
            "روی اپ همراه React Native (Expo) برای استفاده میدانی و عملیاتی همکاری کردم.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "FutureWaves · لندن، ریموت",
          period: "۲۰۲۳ — اکنون",
          points: [
            "اپ‌های پروداکشن React / Next.js را برای تیم بین‌المللی با SSR / SSG، TypeScript و معماری کامپوننت‌محور توسعه دادم.",
            "لایه‌های state / data (Redux Toolkit، React Query) و UI kitهای قابل استفاده مجدد با MUI، Styled Components و SASS را در تحویل اجایل مدیریت کردم.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "مهارت‌ها",
      title: "یک استک، از ابتدا تا انتها.",
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
      eyebrow: "درباره من",
      title: "معماری تمیز. تحویل قابل نگهداری.",
      highlights: [
        { label: "یک استک TypeScript", detail: "React · Next · Nest — از فرانت تا API" },
        { label: "وب + موبایل", detail: "پنل ادمین و اپ‌های Expo" },
        { label: "محصولات زنده", detail: "پلتفرم‌های حسابداری و POS تحویل‌شده" },
      ],
      educationDegree: "کارشناسی ارشد مهندسی نرم‌افزار",
      educationNote: "مقطع تحصیلات تکمیلی",
      educationLanguage: "انگلیسی — حرفه‌ای",
    },
    contact: {
      eyebrow: "تماس",
      title: "بیایید سیستم پروداکشن بعدی را بسازیم.",
      support:
        "آماده همکاری ریموت فول‌استک و ساخت محصول — React، Next.js، NestJS و فراتر از آن.",
      emailMe: "ایمیل بزنید",
      resumePdf: "رزومه PDF",
      email: "ایمیل",
      phone: "تلفن",
      linkedin: "لینکدین",
      linkedinName: "سینا رستم‌آبادی",
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
      languages: {
        en: "انگلیسی",
        fa: "فارسی",
        tr: "ترکی",
      },
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
      availability: "Remote uygun",
      headline: "Kaçınılmaz hissi veren sistemler.",
      support:
        "Üretim seviyesinde web ve mobil ürünler tasarlayıp teslim ediyorum — temiz API’ler, keskin arayüzler ve sürdürülebilir mimari.",
      summary:
        "3+ yıllık deneyime sahip Full Stack Developer — REST API, kimlik doğrulama ve SQL modellerinden cilalı admin panellerine ve gerçek zamanlı dashboard’lara kadar.",
      focus:
        "React, Next.js ve NestJS alanında TypeScript temelli çalışıyorum. Temiz mimari, sürdürülebilir kod ve production’da ayakta kalan teslimat.",
    },
    hero: {
      viewWork: "Seçili işleri gör",
      downloadResume: "Özgeçmişi indir",
    },
    work: {
      eyebrow: "Seçili işler",
      title: "Muhasebe, ödeme ve operasyon için teslim edilen ürünler.",
      privateDeployment: "Özel deployment",
      projects: [
        {
          ...sharedProjectsMeta.fintech,
          category: "Muhasebe & Ödemeler",
          title: "Fintechsoft Accounting",
          subtitle: "Çok kiracılı muhasebe SaaS",
          description:
            "Faturalar, işlemler, banka hesapları, partnerler, çoklu para birimi, vergi, çalışanlar ve bordro için çok kiracılı muhasebe — workspace’ler, granüler roller ve tam iki dilli EN / TR.",
        },
        {
          ...sharedProjectsMeta.postaxi,
          category: "Muhasebe & Ödemeler",
          title: "POSTaxi",
          subtitle: "Taksi filoları için ödeme platformu",
          description:
            "POS terminalleri, sürücüler, istasyonlar ve entegratörler için admin paneli ve mobil uygulamalar — komisyonlar, ödemeler, payout’lar, mutabakatlar ve işlem, aktivite, risk raporları.",
        },
        {
          ...sharedProjectsMeta.pospazar,
          category: "Muhasebe & Ödemeler",
          title: "POSPazar",
          subtitle: "POS & ödeme yönetimi",
          description:
            "PSP’ler, entegratörler ve alt entegratörler için çok taraflı ödeme operasyonları: terminal yaşam döngüsü, ödeme onayları, banka ödemeleri, e-fatura ve veri değişikliği onay akışları.",
        },
        {
          ...sharedProjectsMeta.freezone,
          category: "İş Akışı Platformu",
          title: "Serbest Bölge Araç Çıkışı",
          subtitle: "Yapılandırılabilir çok aşamalı süreç motoru",
          description:
            "Paralel aşamalar, uzman iş yükü dengeleme, süreç ödemeleri ve gerçek zamanlı oturum varlığı — kurumsal çıkış iş akışı için web kartabl ve React Native mobil uygulama.",
        },
      ],
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Production ekiplerinde yol.",
      jobs: [
        {
          role: "Full Stack Developer",
          company: "Upwork",
          period: "1 yıl",
          points: [
            "Muhasebe, POS / ödemeler ve çok aşamalı iş akışlarını API sözleşmelerinden UI’ye kadar uçtan uca teslim ettim.",
            "Ürünler arasında yeniden kullanılan ortak feature-based mimari tasarladım (React + TypeScript, TanStack Query, Zustand, Ant Design).",
            "PSP / banka entegrasyonları, komisyonlar, ödemeler ve e-fatura modüllerini JWT + OTP ve claim tabanlı RBAC ile kurdum.",
            "SignalR gerçek zamanlı özellikleri uyguladım ve entegratörler ile sürücüler için React Native (Expo) uygulamaları teslim ettim.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "Tejarat Pardazan Electronic",
          period: "Sözleşmeli",
          points: [
            "Serbest Bölge Araç Çıkışı sisteminin front-end’ini geliştirdim — yapılandırılabilir çok aşamalı kurumsal iş akışı platformu.",
            "Paralel süreç aşamaları, uzman iş yükü dengeleme, süreç ödemeleri ve oturum varlığı için web kartabl UI’sini kurdum.",
            "Operatörler için production çıkış deneyimini React, TypeScript, Ant Design, SignalR ve dnd-kit ile teslim ettim.",
            "Saha ve operasyon kullanımı için React Native (Expo) mobil eşlik uygulamasında işbirliği yaptım.",
          ],
        },
        {
          role: "Front-End Developer",
          company: "FutureWaves · Londra, Remote",
          period: "2023 — Günümüz",
          points: [
            "Uluslararası bir ekip için SSR / SSG, TypeScript ve bileşen odaklı mimari ile production React / Next.js uygulamaları geliştirdim.",
            "Agile teslimatta state / data katmanlarını (Redux Toolkit, React Query) ve MUI, Styled Components, SASS ile yeniden kullanılabilir UI kit’lerini yönettim.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Yetenekler",
      title: "Tek stack, uçtan uca.",
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
      title: "Temiz mimari. Sürdürülebilir teslimat.",
      highlights: [
        { label: "Tek TypeScript stack", detail: "React · Next · Nest — frontend’den API’ye" },
        { label: "Web + Mobil", detail: "Admin panelleri ve Expo uygulamaları" },
        { label: "Canlı ürünler", detail: "Muhasebe ve POS platformları teslim edildi" },
      ],
      educationDegree: "Yazılım Mühendisliği Yüksek Lisans",
      educationNote: "Lisansüstü derece",
      educationLanguage: "İngilizce — Profesyonel",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bir sonraki production sistemini birlikte kuralım.",
      support:
        "Remote full-stack roller ve ürün işbirliklerine açığım — React, Next.js, NestJS ve ötesi.",
      emailMe: "E-posta gönder",
      resumePdf: "Özgeçmiş PDF",
      email: "E-posta",
      phone: "Telefon",
      linkedin: "LinkedIn",
      linkedinName: "Sina Rostamabadi",
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
      languages: {
        en: "İngilizce",
        fa: "Farsça",
        tr: "Türkçe",
      },
    },
  },
};
