import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    welcome: {
      title: string;
      description: string;
    };
    whyChoose: {
      title: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    brands: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    hero: {
      title: string;
    };
    overview: {
      title: string;
      paragraphs: string[];
    };
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      points: string[];
    };
    purpose: {
      title: string;
      content: string;
    };
  };
  services: {
    hero: {
      title: string;
      subtitle: string;
    };
    categories: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    brands: {
      title: string;
      mainBrand: string;
      otherBrands: string;
      brandList: string[];
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
    };
    contact: {
      title: string;
    };
    copyright: string;
  };
  company: {
    name: string;
    tagline: string;
    fullName: string;
  };
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: Content;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const englishContent: Content = {
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Welcome to Galaxy Tires Trading FZE',
      subtitle:
        'Driving excellence on every road. Official partner of Forceland Tyres, delivering world-class tyre technology to UAE and international markets.',
      cta1: 'Explore Products',
      cta2: 'Contact Us',
    },
    welcome: {
      title: 'Your Global Tyre Partner',
      description:
        'At Galaxy Tires Trading FZE, we drive excellence on every road. As an official partner of Forceland Tyres and Factory, we proudly bring world-class tyre technology to the UAE and international markets. Along with Forceland, we supply a wide range of premium global tyre brands, providing high-performance, durable, and cost-effective tyre solutions for passenger cars, SUVs, and light commercial vehicles.',
    },
    whyChoose: {
      title: 'Why Choose Us',
      features: [
        {
          title: 'Official Partner of Forceland Tyres',
          description:
            'Exclusive partnership ensuring authentic products and direct factory pricing',
        },
        {
          title: 'Distributor of Leading Global Tyre Brands',
          description:
            "Comprehensive selection from the world's most trusted manufacturers",
        },
        {
          title: 'Competitive Prices with Consistent Quality',
          description: 'Best value without compromising on safety and performance',
        },
        {
          title: 'Fast Delivery Across the UAE and Export Markets',
          description: 'Strategic location in UAE Free Zone for rapid distribution',
        },
      ],
    },
    brands: {
      title: 'Premium Global Brands',
      subtitle: "We distribute the world's most trusted tyre brands",
    },
  },
  about: {
    hero: {
      title: 'About Galaxy Tires Trading FZE',
    },
    overview: {
      title: 'Who We Are',
      paragraphs: [
        'Galaxy Tires Trading FZE is a UAE-based tyre trading company specializing in the import, export, and distribution of high-quality tyres.',
        'Through our strong partnership with Forceland Tyres and Factory, we ensure our clients receive tyres that combine advanced design, international safety standards, and long-lasting performance.',
        'Located in the UAE Free Zone, Galaxy Tires Trading FZE is strategically positioned to serve both local and international markets efficiently.',
        'Our commitment to quality, trust, and customer satisfaction has made us one of the most reliable tyre suppliers in the region.',
        'At Galaxy Tires Trading FZE, we believe every journey deserves a dependable grip — and we make sure our tyres deliver just that.',
      ],
    },
    vision: {
      title: 'Our Vision',
      content:
        'To become the most trusted and preferred tyre trading company in the Middle East, known for reliability, innovation, and partnerships with globally recognized brands.',
    },
    mission: {
      title: 'Our Mission',
      points: [
        'To deliver safe, reliable, and high-performance tyres at competitive prices.',
        'To build long-term partnerships with manufacturers and customers worldwide.',
        'To maintain exceptional after-sales service and client satisfaction.',
        'To grow continuously through innovation, quality, and integrity.',
      ],
    },
    purpose: {
      title: 'Our Purpose',
      content:
        'Our purpose is to connect drivers, retailers, and businesses with the most reliable tyre solutions in the world. We aim to make mobility safer, smoother, and more sustainable through continuous improvement and trusted global collaborations.',
    },
  },
  services: {
    hero: {
      title: 'Our Products & Services',
      subtitle: 'Premium tyres for every vehicle type',
    },
    categories: {
      title: 'Tyre Categories',
      items: [
        {
          title: 'Passenger Car Tyres',
          description:
            'High-performance tyres designed for comfort, safety, and fuel efficiency on city roads and highways.',
        },
        {
          title: 'SUV & 4x4 Tyres',
          description:
            'Rugged and reliable tyres built for both on-road comfort and off-road adventures.',
        },
        {
          title: 'Light Commercial Vehicle Tyres',
          description:
            'Durable tyres engineered for commercial use with enhanced load capacity and longevity.',
        },
      ],
    },
    brands: {
      title: 'Our Brands',
      mainBrand: 'Main Brand',
      otherBrands: 'Other Premium Brands',
      brandList: [
        'Forceland',
        'Dunlop',
        'Yokohama',
        'Michelin',
        'Bridgestone',
        'Continental',
        'Hankook',
        'Pirelli',
      ],
    },
  },
  contact: {
    hero: {
      title: 'Get In Touch',
      subtitle: "We're here to help with all your tyre needs",
    },
    form: {
      title: 'Send Us a Message',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Send Message',
    },
    info: {
      title: 'Contact Information',
      address:
        'Galaxy Tires Trading FZE Jebel Ali - Jafza one Freezone - UAE Building B - floor 13 office 1',
      phone: '+971508679467',
      email: 'anasbaghdad12@gmail.com',
    },
  },
  footer: {
    about: {
      title: 'About Galaxy Tires Trading FZE',
      description:
        'Official Partner of Forceland Tyres and distributor of premium global tyre brands serving UAE and international markets.',
    },
    quickLinks: {
      title: 'Quick Links',
    },
    contact: {
      title: 'Contact Us',
    },
    copyright: '© 2025 Galaxy Tires Trading FZE. All rights reserved.',
  },
  company: {
    name: 'Galaxy Tires',
    tagline: 'Driving Quality. Delivering Trust.',
    fullName: 'Galaxy Tires Trading FZE',
  },
};

