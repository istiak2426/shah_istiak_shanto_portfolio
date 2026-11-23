export const translations = {
  en: {
    pageTitle: 'Shah Istiak Shanto | Software Engineer',
    brand: 'Shah Istiak Shanto',
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Tech Stack',
      reviews: 'Reviews',
      about: 'About',
      cta: "Let's Talk",
    },
    hero: {
      role: 'Software Engineer',
      location: 'Dhaka, Bangladesh',
      name: 'Shah Istiak Shanto',
      lead:
        'Building scalable production web applications, factory ERP systems, and high-traffic publishing platforms with .NET, React, and SQL Server.',
      ctaProjects: 'View Live Projects',
      ctaCv: 'Download CV',
      ctaTalk: "Let's Talk",
      imageAlt: 'Shah Istiak Shanto, Software Engineer',
      metrics: [
        { value: '5+ Years', label: 'Production Engineering' },
        { value: '3 Flagship', label: 'Live Deployed Apps' },
        { value: '400,000+', label: 'Enterprise Tablets Supported' },
        { value: 'B.Sc. CSE', label: 'BUBT · Dhaka, Bangladesh' },
      ],
    },
    portfolio: {
      eyebrow: 'Live Production Work',
      heading: 'Featured Projects',
      preview: 'Preview',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      closePreview: 'Close preview',
      items: [
        {
          id: 1,
          category: 'Factory ERP · Full-Stack',
          images:
            '/assets/aistudio/screencapture-indigodenim-vercel-app-2026-11-23-13_02_49__1__cff04f6a.png',
          title: 'Indigo Denim — Factory ERP',
          summary:
            'Role-based factory system for production, inventory, sales, payroll & PDF invoicing.',
          github: 'https://github.com/istiak2426/indigo.git',
          demo: 'https://indigodenim.vercel.app',
        },
        {
          id: 2,
          category: 'Digital Publishing · Web App',
          images:
            '/assets/aistudio/screencapture-doinikobhimot-vercel-app-bn-2026-11-23-13_04_36_8f0c3db3.png',
          title: 'Doinik Obhimot — Editorial Platform',
          summary:
            'Bilingual digital publishing platform built for daily editorial workflows and fast reading.',
          github: 'https://github.com/istiak2426/doinikovimot',
          demo: 'https://doinikobhimot.vercel.app/',
        },
        {
          id: 3,
          category: 'E-Commerce · Storefront',
          images:
            '/assets/aistudio/screencapture-exploreelectronics-vercel-app-2026-11-23-13_03_13_9764ba25.png',
          title: 'Explore Electronics — E-Commerce',
          summary:
            'Smart appliance storefront featuring catalog filtering, product specs, and shopping bag.',
          github: 'https://github.com/istiak2426/Explore-Electronics.git',
          demo: 'https://exploreelectronics.vercel.app/',
        },
      ],
    },
    career: {
      eyebrow: 'Work History',
      heading: 'Experience & Education',
      workHeading: 'Work Experience',
      educationHeading: 'Education',
      degreeTitle: 'B.Sc. in Computer Science & Engineering',
      degreeSchool: 'Bangladesh University of Business & Technology (BUBT)',
      degreePeriod: '2015 – 2019',
      quickHeading: 'Quick Hiring Actions',
      quickNote: 'Based in Dhaka, Bangladesh · Open to Software Engineer roles.',
      downloadCv: 'Download CV',
      scheduleContact: 'Schedule / Contact',
      jobs: [
        {
          title: 'Enterprise Application Executive',
          company: 'Prothom Alo',
          period: 'Mar 2024 – Present',
          points: [
            'Maintain and troubleshoot business-critical enterprise applications and user access workflows.',
            'Build SQL reporting pipelines and automate recurring data tasks with Python.',
            'Resolve production incidents with infrastructure and product teams.',
          ],
        },
        {
          title: 'Junior Software Engineer',
          company: 'bdnews24.com',
          period: 'Jun 2022 – Feb 2024',
          points: [
            'Built features and REST APIs for a high-traffic digital news platform and editorial CMS.',
            'Optimized database queries and debugged production performance issues.',
          ],
        },
        {
          title: 'IT Intern',
          company: 'Walton Digi-Tech Industries Ltd.',
          period: 'Jan 2022 – Jun 2022',
          points: [
            'Supported enterprise software rollout across 400,000+ tablets for the Jonoshumari 2022 census.',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'What I Build With',
      heading: 'Core Tech Stack',
      frontendTitle: 'Frontend',
      backendTitle: 'Backend & Data',
      frontendStack: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS'],
      backendStack: [
        'C# / .NET',
        'ASP.NET',
        'Node.js',
        'SQL Server',
        'Python (Data & Automation)',
        'MongoDB',
      ],
    },
    testimonials: {
      eyebrow: 'Review from clients',
      heading: 'Testimonials',
      items: [
        {
          id: 1,
          avater: '/assets/aistudio/image_3bb43e3a.png',
          name: 'Owner — Indigo Denim',
          review:
            'Shanto built our Indigo Denim factory management platform from scratch. Production tracking, raw material inventory, sales, payroll, and financial reporting are now unified in one fast dashboard our team uses every day.',
        },
        {
          id: 2,
          name: 'Doinik Obhimot — Editorial Team',
          review:
            'Clean, responsive, and effortless for our editors to publish daily stories. Readers get a fast experience across mobile and desktop, and the site has been rock-solid since launch.',
        },
        {
          id: 3,
          avater: '/assets/aistudio/image_bde807fc.png',
          name: 'Tanjil Hossan Robin — Explore Electronics',
          review:
            'Our smart home appliance storefront looks sharp and loads fast. Customers can browse inverter refrigerators, washer-dryers, and air purifiers easily with a clean product experience.',
        },
      ],
    },
    about: {
      eyebrow: 'Get to know',
      heading: 'About Me',
      imageAlt: 'Shah Istiak Shanto portrait',
      cards: [
        { title: 'Experience', value: '5+ Years Hands-on' },
        { title: 'Current Role', value: 'Prothom Alo' },
        { title: 'Education', value: 'B.Sc. CSE, BUBT' },
      ],
      summary:
        'Full-stack software engineer with 5+ years of production experience across .NET, React, and SQL Server. Currently at Prothom Alo supporting enterprise systems, reporting pipelines, and data automation.',
      cta: "Let's Talk",
    },
    contact: {
      eyebrow: 'Get in Touch',
      heading: "Let's Talk",
      emailLabel: 'Email',
      messengerLabel: 'Messenger',
      whatsappLabel: 'WhatsApp',
      sendAction: 'Send a message',
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      submitIdle: 'Send Message',
      submitBusy: 'Sending...',
      successMsg: 'Message sent successfully!',
      errorMsg: 'Failed to send message. Try again.',
    },
    footer: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Tech Stack',
      testimonials: 'Testimonials',
      about: 'About',
      contact: 'Contact',
      rights: 'Shah Istiak Shanto. All rights reserved.',
    },
  },
  bn: {
    pageTitle: 'শাহ ইসতিয়াক শান্ত | সফটওয়্যার ইঞ্জিনিয়ার',
    brand: 'শাহ ইসতিয়াক শান্ত',
    nav: {
      projects: 'প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      stack: 'টেক স্ট্যাক',
      reviews: 'রিভিউ',
      about: 'পরিচিতি',
      cta: 'কথা বলুন',
    },
    hero: {
      role: 'সফটওয়্যার ইঞ্জিনিয়ার',
      location: 'ঢাকা, বাংলাদেশ',
      name: 'শাহ ইসতিয়াক শান্ত',
      lead:
        '.NET, React এবং SQL Server ব্যবহার করে স্কেলেবল প্রোডাকশন ওয়েব অ্যাপ্লিকেশন, ফ্যাক্টরি ERP সিস্টেম এবং হাই-ট্রাফিক পাবলিশিং প্ল্যাটফর্ম তৈরি করছি।',
      ctaProjects: 'লাইভ প্রজেক্ট দেখুন',
      ctaCv: 'সিভি ডাউনলোড করুন',
      ctaTalk: 'কথা বলুন',
      imageAlt: 'শাহ ইসতিয়াক শান্ত, সফটওয়্যার ইঞ্জিনিয়ার',
      metrics: [
        { value: '৫+ বছর', label: 'প্রোডাকশন ইঞ্জিনিয়ারিং' },
        { value: '৩টি প্রধান', label: 'লাইভ ডিপ্লয়েড অ্যাপ' },
        { value: '৪,০০,০০০+', label: 'এন্টারপ্রাইজ ট্যাবলেট সাপোর্ট' },
        { value: 'বি.এসসি. CSE', label: 'BUBT · ঢাকা, বাংলাদেশ' },
      ],
    },
    portfolio: {
      eyebrow: 'লাইভ প্রোডাকশন কাজ',
      heading: 'প্রধান প্রজেক্টসমূহ',
      preview: 'প্রিভিউ',
      liveDemo: 'লাইভ ডেমো',
      github: 'GitHub',
      closePreview: 'প্রিভিউ বন্ধ করুন',
      items: [
        {
          id: 1,
          category: 'ফ্যাক্টরি ERP · ফুল-স্ট্যাক',
          images:
            '/assets/aistudio/screencapture-indigodenim-vercel-app-2026-11-23-13_02_49__1__cff04f6a.png',
          title: 'Indigo Denim — ফ্যাক্টরি ERP',
          summary:
            'উৎপাদন, ইনভেন্টরি, সেলস, বেতন এবং PDF ইনভয়েস পরিচালনার রোল-ভিত্তিক ফ্যাক্টরি সিস্টেম।',
          github: 'https://github.com/istiak2426/indigo.git',
          demo: 'https://indigodenim.vercel.app',
        },
        {
          id: 2,
          category: 'ডিজিটাল পাবলিশিং · ওয়েব অ্যাপ',
          images:
            '/assets/aistudio/screencapture-doinikobhimot-vercel-app-bn-2026-11-23-13_04_36_8f0c3db3.png',
          title: 'দৈনিক অভিমত — এডিটোরিয়াল প্ল্যাটফর্ম',
          summary:
            'দৈনিক সম্পাদকীয় কার্যক্রম ও দ্রুত পাঠ অভিজ্ঞতার জন্য নির্মিত দ্বিভাষিক ডিজিটাল প্রকাশনা প্ল্যাটফর্ম।',
          github: 'https://github.com/istiak2426/doinikovimot',
          demo: 'https://doinikobhimot.vercel.app/',
        },
        {
          id: 3,
          category: 'ই-কমার্স · স্টোরফ্রন্ট',
          images:
            '/assets/aistudio/screencapture-exploreelectronics-vercel-app-2026-11-23-13_03_13_9764ba25.png',
          title: 'Explore Electronics — ই-কমার্স',
          summary:
            'ক্যাটালগ ফিল্টারিং, পণ্যের বিস্তারিত এবং শপিং ব্যাগসহ স্মার্ট হোম অ্যাপ্লায়েন্স স্টোরফ্রন্ট।',
          github: 'https://github.com/istiak2426/Explore-Electronics.git',
          demo: 'https://exploreelectronics.vercel.app/',
        },
      ],
    },
    career: {
      eyebrow: 'কর্মজীবনের ইতিহাস',
      heading: 'অভিজ্ঞতা ও শিক্ষা',
      workHeading: 'কর্মঅভিজ্ঞতা',
      educationHeading: 'শিক্ষাগত যোগ্যতা',
      degreeTitle: 'বি.এসসি. ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
      degreeSchool: 'বাংলাদেশ ইউনিভার্সিটি অব বিজনেস অ্যান্ড টেকনোলজি (BUBT)',
      degreePeriod: '২০১৫ – ২০১৯',
      quickHeading: 'দ্রুত নিয়োগ অ্যাকশন',
      quickNote: 'ঢাকা, বাংলাদেশে অবস্থানরত · সফটওয়্যার ইঞ্জিনিয়ার পদের জন্য উন্মুক্ত।',
      downloadCv: 'সিভি ডাউনলোড করুন',
      scheduleContact: 'যোগাযোগ / সময় নির্ধারণ',
      jobs: [
        {
          title: 'এন্টারপ্রাইজ অ্যাপ্লিকেশন এক্সিকিউটিভ',
          company: 'প্রথম আলো',
          period: 'মার্চ ২০২৪ – বর্তমান',
          points: [
            'ব্যবসায়িক-গুরুত্বপূর্ণ এন্টারপ্রাইজ অ্যাপ্লিকেশন এবং ইউজার অ্যাক্সেস ওয়ার্কফ্লো পরিচালনা ও সমস্যা সমাধান।',
            'SQL রিপোর্টিং পাইপলাইন তৈরি এবং Python দিয়ে নিয়মিত ডেটা প্রসেসিং অটোমেশন।',
            'ইনফ্রাস্ট্রাকচার ও প্রোডাক্ট টিমের সাথে সমন্বয় করে প্রোডাকশন সমস্যার সমাধান।',
          ],
        },
        {
          title: 'জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
          company: 'bdnews24.com',
          period: 'জুন ২০২২ – ফেব্রুয়ারি ২০২৪',
          points: [
            'হাই-ট্রাফিক ডিজিটাল নিউজ প্ল্যাটফর্ম ও এডিটোরিয়াল CMS-এর নতুন ফিচার এবং REST API তৈরি।',
            'ডেটাবেস কুয়েরি অপটিমাইজেশন এবং প্রোডাকশন পারফরম্যান্স সমস্যার সমাধান।',
          ],
        },
        {
          title: 'আইটি ইন্টার্ন',
          company: 'ওয়ালটন ডিজি-টেক ইন্ডাস্ট্রিজ লিমিটেড',
          period: 'জানুয়ারি ২০২২ – জুন ২০২২',
          points: [
            'জনশুমারি ২০২২ প্রকল্পে ৪,০০,০০০+ ট্যাবলেটে এন্টারপ্রাইজ সফটওয়্যার ডিপ্লয়মেন্ট সাপোর্ট।',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'প্রযুক্তিগত দক্ষতা',
      heading: 'মূল টেক স্ট্যাক',
      frontendTitle: 'ফ্রন্টএন্ড',
      backendTitle: 'ব্যাকএন্ড ও ডেটা',
      frontendStack: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS'],
      backendStack: [
        'C# / .NET',
        'ASP.NET',
        'Node.js',
        'SQL Server',
        'Python (ডেটা ও অটোমেশন)',
        'MongoDB',
      ],
    },
    testimonials: {
      eyebrow: 'ক্লায়েন্ট রিভিউ',
      heading: 'গ্রাহক মতামত',
      items: [
        {
          id: 1,
          avater: '/assets/aistudio/image_3bb43e3a.png',
          name: 'মালিক — Indigo Denim',
          review:
            'শান্ত শুরু থেকে আমাদের Indigo Denim ফ্যাক্টরি ম্যানেজমেন্ট প্ল্যাটফর্মটি তৈরি করেছেন। প্রোডাকশন ট্র্যাকিং, কাঁচামাল ইনভেন্টরি, সেলস, বেতন এবং আর্থিক রিপোর্ট এখন একটি দ্রুত ড্যাশবোর্ডে একত্রিত হয়েছে যা আমাদের টিম প্রতিদিন ব্যবহার করে।',
        },
        {
          id: 2,
          name: 'সম্পাদকীয় টিম — দৈনিক অভিমত',
          review:
            'পরিচ্ছন্ন, রেসপনসিভ এবং আমাদের সম্পাদকদের জন্য প্রতিদিন সংবাদ প্রকাশ করা অত্যন্ত সহজ। মোবাইল ও ডেস্কটপে পাঠকরা দ্রুত অভিজ্ঞতা পাচ্ছেন এবং শুরু থেকেই সাইটটি নির্ভরযোগ্যভাবে চলছে।',
        },
        {
          id: 3,
          avater: '/assets/aistudio/image_bde807fc.png',
          name: 'তানজিল হোসেন রবিন — Explore Electronics',
          review:
            'আমাদের স্মার্ট হোম অ্যাপ্লায়েন্স স্টোরফ্রন্টটি চমৎকার ও দ্রুত লোড হয়। গ্রাহকরা ইনভার্টার রেফ্রিজারেটর, ওয়াশার-ড্রায়ার এবং এয়ার পিউরিফায়ার সহজেই ব্রাউজ করতে পারছেন।',
        },
      ],
    },
    about: {
      eyebrow: 'পরিচিতি',
      heading: 'আমার সম্পর্কে',
      imageAlt: 'শাহ ইসতিয়াক শান্তর প্রতিকৃতি',
      cards: [
        { title: 'অভিজ্ঞতা', value: '৫+ বছরের বাস্তব কাজ' },
        { title: 'বর্তমান কর্মস্থল', value: 'প্রথম আলো' },
        { title: 'শিক্ষা', value: 'বি.এসসি. CSE, BUBT' },
      ],
      summary:
        '.NET, React এবং SQL Server-এ ৫+ বছরের প্রোডাকশন অভিজ্ঞতাসম্পন্ন ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার। বর্তমানে প্রথম আলো-তে এন্টারপ্রাইজ সিস্টেম, রিপোর্টিং পাইপলাইন এবং ডেটা অটোমেশনে কাজ করছি।',
      cta: 'কথা বলুন',
    },
    contact: {
      eyebrow: 'যোগাযোগ করুন',
      heading: 'কথা বলুন',
      emailLabel: 'ইমেইল',
      messengerLabel: 'মেসেঞ্জার',
      whatsappLabel: 'হোয়াটসঅ্যাপ',
      sendAction: 'বার্তা পাঠান',
      namePlaceholder: 'আপনার পূর্ণ নাম',
      emailPlaceholder: 'আপনার ইমেইল',
      messagePlaceholder: 'আপনার বার্তা লিখুন',
      submitIdle: 'বার্তা পাঠান',
      submitBusy: 'পাঠানো হচ্ছে...',
      successMsg: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
      errorMsg: 'বার্তা পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    footer: {
      home: 'হোম',
      projects: 'প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      stack: 'টেক স্ট্যাক',
      testimonials: 'মতামত',
      about: 'পরিচিতি',
      contact: 'যোগাযোগ',
      rights: 'শাহ ইসতিয়াক শান্ত। সর্বস্বত্ব সংরক্ষিত।',
    },
  },
};

export function formatBengaliYear(year) {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(year)
    .split('')
    .map((ch) => (ch >= '0' && ch <= '9' ? digits[Number(ch)] : ch))
    .join('');
}
