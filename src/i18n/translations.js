export const translations = {
  en: {
    pageTitle: 'Shah Istiak Shanto | Security Engineering & Detection Operations',
    brand: 'Shah Istiak Shanto',
    nav: {
      labs: 'Security Labs',
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Skills',
      about: 'Profile',
      cta: "Let's Talk",
    },
    hero: {
      role: 'Security Engineering · Detection & Automation · IT Operations',
      location: 'Dhaka, Bangladesh',
      name: 'Shah Istiak Shanto',
      lead:
        'Security-focused IT professional with 5+ years in enterprise application support, user access governance, and software development (Python, C#, SQL, REST APIs). Building detection and response engineering workflows with Elastic/Wazuh SIEM, Sigma rules, OAuth/OIDC security analysis, EDR/SaaS alert enrichment, and LLM-assisted triage.',
      ctaProjects: 'Explore Security Labs',
      ctaCv: 'Download CV',
      ctaTalk: "Let's Talk",
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      imageAlt: 'Shah Istiak Shanto, Security Engineering & IT Operations',
      metrics: [
        { value: '4 Security Labs', label: 'SIEM, Enrichment, OIDC & LLM Triage' },
        { value: '5+ Years', label: 'Access Control, Incidents & Automation' },
        { value: '20 Alerts', label: 'Evaluated in LLM Triage Workflow' },
        { value: '400,000+', label: 'Enterprise Devices Supported' },
      ],
    },
    hrBrief: {
      eyebrow: 'Executive Hiring Summary',
      heading: 'Security Engineering & Operations Fit',
      pillars: [
        {
          index: '01.',
          title: 'Detection Engineering & Alert Triage',
          description:
            'Building Elastic and Wazuh SIEM detection labs with simulated attack telemetry, Sigma rules mapped to MITRE ATT&CK, and LLM-assisted triage evaluated on 20 labeled alerts.',
        },
        {
          index: '02.',
          title: 'Identity, Access & Endpoint Operations',
          description:
            '5+ years managing application access, user permissions, and production incidents at Prothom Alo alongside Active Directory, OAuth 2.0/OIDC token replay analysis, and 400k+ device fleet support.',
        },
        {
          index: '03.',
          title: 'Security Automation & Log Pipelines',
          description:
            'Writing Python scripts to pull EDR/SaaS API data for alert enrichment and response actions, backed by C#, ASP.NET, REST APIs, and optimized SQL Server / MariaDB reporting.',
        },
      ],
      targetLabel: 'Target Security Roles',
      targetRoles:
        'Security Engineer · Detection & Response Engineer · Security Automation / IAM Operations',
      availabilityLabel: 'Location & Availability',
      availability: 'Dhaka, Bangladesh · Available for Onsite, Hybrid & Remote',
      copyEmail: 'Copy Email',
      copyPhone: 'Copy Phone',
      copied: 'Copied',
    },
    securityLabs: {
      eyebrow: 'Hands-On Security Engineering',
      heading: 'Security Labs & Detection Workflows',
      note:
        'In Progress · Self-study in SIEM, incident triage, and threat intelligence. No cybersecurity certification claimed at this time.',
      filterLabel: 'Filter security labs by domain',
      filters: [
        { key: 'all', label: 'All Labs' },
        { key: 'detection', label: 'Detection & SIEM' },
        { key: 'automation', label: 'Automation & LLM' },
        { key: 'identity', label: 'Identity & Access' },
      ],
      objectiveLabel: 'Objective',
      workflowLabel: 'Lab Workflow',
      toolsLabel: 'Stack & Scope',
      viewDetails: 'Inspect Workflow',
      hideDetails: 'Hide Workflow',
      readinessLabel: 'Operational Foundation',
      readinessText:
        'Backed by 5+ years of enterprise access management, Windows & Ubuntu/Linux troubleshooting, TCP/IP & DNS operations, and production incident response.',
      ctaTalk: 'Discuss Security Fit',
      labs: [
        {
          id: 'detection',
          domain: 'detection',
          index: '01.',
          title: 'SIEM Detection & MITRE ATT&CK Lab',
          focus: 'Detection & Response · Elastic / Wazuh · Sigma Rules',
          description:
            'Simulated attack telemetry ingested into an Elastic and Wazuh lab with detection rules mapped directly to MITRE ATT&CK.',
          objective:
            'Practice security log analysis, alert fidelity tuning, and structured threat mapping across endpoint and authentication logs.',
          workflow:
            'Simulate adversary behaviors -> collect & normalize endpoint/system logs -> write Sigma & Elastic detection rules -> map coverage to MITRE ATT&CK.',
          tools: 'Elastic · Wazuh · Sigma Rules · MITRE ATT&CK · Security Log Analysis',
        },
        {
          id: 'enrichment',
          domain: 'automation',
          index: '02.',
          title: 'Automated EDR & SaaS Alert Enrichment',
          focus: 'Security Automation · Python · EDR & SaaS APIs',
          description:
            'Python automation scripts that query EDR and SaaS REST APIs to enrich incoming alerts and trigger structured response actions.',
          objective:
            'Reduce repetitive manual context-gathering during incident triage by joining host, account, and application telemetry automatically.',
          workflow:
            'Ingest alert payload -> query EDR & SaaS APIs via Python -> append user/device context -> trigger scripted containment or escalation steps.',
          tools: 'Python · REST APIs · EDR APIs · SaaS Telemetry · Incident Lifecycle',
        },
        {
          id: 'identity',
          domain: 'identity',
          index: '03.',
          title: 'OIDC Identity & Token Security Lab',
          focus: 'Identity & Access · OAuth 2.0 / OIDC · JWT Lifecycle',
          description:
            'OIDC authentication application with token refresh handling, built alongside hands-on analysis of token theft and replay vectors.',
          objective:
            'Deepen practical understanding of modern identity protocols, refresh token boundaries, and session abuse paths.',
          workflow:
            'Implement OIDC login & token refresh -> inspect JWT claims and expiry -> simulate token theft & replay scenarios -> document mitigation checks.',
          tools: 'OAuth 2.0 · OIDC · JWT Lifecycle · Token Replay Analysis · Access Control',
        },
        {
          id: 'llm-triage',
          domain: 'automation',
          index: '04.',
          title: 'LLM-Assisted Alert Triage Assistant',
          focus: 'Triage Automation · LLM Workflows · 20 Labeled Alerts',
          description:
            'Workflow assistant that reads security logs, explains why an alert fired, and recommends investigation next steps — evaluated across 20 labeled alerts.',
          objective:
            'Test structured prompting, tool calling, and output evaluation to support faster Tier-1 alert triage without blind trust.',
          workflow:
            'Parse raw security log -> summarize indicators & blast radius -> propose analyst verification steps -> benchmark accuracy on 20 labeled alerts.',
          tools: 'Prompting · Tool Use / Function Calling · Evaluation Basics · Alert Triage',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Production Engineering Proof',
      heading: 'Top 3 Production Systems',
      preview: 'Preview',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      closePreview: 'Close preview',
      items: [
        {
          id: 1,
          category: 'Role-Based ERP · Access Control',
          images:
            '/assets/aistudio/screencapture-indigodenim-vercel-app-2026-11-23-13_02_49__1__cff04f6a.png',
          title: 'Indigo Denim — Factory ERP',
          summary:
            'Multi-role factory system enforcing staff permissions across Admin, Stock, Production, Sales, and Accounts with audit-ready PDF invoicing.',
          github: 'https://github.com/istiak2426/indigo.git',
          demo: 'https://indigodenim.vercel.app',
        },
        {
          id: 2,
          category: 'Digital Publishing · Reliability',
          images:
            '/assets/aistudio/screencapture-doinikobhimot-vercel-app-bn-2026-11-23-13_04_36_8f0c3db3.png',
          title: 'Doinik Obhimot — Editorial Platform',
          summary:
            'Bilingual digital news platform engineered for resilient daily publishing workflows, structured content delivery, and fast reading.',
          github: 'https://github.com/istiak2426/doinikovimot',
          demo: 'https://doinikobhimot.vercel.app/',
        },
        {
          id: 3,
          category: 'E-Commerce · Full-Stack',
          images:
            '/assets/aistudio/screencapture-exploreelectronics-vercel-app-2026-11-23-13_03_13_9764ba25.png',
          title: 'Explore Electronics — E-Commerce',
          summary:
            'Smart appliance storefront featuring structured catalog validation, product specifications, and responsive checkout flow.',
          github: 'https://github.com/istiak2426/Explore-Electronics.git',
          demo: 'https://exploreelectronics.vercel.app/',
        },
      ],
    },
    career: {
      eyebrow: 'Operational & Engineering Track Record',
      heading: 'Experience & Education',
      workHeading: 'Work Experience',
      educationHeading: 'Education',
      educationList: [
        {
          title: 'B.Sc. in Computer Science & Engineering',
          school: 'Bangladesh University of Business & Technology (BUBT)',
          period: '2015 – 2019 | CGPA: 2.95/4.00',
        },
        {
          title: 'Higher Secondary Certificate',
          school: 'Bangladesh Navy College, Dhaka',
          period: '2012 – 2014 | GPA: 4.80/5.00',
        },
        {
          title: 'Secondary School Certificate',
          school: 'Monipur School & College, Dhaka',
          period: '2002 – 2011 | GPA: 4.69/5.00',
        },
      ],
      quickHeading: 'Quick Hiring Actions',
      quickNote:
        'Based in Dhaka, Bangladesh · Ready for technical interviews for Security Engineer, Detection & Response, or Security Automation roles.',
      downloadCv: 'Download CV',
      scheduleContact: "Let's Talk",
      jobs: [
        {
          title: 'Enterprise Application Executive',
          company: 'Prothom Alo',
          period: 'Mar 2024 – Present',
          points: [
            'Manage application access and user permissions; investigate and resolve access-related issues.',
            'Validate data and investigate production issues, coordinating with infrastructure and business teams to restore reliable service.',
            'Automate recurring data transformation tasks with Python; build SQL reports and optimize queries for reporting performance.',
            'Provide technical support and troubleshooting for business-critical applications used by internal teams.',
            'Document issues and communicate technical findings to stakeholders.',
          ],
        },
        {
          title: 'Junior Software Engineer',
          company: 'bdnews24.com',
          period: 'Jun 2022 – Feb 2024',
          points: [
            'Investigated production issues across application and database behaviour to support timely resolution.',
            'Integrated REST APIs for editorial workflows and optimized database queries.',
            'Developed and maintained features for a high-traffic digital news platform and its editorial tools.',
          ],
        },
        {
          title: 'IT Intern',
          company: 'Walton Digi-Tech Industries Ltd.',
          period: 'Jan 2022 – Jun 2022',
          points: [
            'Supported deployment and troubleshooting of enterprise software on 400,000+ tablets for the Jonoshumari 2022 project.',
            'Helped resolve installation and performance issues across the deployed device fleet.',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'Security & Engineering Stack',
      heading: 'Skills & Technical Domains',
      groups: [
        {
          index: '01.',
          title: 'Detection & Response',
          items:
            'Security log analysis, SIEM basics (Elastic/Wazuh), alert triage, incident response lifecycle, MITRE ATT&CK, Sigma rules',
        },
        {
          index: '02.',
          title: 'Identity & Access',
          items:
            'User access and permission management, Active Directory basics; learning OAuth 2.0, OIDC/SAML, JWT and token lifecycle',
        },
        {
          index: '03.',
          title: 'Endpoint & Systems',
          items:
            'Windows, Windows Server, Ubuntu/Linux, TCP/IP, DNS, incident troubleshooting, end-user support, large-scale device deployment; learning MDM and EDR rollout',
        },
        {
          index: '04.',
          title: 'Automation & Software',
          items:
            'Python, C#, JavaScript, ASP.NET, REST APIs, Node.js, Git, Docker basics, ETL workflows',
        },
        {
          index: '05.',
          title: 'Data & Validation',
          items:
            'SQL Server, MariaDB, SQL query optimization, SQL reporting, data validation',
        },
        {
          index: '06.',
          title: 'LLM Workflows (Learning)',
          items: 'Prompting, tool use/function calling, evaluation basics',
        },
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
            'Shanto built our Indigo Denim factory management platform from scratch. Role-based access, production tracking, raw material inventory, sales, payroll, and financial reporting are now unified in one fast dashboard our team relies on every day.',
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
      eyebrow: 'Profile',
      heading: 'About Me',
      imageAlt: 'Shah Istiak Shanto portrait',
      cards: [
        { title: 'Target Focus', value: 'Security Engineering' },
        { title: 'Operations & Dev', value: '5+ Years Hands-on' },
        { title: 'Current Role', value: 'Prothom Alo' },
      ],
      summary:
        'IT professional with 5+ years of experience in enterprise application support and software development (C#, Python, SQL, REST APIs). Hands-on with user access management, production incident investigation, and Python automation on Windows and Linux. Currently building security engineering skills through labs in SIEM detection, identity (OAuth/OIDC), endpoint security, and LLM-assisted alert triage — seeking a Security Engineer role to strengthen detection and response.',
      cta: "Let's Talk",
    },
    contact: {
      eyebrow: 'Get in Touch',
      heading: "Let's Talk",
      emailLabel: 'Email',
      messengerLabel: 'Messenger',
      whatsappLabel: 'WhatsApp & Phone',
      sendAction: 'Send a message',
      copyAction: 'Copy',
      copiedAction: 'Copied!',
      namePlaceholder: 'Your Full Name / Company',
      emailPlaceholder: 'Your Work Email',
      messagePlaceholder: 'Security role, team, or interview details...',
      submitIdle: 'Send Message',
      submitBusy: 'Sending...',
      successMsg: 'Message sent successfully!',
      errorMsg: 'Failed to send message. Try again.',
    },
    footer: {
      home: 'Home',
      labs: 'Security Labs',
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Skills',
      testimonials: 'Testimonials',
      about: 'Profile',
      contact: 'Contact',
      rights: 'Shah Istiak Shanto. All rights reserved.',
    },
  },
  bn: {
    pageTitle: 'শাহ ইসতিয়াক শান্ত | সিকিউরিটি ইঞ্জিনিয়ারিং ও ডিটেকশন অপারেশনস',
    brand: 'শাহ ইসতিয়াক শান্ত',
    nav: {
      labs: 'সিকিউরিটি ল্যাব',
      projects: 'প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      stack: 'দক্ষতা',
      about: 'প্রোফাইল',
      cta: 'কথা বলুন',
    },
    hero: {
      role: 'সিকিউরিটি ইঞ্জিনিয়ারিং · ডিটেকশন ও অটোমেশন · আইটি অপারেশনস',
      location: 'ঢাকা, বাংলাদেশ',
      name: 'শাহ ইসতিয়াক শান্ত',
      lead:
        'এন্টারপ্রাইজ অ্যাপ্লিকেশন সাপোর্ট, ইউজার অ্যাক্সেস গভর্ন্যান্স এবং সফটওয়্যার ডেভেলপমেন্টে (Python, C#, SQL, REST APIs) ৫+ বছরের অভিজ্ঞতাসম্পন্ন সিকিউরিটি-ফোকাসড আইটি পেশাদার। Elastic/Wazuh SIEM, Sigma রুলস, OAuth/OIDC টোকেন সিকিউরিটি, EDR/SaaS অ্যালার্ট এনরিচমেন্ট এবং LLM-সহায়তাপ্রাপ্ত ট্রায়াজ নিয়ে বাস্তব ল্যাব তৈরি করছি।',
      ctaProjects: 'সিকিউরিটি ল্যাব দেখুন',
      ctaCv: 'সিভি ডাউনলোড করুন',
      ctaTalk: 'কথা বলুন',
      copyEmail: 'ইমেইল কপি করুন',
      copied: 'কপি হয়েছে!',
      imageAlt: 'শাহ ইসতিয়াক শান্ত, সিকিউরিটি ইঞ্জিনিয়ারিং ও আইটি অপারেশনস',
      metrics: [
        { value: '৪টি সিকিউরিটি ল্যাব', label: 'SIEM, এনরিচমেন্ট, OIDC ও LLM ট্রায়াজ' },
        { value: '৫+ বছর', label: 'অ্যাক্সেস কন্ট্রোল, ইনসিডেন্ট ও অটোমেশন' },
        { value: '২০টি অ্যালার্ট', label: 'LLM ট্রায়াজ ওয়ার্কফ্লোতে মূল্যায়িত' },
        { value: '৪,০০,০০০+', label: 'এন্টারপ্রাইজ ডিভাইস সাপোর্ট' },
      ],
    },
    hrBrief: {
      eyebrow: 'নিয়োগকারীদের জন্য সারসংক্ষেপ',
      heading: 'সিকিউরিটি ইঞ্জিনিয়ারিং ও অপারেশনস উপযোগিতা',
      pillars: [
        {
          index: '০১.',
          title: 'ডিটেকশন ইঞ্জিনিয়ারিং ও অ্যালার্ট ট্রায়াজ',
          description:
            'সিমুলেটেড অ্যাটাক টেলিমেট্রি, MITRE ATT&CK-এ ম্যাপ করা Elastic ও Wazuh Sigma রুলস এবং ২০টি লেবেলকৃত অ্যালার্টে পরীক্ষিত LLM ট্রায়াজ ল্যাব নির্মাণ।',
        },
        {
          index: '০২.',
          title: 'আইডেন্টিটি, অ্যাক্সেস ও এন্ডপয়েন্ট অপারেশনস',
          description:
            'প্রথম আলোতে ইউজার অ্যাক্সেস ও পারমিশন পরিচালনা এবং প্রোডাকশন ইনসিডেন্ট সমাধানের ৫+ বছরের অভিজ্ঞতা, সাথে Active Directory, OAuth 2.0/OIDC টোকেন বিশ্লেষণ ও ৪ লাখ+ ডিভাইস সাপোর্ট।',
        },
        {
          index: '০৩.',
          title: 'সিকিউরিটি অটোমেশন ও লগ পাইপলাইন',
          description:
            'অ্যালার্ট এনরিচমেন্ট ও রেসপন্স অ্যাকশনের জন্য EDR/SaaS API-ভিত্তিক Python স্ক্রিপ্টিং, এবং C#, ASP.NET ও অপটিমাইজড SQL Server / MariaDB ডেটা যাচাইকরণ।',
        },
      ],
      targetLabel: 'লক্ষ্য সিকিউরিটি পদসমূহ',
      targetRoles:
        'Security Engineer · Detection & Response Engineer · Security Automation / IAM Operations',
      availabilityLabel: 'অবস্থান ও প্রাপ্যতা',
      availability: 'ঢাকা, বাংলাদেশ · অনসাইট, হাইব্রিড ও রিমোট কাজের জন্য প্রস্তুত',
      copyEmail: 'ইমেইল কপি করুন',
      copyPhone: 'ফোন নম্বর কপি করুন',
      copied: 'কপি হয়েছে',
    },
    securityLabs: {
      eyebrow: 'হ্যান্ডস-অন সিকিউরিটি ইঞ্জিনিয়ারিং',
      heading: 'সিকিউরিটি ল্যাব ও ডিটেকশন ওয়ার্কফ্লো',
      note:
        'চলমান · SIEM, ইনসিডেন্ট ট্রায়াজ এবং থ্রেট ইন্টেলিজেন্স নিয়ে স্ব-অধ্যয়ন ও ল্যাব অনুশীলন; বর্তমানে কোনো সাইবারসিকিউরিটি সার্টিফিকেশন দাবি করা হয়নি।',
      filterLabel: 'ডোমেইন অনুযায়ী সিকিউরিটি ল্যাব ফিল্টার করুন',
      filters: [
        { key: 'all', label: 'সকল ল্যাব' },
        { key: 'detection', label: 'ডিটেকশন ও SIEM' },
        { key: 'automation', label: 'অটোমেশন ও LLM' },
        { key: 'identity', label: 'আইডেন্টিটি ও অ্যাক্সেস' },
      ],
      objectiveLabel: 'লক্ষ্য',
      workflowLabel: 'ল্যাব ওয়ার্কফ্লো',
      toolsLabel: 'প্রযুক্তি ও পরিসর',
      viewDetails: 'ওয়ার্কফ্লো দেখুন',
      hideDetails: 'বিস্তারিত লুকান',
      readinessLabel: 'অপারেশনাল ভিত্তি',
      readinessText:
        '৫+ বছরের এন্টারপ্রাইজ অ্যাক্সেস ম্যানেজমেন্ট, Windows ও Ubuntu/Linux ট্রাবলশুটিং, TCP/IP ও DNS অপারেশনস এবং প্রোডাকশন ইনসিডেন্ট সমাধানের বাস্তব ভিত্তি।',
      ctaTalk: 'সিকিউরিটি ভূমিকা নিয়ে কথা বলুন',
      labs: [
        {
          id: 'detection',
          domain: 'detection',
          index: '০১.',
          title: 'SIEM ডিটেকশন ও MITRE ATT&CK ল্যাব',
          focus: 'ডিটেকশন ও রেসপন্স · Elastic / Wazuh · Sigma রুলস',
          description:
            'সিমুলেটেড অ্যাটাক টেলিমেট্রি এবং MITRE ATT&CK-এ সরাসরি ম্যাপ করা ডিটেকশন রুলসহ Elastic ও Wazuh ল্যাব।',
          objective:
            'এন্ডপয়েন্ট ও অথেনটিকেশন লগ থেকে সিকিউরিটি লগ অ্যানালাইসিস, রুল লেখা এবং অ্যালার্টের নির্ভুলতা বাড়ানোর অনুশীলন।',
          workflow:
            'অ্যাটাক সিমুলেশন -> এন্ডপয়েন্ট/সিস্টেম লগ সংগ্রহ ও নরমালাইজেশন -> Sigma ও Elastic ডিটেকশন রুল লেখা -> MITRE ATT&CK কাভারেজ যাচাই।',
          tools: 'Elastic · Wazuh · Sigma Rules · MITRE ATT&CK · Security Log Analysis',
        },
        {
          id: 'enrichment',
          domain: 'automation',
          index: '০২.',
          title: 'অটোমেটেড EDR ও SaaS অ্যালার্ট এনরিচমেন্ট',
          focus: 'সিকিউরিটি অটোমেশন · Python · EDR ও SaaS API',
          description:
            'অ্যালার্ট সমৃদ্ধ করতে এবং দ্রুত রেসপন্স অ্যাকশন ট্রিগার করতে EDR ও SaaS REST API থেকে তথ্য সংগ্রহকারী Python স্ক্রিপ্ট।',
          objective:
            'ইনসিডেন্ট ট্রায়াজের সময় ম্যানুয়াল খোঁজাখুঁজি কমাতে স্বয়ংক্রিয়ভাবে হোস্ট, ইউজার ও সেশন তথ্য অ্যালার্টের সাথে যুক্ত করা।',
          workflow:
            'অ্যালার্ট পেলোড গ্রহণ -> Python দিয়ে EDR ও SaaS API কুয়েরি -> ইউজার/ডিভাইস কনটেক্সট সংযুক্তি -> স্ক্রিপ্টেড রেসপন্স অ্যাকশন ট্রিগার।',
          tools: 'Python · REST APIs · EDR APIs · SaaS Telemetry · Incident Lifecycle',
        },
        {
          id: 'identity',
          domain: 'identity',
          index: '০৩.',
          title: 'OIDC আইডেন্টিটি ও টোকেন সিকিউরিটি ল্যাব',
          focus: 'আইডেন্টিটি ও অ্যাক্সেস · OAuth 2.0 / OIDC · JWT লাইফসাইকেল',
          description:
            'টোকেন রিফ্রেশ হ্যান্ডলিংসহ OIDC লগইন অ্যাপ এবং টোকেন চুরি ও রিপ্লে অ্যাটাকের বাস্তব বিশ্লেষণ।',
          objective:
            'আধুনিক আইডেন্টিটি প্রোটোকল, রিফ্রেশ টোকেনের সীমাবদ্ধতা এবং সেশন অপব্যবহারের ঝুঁকি গভীরভাবে বোঝা।',
          workflow:
            'OIDC লগইন ও টোকেন রিফ্রেশ তৈরি -> JWT ক্লেইম ও মেয়াদ পরীক্ষা -> টোকেন চুরি ও রিপ্লে সিমুলেশন -> হার্ডেনিং চেকলিস্ট নথিভুক্তি।',
          tools: 'OAuth 2.0 · OIDC · JWT Lifecycle · Token Replay Analysis · Access Control',
        },
        {
          id: 'llm-triage',
          domain: 'automation',
          index: '০৪.',
          title: 'LLM-সহায়তাপ্রাপ্ত অ্যালার্ট ট্রায়াজ অ্যাসিস্ট্যান্ট',
          focus: 'ট্রায়াজ অটোমেশন · LLM ওয়ার্কফ্লো · ২০টি লেবেলকৃত অ্যালার্ট',
          description:
            'সিকিউরিটি লগ পড়ে অ্যালার্টের কারণ ব্যাখ্যা ও পরবর্তী তদন্তের ধাপ প্রস্তাবকারী অ্যাসিস্ট্যান্ট — ২০টি লেবেলকৃত অ্যালার্টে মূল্যায়িত।',
          objective:
            'অন্ধ নির্ভরতা ছাড়াই Tier-1 অ্যালার্ট ট্রায়াজ দ্রুত করতে স্ট্রাকচার্ড প্রম্পটিং, টুল কলিং এবং ইভ্যালুয়েশন পরীক্ষা করা।',
          workflow:
            'সিকিউরিটি লগ পার্সিং -> সম্ভাব্য কারণ ও প্রভাবিত অ্যাসেট সারসংক্ষেপ -> যাচাইকরণ ধাপ প্রস্তাব -> ২০টি লেবেলকৃত অ্যালার্টে নির্ভুলতা মূল্যায়ন।',
          tools: 'Prompting · Tool Use / Function Calling · Evaluation Basics · Alert Triage',
        },
      ],
    },
    portfolio: {
      eyebrow: 'প্রোডাকশন ইঞ্জিনিয়ারিং প্রমাণ',
      heading: 'শীর্ষ ৩টি প্রোডাকশন সিস্টেম',
      preview: 'প্রিভিউ',
      liveDemo: 'লাইভ ডেমো',
      github: 'GitHub',
      closePreview: 'প্রিভিউ বন্ধ করুন',
      items: [
        {
          id: 1,
          category: 'রোল-ভিত্তিক ERP · অ্যাক্সেস কন্ট্রোল',
          images:
            '/assets/aistudio/screencapture-indigodenim-vercel-app-2026-11-23-13_02_49__1__cff04f6a.png',
          title: 'Indigo Denim — ফ্যাক্টরি ERP',
          summary:
            'অ্যাডমিন, স্টক, প্রোডাকশন, সেলস ও অ্যাকাউন্টস জুড়ে রোল-ভিত্তিক পারমিশন এবং অডিট-উপযোগী PDF ইনভয়েসিংসহ ফ্যাক্টরি সিস্টেম।',
          github: 'https://github.com/istiak2426/indigo.git',
          demo: 'https://indigodenim.vercel.app',
        },
        {
          id: 2,
          category: 'ডিজিটাল পাবলিশিং · নির্ভরযোগ্যতা',
          images:
            '/assets/aistudio/screencapture-doinikobhimot-vercel-app-bn-2026-11-23-13_04_36_8f0c3db3.png',
          title: 'দৈনিক অভিমত — এডিটোরিয়াল প্ল্যাটফর্ম',
          summary:
            'দৈনিক সম্পাদকীয় কার্যক্রম, নির্ভরযোগ্য কন্টেন্ট ডেলিভারি এবং দ্রুত পাঠ অভিজ্ঞতার জন্য নির্মিত দ্বিভাষিক নিউজ প্ল্যাটফর্ম।',
          github: 'https://github.com/istiak2426/doinikovimot',
          demo: 'https://doinikobhimot.vercel.app/',
        },
        {
          id: 3,
          category: 'ই-কমার্স · ফুল-স্ট্যাক',
          images:
            '/assets/aistudio/screencapture-exploreelectronics-vercel-app-2026-11-23-13_03_13_9764ba25.png',
          title: 'Explore Electronics — ই-কমার্স',
          summary:
            'স্ট্রাকচার্ড ক্যাটালগ ভ্যালিডেশন, পণ্যের বিস্তারিত এবং রেসপনসিভ চেকআউটসহ স্মার্ট হোম অ্যাপ্লায়েন্স স্টোরফ্রন্ট।',
          github: 'https://github.com/istiak2426/Explore-Electronics.git',
          demo: 'https://exploreelectronics.vercel.app/',
        },
      ],
    },
    career: {
      eyebrow: 'অপারেশনাল ও ইঞ্জিনিয়ারিং অভিজ্ঞতা',
      heading: 'অভিজ্ঞতা ও শিক্ষা',
      workHeading: 'কর্মঅভিজ্ঞতা',
      educationHeading: 'শিক্ষাগত যোগ্যতা',
      educationList: [
        {
          title: 'বি.এসসি. ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
          school: 'বাংলাদেশ ইউনিভার্সিটি অব বিজনেস অ্যান্ড টেকনোলজি (BUBT)',
          period: '২০১৫ – ২০১৯ | CGPA: ২.৯৫/৪.০০',
        },
        {
          title: 'উচ্চ মাধ্যমিক সার্টিফিকেট (HSC)',
          school: 'বাংলাদেশ নেভি কলেজ, ঢাকা',
          period: '২০১২ – ২০১৪ | GPA: ৪.৮০/৫.০০',
        },
        {
          title: 'মাধ্যমিক স্কুল সার্টিফিকেট (SSC)',
          school: 'মনিপুর স্কুল অ্যান্ড কলেজ, ঢাকা',
          period: '২০০২ – ২০১১ | GPA: ৪.৬৯/৫.০০',
        },
      ],
      quickHeading: 'দ্রুত নিয়োগ অ্যাকশন',
      quickNote:
        'ঢাকা, বাংলাদেশে অবস্থানরত · Security Engineer, Detection & Response অথবা Security Automation পদের ইন্টারভিউয়ের জন্য প্রস্তুত।',
      downloadCv: 'সিভি ডাউনলোড করুন',
      scheduleContact: 'কথা বলুন',
      jobs: [
        {
          title: 'এন্টারপ্রাইজ অ্যাপ্লিকেশন এক্সিকিউটিভ',
          company: 'প্রথম আলো',
          period: 'মার্চ ২০২৪ – বর্তমান',
          points: [
            'অ্যাপ্লিকেশন অ্যাক্সেস ও ইউজার পারমিশন পরিচালনা এবং অ্যাক্সেস-সংক্রান্ত সমস্যা তদন্ত ও সমাধান।',
            'ডেটা যাচাই, প্রোডাকশন সমস্যা তদন্ত এবং ইনফ্রাস্ট্রাকচার ও বিজনেস টিমের সাথে সমন্বয়ে নির্ভরযোগ্য সেবা পুনরুদ্ধার।',
            'Python দিয়ে নিয়মিত ডেটা ট্রান্সফরমেশন অটোমেশন, SQL রিপোর্ট তৈরি এবং রিপোর্টিং পারফরম্যান্স অপটিমাইজেশন।',
            'অভ্যন্তরীণ টিমের ব্যবহৃত ব্যবসায়িক-গুরুত্বপূর্ণ অ্যাপ্লিকেশনগুলোর টেকনিক্যাল সাপোর্ট ও সমস্যা সমাধান।',
            'সমস্যা নথিভুক্তকরণ এবং সংশ্লিষ্ট স্টেকহোল্ডারদের কাছে টেকনিক্যাল ফলাফল উপস্থাপন।',
          ],
        },
        {
          title: 'জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
          company: 'bdnews24.com',
          period: 'জুন ২০২২ – ফেব্রুয়ারি ২০২৪',
          points: [
            'সময়মতো সমাধানের জন্য অ্যাপ্লিকেশন ও ডেটাবেস আচরণ বিশ্লেষণ করে প্রোডাকশন সমস্যা তদন্ত।',
            'এডিটোরিয়াল ওয়ার্কফ্লোর জন্য REST API ইন্টিগ্রেশন এবং ডেটাবেস কুয়েরি অপটিমাইজেশন।',
            'হাই-ট্রাফিক ডিজিটাল নিউজ প্ল্যাটফর্ম এবং এডিটোরিয়াল টুলসের নতুন ফিচার উন্নয়ন ও রক্ষণাবেক্ষণ।',
          ],
        },
        {
          title: 'আইটি ইন্টার্ন',
          company: 'ওয়ালটন ডিজি-টেক ইন্ডাস্ট্রিজ লিমিটেড',
          period: 'জানুয়ারি ২০২২ – জুন ২০২২',
          points: [
            'জনশুমারি ২০২২ প্রকল্পে ৪,০০,০০০+ ট্যাবলেটে এন্টারপ্রাইজ সফটওয়্যার ডিপ্লয়মেন্ট ও ট্রাবলশুটিং সাপোর্ট।',
            'ডিপ্লয়েড ডিভাইস ফ্লিটে ইনস্টলেশন ও পারফরম্যান্স সমস্যার সমাধানে সহায়তা।',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'সিকিউরিটি ও ইঞ্জিনিয়ারিং দক্ষতা',
      heading: 'দক্ষতা ও ডোমেইন',
      groups: [
        {
          index: '০১.',
          title: 'ডিটেকশন ও রেসপন্স',
          items:
            'সিকিউরিটি লগ অ্যানালাইসিস, SIEM বেসিকস (Elastic/Wazuh), অ্যালার্ট ট্রায়াজ, ইনসিডেন্ট রেসপন্স লাইফসাইকেল, MITRE ATT&CK, Sigma রুলস',
        },
        {
          index: '০২.',
          title: 'আইডেন্টিটি ও অ্যাক্সেস',
          items:
            'ইউজার অ্যাক্সেস ও পারমিশন ম্যানেজমেন্ট, Active Directory বেসিকস; OAuth 2.0, OIDC/SAML, JWT ও টোকেন লাইফসাইকেল শেখা হচ্ছে',
        },
        {
          index: '০৩.',
          title: 'এন্ডপয়েন্ট ও সিস্টেমস',
          items:
            'Windows, Windows Server, Ubuntu/Linux, TCP/IP, DNS, ইনসিডেন্ট ট্রাবলশুটিং, এন্ড-ইউজার সাপোর্ট, বৃহৎ পরিসরে ডিভাইস ডিপ্লয়মেন্ট; MDM ও EDR রোলআউট শেখা হচ্ছে',
        },
        {
          index: '০৪.',
          title: 'অটোমেশন ও সফটওয়্যার',
          items:
            'Python, C#, JavaScript, ASP.NET, REST APIs, Node.js, Git, Docker বেসিকস, ETL ওয়ার্কফ্লো',
        },
        {
          index: '০৫.',
          title: 'ডেটা ও ভ্যালিডেশন',
          items:
            'SQL Server, MariaDB, SQL কুয়েরি অপটিমাইজেশন, SQL রিপোর্টিং, ডেটা ভ্যালিডেশন',
        },
        {
          index: '০৬.',
          title: 'LLM ওয়ার্কফ্লো (শেখা হচ্ছে)',
          items: 'প্রম্পটিং, টুল ইউজ / ফাংশন কলিং, ইভ্যালুয়েশন বেসিকস',
        },
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
            'শান্ত শুরু থেকে আমাদের Indigo Denim ফ্যাক্টরি ম্যানেজমেন্ট প্ল্যাটফর্মটি তৈরি করেছেন। রোল-ভিত্তিক অ্যাক্সেস, প্রোডাকশন ট্র্যাকিং, কাঁচামাল ইনভেন্টরি, সেলস, বেতন এবং আর্থিক রিপোর্ট এখন একটি দ্রুত ড্যাশবোর্ডে একত্রিত হয়েছে যা আমাদের টিম প্রতিদিন ব্যবহার করে।',
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
      eyebrow: 'প্রোফাইল',
      heading: 'আমার সম্পর্কে',
      imageAlt: 'শাহ ইসতিয়াক শান্তর প্রতিকৃতি',
      cards: [
        { title: 'লক্ষ্য ক্ষেত্র', value: 'সিকিউরিটি ইঞ্জিনিয়ারিং' },
        { title: 'অপারেশনস ও ডেভ', value: '৫+ বছরের বাস্তব কাজ' },
        { title: 'বর্তমান কর্মস্থল', value: 'প্রথম আলো' },
      ],
      summary:
        'এন্টারপ্রাইজ অ্যাপ্লিকেশন সাপোর্ট এবং সফটওয়্যার ডেভেলপমেন্টে (C#, Python, SQL, REST APIs) ৫+ বছরের অভিজ্ঞতাসম্পন্ন আইটি পেশাদার। Windows ও Linux-এ ইউজার অ্যাক্সেস ম্যানেজমেন্ট, প্রোডাকশন ইনসিডেন্ট তদন্ত এবং Python অটোমেশনে বাস্তব অভিজ্ঞতা রয়েছে। বর্তমানে SIEM ডিটেকশন, আইডেন্টিটি (OAuth/OIDC), এন্ডপয়েন্ট সিকিউরিটি এবং LLM-সহায়তাপ্রাপ্ত অ্যালার্ট ট্রায়াজ ল্যাবের মাধ্যমে সিকিউরিটি ইঞ্জিনিয়ারিং দক্ষতা গড়ে তুলছি।',
      cta: 'কথা বলুন',
    },
    contact: {
      eyebrow: 'যোগাযোগ করুন',
      heading: 'কথা বলুন',
      emailLabel: 'ইমেইল',
      messengerLabel: 'মেসেঞ্জার',
      whatsappLabel: 'হোয়াটসঅ্যাপ ও ফোন',
      sendAction: 'বার্তা পাঠান',
      copyAction: 'কপি',
      copiedAction: 'কপি হয়েছে!',
      namePlaceholder: 'আপনার নাম / প্রতিষ্ঠানের নাম',
      emailPlaceholder: 'আপনার অফিসিয়াল ইমেইল',
      messagePlaceholder: 'সিকিউরিটি পদ, টিম বা ইন্টারভিউয়ের বিস্তারিত লিখুন...',
      submitIdle: 'বার্তা পাঠান',
      submitBusy: 'পাঠানো হচ্ছে...',
      successMsg: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
      errorMsg: 'বার্তা পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    footer: {
      home: 'হোম',
      labs: 'সিকিউরিটি ল্যাব',
      projects: 'প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      stack: 'দক্ষতা',
      testimonials: 'মতামত',
      about: 'প্রোফাইল',
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
