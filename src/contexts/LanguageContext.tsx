
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for our context
type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a translations object with both languages
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.hello': 'Hello, I\'m',
    'hero.title': 'Fullstack Web Developer',
    'hero.description': 'I build modern, responsive, and high-performance web applications with cutting-edge technologies.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.scrollDown': 'Scroll Down',
    
    // About
    'about.title': 'About Me',
    'about.intro': 'I\'m Hesham Elhag, a passionate',
    'about.fullstack': 'Fullstack Web Developer',
    'about.description1': 'With expertise in modern JavaScript frameworks, responsive design, and server-side programming, I create seamless web experiences that combine functionality with aesthetics.',
    'about.description2': 'My approach to development focuses on writing clean, maintainable code while always keeping the end user\'s experience at the forefront of my work.',
    
    // Services
    'service.frontend': 'Frontend Development',
    'service.frontend.desc': 'Creating responsive, pixel-perfect UIs with modern frameworks like React, Vue, and Angular.',
    'service.backend': 'Backend Development',
    'service.backend.desc': 'Building robust server-side applications with Node.js, Express, and database technologies.',
    'service.fullstack': 'Full Stack Solutions',
    'service.fullstack.desc': 'End-to-end web application development from UI design to server implementation.',
    'service.api': 'API Development',
    'service.api.desc': 'Designing and implementing RESTful APIs and GraphQL services for seamless data flow.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.description': 'Here are some of the projects I\'ve worked on. Each project represents different skills and technologies.',
    'projects.all': 'All',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Full Stack',
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.info': 'Contact Information',
    'contact.description': 'Feel free to reach out if you have any questions or if you\'d like to work together. I\'m always open to discussing new projects, creative ideas or opportunities to be part of your vision.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.success.desc': 'I\'ll get back to you as soon as possible.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Handcrafted with ❤️ using React, TypeScript, and Tailwind CSS',
    
    // Language
    'language': 'العربية'
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    
    // Hero
    'hero.hello': 'مرحبا، أنا',
    'hero.title': 'مطور ويب متكامل',
    'hero.description': 'أقوم ببناء تطبيقات ويب حديثة، متجاوبة، وعالية الأداء باستخدام أحدث التقنيات.',
    'hero.viewWork': 'تصفح أعمالي',
    'hero.getInTouch': 'تواصل معي',
    'hero.scrollDown': 'اسحب للأسفل',
    
    // About
    'about.title': 'نبذة عني',
    'about.intro': 'أنا هشام الحاج،',
    'about.fullstack': 'مطور ويب متكامل',
    'about.description1': 'بخبرتي في أطر عمل جافاسكريبت الحديثة، التصميم المتجاوب، وبرمجة جانب الخادم، أقدم تجارب ويب سلسة تجمع بين الوظائف والجماليات.',
    'about.description2': 'ينصب نهجي في التطوير على كتابة كود نظيف وقابل للصيانة مع الحفاظ دائمًا على تجربة المستخدم النهائي في مقدمة عملي.',
    
    // Services
    'service.frontend': 'تطوير الواجهة الأمامية',
    'service.frontend.desc': 'إنشاء واجهات مستخدم متجاوبة ودقيقة باستخدام أطر العمل الحديثة مثل React وVue وAngular.',
    'service.backend': 'تطوير الخلفية',
    'service.backend.desc': 'بناء تطبيقات قوية على جانب الخادم باستخدام Node.js وExpress وتقنيات قواعد البيانات.',
    'service.fullstack': 'حلول متكاملة',
    'service.fullstack.desc': 'تطوير تطبيقات الويب من البداية إلى النهاية من تصميم واجهة المستخدم إلى تنفيذ الخادم.',
    'service.api': 'تطوير واجهات برمجة التطبيقات',
    'service.api.desc': 'تصميم وتنفيذ RESTful APIs وخدمات GraphQL لتدفق البيانات بسلاسة.',
    
    // Projects
    'projects.title': 'مشاريعي',
    'projects.description': 'فيما يلي بعض المشاريع التي عملت عليها. يمثل كل مشروع مهارات وتقنيات مختلفة.',
    'projects.all': 'الكل',
    'projects.frontend': 'الواجهة الأمامية',
    'projects.backend': 'الخلفية',
    'projects.fullstack': 'تطوير متكامل',
    'projects.code': 'الكود',
    'projects.demo': 'عرض حي',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.info': 'معلومات الاتصال',
    'contact.description': 'لا تتردد في التواصل إذا كان لديك أي أسئلة أو إذا كنت ترغب في العمل معًا. أنا دائمًا منفتح لمناقشة مشاريع جديدة، أفكار إبداعية أو فرص لأكون جزءًا من رؤيتك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.form.title': 'أرسل لي رسالة',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'بريدك الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.success': 'تم إرسال الرسالة بنجاح!',
    'contact.form.success.desc': 'سأعود إليك في أقرب وقت ممكن.',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.made': 'صنع بـ ❤️ باستخدام React وTypeScript وTailwind CSS',
    
    // Language
    'language': 'English'
  }
};

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