const arabicContent: Content = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'اتصل بنا',
  },
  home: {
    hero: {
      title: 'مرحباً بكم في جالاكسي لتجارة الإطارات ش.ذ.م.م',
      subtitle:
        'نقود التميز على كل طريق. الشريك الرسمي لإطارات فورس لاند، نقدم تكنولوجيا الإطارات العالمية إلى الإمارات والأسواق الدولية.',
      cta1: 'استكشف المنتجات',
      cta2: 'اتصل بنا',
    },
    welcome: {
      title: 'شريكك العالمي للإطارات',
      description:
        'في جالاكسي لتجارة الإطارات ش.ذ.م.م، نقود التميز على كل طريق. كشريك رسمي لإطارات ومصنع فورس لاند، نفخر بتقديم تكنولوجيا الإطارات العالمية إلى الإمارات والأسواق الدولية. إلى جانب فورس لاند، نوفر مجموعة واسعة من العلامات التجارية العالمية المتميزة للإطارات، نقدم حلول إطارات عالية الأداء ومتينة وفعالة من حيث التكلفة لسيارات الركاب والسيارات الرياضية متعددة الاستخدامات والمركبات التجارية الخفيفة.',
    },
    whyChoose: {
      title: 'لماذا تختارنا',
      features: [
        {
          title: 'الشريك الرسمي لإطارات فورس لاند',
          description:
            'شراكة حصرية تضمن المنتجات الأصلية والأسعار المباشرة من المصنع',
        },
        {
          title: 'موزع للعلامات التجارية العالمية الرائدة',
          description:
            'تشكيلة شاملة من أكثر الشركات المصنعة الموثوقة في العالم',
        },
        {
          title: 'أسعار تنافسية مع جودة ثابتة',
          description: 'أفضل قيمة دون المساس بالسلامة والأداء',
        },
        {
          title: 'توصيل سريع في جميع أنحاء الإمارات وأسواق التصدير',
          description: 'موقع استراتيجي في المنطقة الحرة بدبي للتوزيع السريع',
        },
      ],
    },
    brands: {
      title: 'علامات تجارية عالمية متميزة',
      subtitle: 'نوزع أكثر العلامات التجارية للإطارات موثوقية في العالم',
    },
  },
  about: {
    hero: {
      title: 'عن جالاكسي لتجارة الإطارات ش.ذ.م.م',
    },
    overview: {
      title: 'من نحن',
      paragraphs: [
        'جالاكسي لتجارة الإطارات ش.ذ.م.م هي شركة تجارة إطارات مقرها الإمارات متخصصة في استيراد وتصدير وتوزيع الإطارات عالية الجودة.',
        'من خلال شراكتنا القوية مع إطارات ومصنع فورس لاند، نضمن حصول عملائنا على إطارات تجمع بين التصميم المتقدم ومعايير السلامة الدولية والأداء طويل الأمد.',
        'تقع جالاكسي لتجارة الإطارات ش.ذ.م.م في المنطقة الحرة بالإمارات، وهي في موقع استراتيجي لخدمة الأسواق المحلية والدولية بكفاءة.',
        'لقد جعل التزامنا بالجودة والثقة ورضا العملاء منا واحدة من أكثر موردي الإطارات موثوقية في المنطقة.',
        'في جالاكسي لتجارة الإطارات ش.ذ.م.م، نؤمن بأن كل رحلة تستحق قبضة يمكن الاعتماد عليها - ونتأكد من أن إطاراتنا توفر ذلك تماماً.',
      ],
    },
    vision: {
      title: 'رؤيتنا',
      content:
        'أن نصبح شركة تجارة الإطارات الأكثر ثقة وتفضيلاً في الشرق الأوسط، المعروفة بالموثوقية والابتكار والشراكات مع العلامات التجارية المعترف بها عالمياً.',
    },
    mission: {
      title: 'مهمتنا',
      points: [
        'تقديم إطارات آمنة وموثوقة وعالية الأداء بأسعار تنافسية.',
        'بناء شراكات طويلة الأمد مع المصنعين والعملاء في جميع أنحاء العالم.',
        'الحفاظ على خدمة استثنائية لما بعد البيع ورضا العملاء.',
        'النمو المستمر من خلال الابتكار والجودة والنزاهة.',
      ],
    },
    purpose: {
      title: 'هدفنا',
      content:
        'هدفنا هو ربط السائقين وتجار التجزئة والشركات بحلول الإطارات الأكثر موثوقية في العالم. نهدف إلى جعل التنقل أكثر أماناً وسلاسة واستدامة من خلال التحسين المستمر والتعاون العالمي الموثوق.',
    },
  },
  services: {
    hero: {
      title: 'منتجاتنا وخدماتنا',
      subtitle: 'إطارات متميزة لكل نوع من المركبات',
    },
    categories: {
      title: 'فئات الإطارات',
      items: [
        {
          title: 'إطارات سيارات الركاب',
          description:
            'إطارات عالية الأداء مصممة للراحة والسلامة وكفاءة استهلاك الوقود على طرق المدينة والطرق السريعة.',
        },
        {
          title: 'إطارات سيارات الدفع الرباعي',
          description:
            'إطارات قوية وموثوقة مصممة للراحة على الطرق المعبدة ومغامرات الطرق الوعرة.',
        },
        {
          title: 'إطارات المركبات التجارية الخفيفة',
          description:
            'إطارات متينة مصممة للاستخدام التجاري مع قدرة تحميل محسنة وعمر أطول.',
        },
      ],
    },
    brands: {
      title: 'علاماتنا التجارية',
      mainBrand: 'العلامة التجارية الرئيسية',
      otherBrands: 'علامات تجارية أخرى متميزة',
      brandList: [
        'فورس لاند',
        'دنلوب',
        'يوكوهاما',
        'ميشلان',
        'بريدجستون',
        'كونتيننتال',
        'هانكوك',
        'بيريللي',
      ],
    },
  },
  contact: {
    hero: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا للمساعدة في جميع احتياجاتك من الإطارات',
    },
    form: {
      title: 'أرسل لنا رسالة',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك',
      submit: 'إرسال الرسالة',
    },
    info: {
      title: 'معلومات الاتصال',
      address:
        'شركة جالاكسي لتجارة الإطارات ش.ذ.م.م، منطقة حرة، جبل علي - جافزا ون، الإمارات العربية المتحدة، المبنى ب، الطابق 13، المكتب 1',
      phone: '+971508679467',
      email: 'anasbaghdad12@gmail.com',
    },
  },
  footer: {
    about: {
      title: 'عن جالاكسي لتجارة الإطارات ش.ذ.م.م',
      description:
        'الشريك الرسمي لإطارات فورس لاند وموزع العلامات التجارية العالمية المتميزة للإطارات التي تخدم الإمارات والأسواق الدولية.',
    },
    quickLinks: {
      title: 'روابط سريعة',
    },
    contact: {
      title: 'اتصل بنا',
    },
    copyright: '© 2025 جالاكسي لتجارة الإطارات ش.ذ.م.م. جميع الحقوق محفوظة.',
  },
  company: {
    name: 'جالاكسي لتجارة الإطارات',
    tagline: 'نقود الجودة. نقدم الثقة.',
    fullName: 'جالاكسي لتجارة الإطارات ش.ذ.م.م',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const content = language === 'en' ? englishContent : arabicContent;
  const isRTL = language === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.lang = language;
    html.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      body.classList.add('font-arabic');
      body.classList.remove('font-sans');
    } else {
      body.classList.add('font-sans');
      body.classList.remove('font-arabic');
    }
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
