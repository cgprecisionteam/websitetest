import React, { useState, useEffect, useRef } from 'react';

/**
 * BRAND CONSTANTS & ASSET PATHS
 */
const BRAND = {
  NAME: 'ACCUGEN™',
  SUB_NAME: 'Digital Dental Lab',
  ASSETS: {
    LOGO_LIGHT: 'https://res.cloudinary.com/dcrjueafq/image/upload/v1769877979/Main_Logo_White_kbogil.webp', 
    LOGO_DARK: 'https://res.cloudinary.com/dcrjueafq/image/upload/v1768932664/Main_Logo_Black_djkmqp.webp', 
    HERO_VIDEO: 'https://res.cloudinary.com/dcrjueafq/video/upload/v1769878044/Untitled_design_g1zxnu.mp4',
    HERO_VIDEO_POSTER: ''
  },
  NAV: {
    ABOUT: 'About',
    SERVICES: 'Services',
    TECHNOLOGY: 'Technology',
    CONTACT: 'Contact',
    CTA: 'Portal Login'
  },
  HERO: {
    HEADING_MAIN: 'Your All-in-One Digital Dental Lab',
    DESCRIPTION: 'Advanced CAD/CAM Dental Laboratory providing high-precision restorations for modern clinical success.',
    PRIMARY_CTA: 'Submit Case',
    SECONDARY_CTA: 'View Products'
  },
  WHO_WE_ARE: {
    HEADING: 'Why ACCUGEN?',
    DESCRIPTION: 'ACCUGEN™ is a digital dental laboratory delivering high-precision CAD/CAM restorations to clinics across India. Operating from a state-of-the-art facility in Hyderabad, we specialize in German-engineered 5-axis milling for crowns, implant prosthetics, and full-arch solutions—engineered for predictable fit, strength, and long-term clinical reliability.',
    CTA: 'Our technology',
    IMAGE_URL: 'https://res.cloudinary.com/dcrjueafq/image/upload/v1768933245/About_us_zjtbjh.webp'
  },
  WHY_ACCUGEN: {
    HEADING: 'Why ACCUGEN™',
    INTRO: 'We combine advanced digital workflows with master craftsmanship to deliver results that exceed clinical expectations. Our commitment to excellence defines every case we handle.',
    CARDS: [
      {
        title: 'Quality & Precision Milling',
        desc: 'ISO 13485:2016 certified lab with 2-micron precision milling.'
      },
      {
        title: 'Communication & Collaboration',
        desc: 'Clear, responsive case coordination with dentists via WhatsApp.'
      },
      {
        title: 'Quick Turnaround Time',
        desc: '24–48 hour turnaround with reliable, on-time case delivery.'
      },
      {
        title: 'Competitive Pricing',
        desc: 'Transparent, reasonable pricing without compromising quality.'
      }
    ]
  },
  ACCUGEN_FLOW: {
    HEADING: 'Accugen Flow',
    STEPS: [
      { id: '01', title: '[Title Placeholder]', desc: '[Short description placeholder]' },
      { id: '02', title: '[Title Placeholder]', desc: '[Short description placeholder]' },
      { id: '03', title: '[Title Placeholder]', desc: '[Short description placeholder]' },
      { id: '04', title: '[Title Placeholder]', desc: '[Short description placeholder]' },
      { id: '05', title: '[Title Placeholder]', desc: '[Short description placeholder]' }
    ]
  },
  SOLUTIONS: {
    HEADING: 'Solutions',
    PRODUCTS: [
      { id: 'crown-bridge', name: 'Crown & Bridge' },
      { id: 'implant', name: 'Implant Solutions' },
      { id: 'full-dentures', name: 'Full Dentures' },
      { id: 'partial-dentures', name: 'Partial Dentures' },
      { id: 'splints-guards', name: 'Splints & Guards' },
      { id: 'aligners', name: 'Clear Aligners' },
      { id: 'sleep-apnea', name: 'Sleep Apnea Appliances' }
    ]
  },
  TECHNOLOGY: {
    LABEL: 'Precision engineering',
    STATEMENT: 'Our advanced milling process achieves an exceptional margin of error of ≤ 2 µm',
    HIGHLIGHT: '≤ 2 µm',
    CARDS: [
      { 
        title: 'Exceptional Accuracy', 
        desc: 'CAD/CAM precision ensures a perfect marginal fit, drastically reducing clinical chair time and adjustments.' 
      },
      { 
        title: 'Superior Strength', 
        desc: 'Milled from premium-grade monolithic zirconia for unmatched durability and lifelike aesthetics.' 
      },
      { 
        title: 'Advanced 5-Axis Milling', 
        desc: 'Utilizing German-engineered equipment to handle complex geometries and full-arch cases with ease.' 
      },
      { 
        title: 'Digital Reliability', 
        desc: 'A fully integrated digital workflow eliminates traditional impression errors for predictable outcomes.' 
      }
    ]
  },
  SERVICES: {
    LABEL: 'Portfolio',
    HEADING: 'Our specializations',
    ITEMS: [
      { title: 'Full Contour Zirconia', desc: 'Highly translucent and durable monolithic restorations for posterior and anterior applications.' },
      { title: 'Custom Abutments', desc: 'Patient-specific implant solutions designed for optimal emergence profile and tissue health.' },
      { title: 'Digital Smile Design', desc: 'Comprehensive aesthetic planning to visualize outcomes before clinical intervention.' },
      { title: 'E-Max Veneers', desc: 'Lithium disilicate restorations offering superior aesthetics and biocompatibility.' },
      { title: 'Surgical Guides', desc: 'High-precision 3D printed guides for predictable and safe implant placement.' },
      { title: 'Temporary Crowns', desc: 'CAD/CAM milled PMMA temporaries for immediate load and soft tissue management.' }
    ]
  },
  CONTACT: {
    LABEL: 'Get in touch',
    HEADING: 'Ready to transform your practice?',
    LABEL_ADDRESS: 'Headquarters',
    ADDRESS_1: 'Suite 402, MedTech Plaza',
    ADDRESS_2: 'Banjara Hills, Hyderabad',
    LABEL_PHONE: 'Call Us',
    PHONE: '+91 40 1234 5678',
    LABEL_EMAIL: 'Email Support',
    EMAIL: 'info@accugen.com',
    FORM_HEADING: 'General inquiry',
    INPUT_NAME: 'Doctor Name',
    INPUT_EMAIL: 'Clinic Email',
    INPUT_MESSAGE: 'Case Details or Inquiry',
    SUBMIT: 'Send Message'
  },
  FOOTER: {
    COPYRIGHT: 'ACCUGEN™ – Digital Dental Lab',
    RIGHTS: 'All Rights Reserved',
    LINK_1: 'Privacy Policy',
    LINK_2: 'Terms of Service',
    LINK_3: 'Lab Guidelines'
  }
};

/**
 * TYPOGRAPHY & SPACING SYSTEM CONSTANTS
 */
const UI = {
  SECTION_PY: "py-12 md:py-[72px]",
  LABEL: "text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-3 md:mb-4 block text-acc-blue-accent",
  HEADING_H2: "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] mb-4 md:mb-6",
  PARA_LG: "text-lg md:text-xl leading-relaxed opacity-70 mb-8 md:mb-10",
  GRID_GAP: "gap-8 md:gap-12"
};

/**
 * COMPONENTS
 */

const Navbar: React.FC<{ onNavigate: (page: string) => void, transparent?: boolean }> = ({ onNavigate, transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = transparent && !isScrolled ? 'bg-transparent py-8' : 'bg-acc-white py-3 border-b border-acc-black border-opacity-5';
  const textClass = transparent && !isScrolled ? 'text-acc-white' : 'text-acc-black';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-standard ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center">
            <img 
              src={BRAND.ASSETS.LOGO_LIGHT} 
              alt={`${BRAND.NAME} Light Logo`} 
              className={`h-10 md:h-12 w-auto object-contain ${transparent && !isScrolled ? 'block' : 'hidden'}`}
            />
            <img 
              src={BRAND.ASSETS.LOGO_DARK} 
              alt={`${BRAND.NAME} Dark Logo`} 
              className={`h-10 md:h-12 w-auto object-contain ${transparent && !isScrolled ? 'hidden' : 'block'}`}
            />
          </button>
        </div>
        
        <div className={`hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest uppercase ${textClass}`}>
          <button onClick={() => onNavigate('home')} className="hover:text-acc-blue-accent transition-standard">{BRAND.NAV.ABOUT}</button>
          <button onClick={() => onNavigate('home')} className="hover:text-acc-blue-accent transition-standard">{BRAND.NAV.SERVICES}</button>
          <button onClick={() => onNavigate('home')} className="hover:text-acc-blue-accent transition-standard">{BRAND.NAV.TECHNOLOGY}</button>
          <button onClick={() => onNavigate('home')} className="hover:text-acc-blue-accent transition-standard">{BRAND.NAV.CONTACT}</button>
          <a href="#portal" className="bg-acc-blue-accent text-acc-white px-8 py-3 rounded-acc hover:opacity-90 transition-standard">
            {BRAND.NAV.CTA}
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center bg-acc-black overflow-hidden pt-32 pb-24 md:pt-56 md:pb-48">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-acc-white leading-[1.1] mb-8 tracking-tight">
              {BRAND.HERO.HEADING_MAIN}
            </h1>
            <p className="text-xl md:text-2xl text-acc-white opacity-80 mb-12 leading-relaxed font-medium max-w-2xl">
              {BRAND.HERO.DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-acc-blue-accent text-acc-white px-10 py-5 rounded-acc font-black hover:opacity-90 transition-standard uppercase tracking-[0.15em] text-sm">
                {BRAND.HERO.PRIMARY_CTA}
              </button>
              <button className="border border-acc-white text-acc-white px-10 py-5 rounded-acc font-black hover:bg-acc-white hover:text-acc-black transition-standard uppercase tracking-[0.15em] text-sm">
                {BRAND.HERO.SECONDARY_CTA}
              </button>
            </div>
          </div>
          <div className="order-2 w-full relative">
            <div className="aspect-video w-full bg-acc-black overflow-hidden acc-shadow rounded-sm">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster={BRAND.ASSETS.HERO_VIDEO_POSTER}
                className="w-full h-full object-cover"
              >
                <source src={BRAND.ASSETS.HERO_VIDEO} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners: React.FC = () => {
  const partnerLogos = [
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882386/2_lts28d.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882386/3_1_ammsxm.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882386/1_ithdzs.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882386/6_uk0u73.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882387/7_nfvvwy.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882387/5_cszhed.webp',
    'https://res.cloudinary.com/dcrjueafq/image/upload/v1769882811/Untitled_design_byrvc3.webp'
  ];

  const displayLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className={UI.SECTION_PY + " bg-acc-white overflow-hidden"}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={UI.HEADING_H2}>
          Powered by industry-leading partners
        </h2>
      </div>
      <div className="relative w-full mt-6 md:mt-8">
        <div className="animate-marquee flex items-center">
          {displayLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[65vw] md:w-[40vw] lg:w-[25vw] px-4 md:px-6"
            >
              <div className="bg-acc-white rounded-2xl h-36 md:h-52 lg:h-60 w-full flex items-center justify-center acc-shadow transition-standard hover:scale-[1.03] p-6 md:p-10">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index % partnerLogos.length + 1}`} 
                  className="h-full w-full object-contain pointer-events-none flex-shrink-0"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className={UI.SECTION_PY + " bg-acc-white overflow-hidden"}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-1">
            <div className="aspect-video bg-acc-grey-dark w-full overflow-hidden flex items-center justify-center acc-shadow rounded-sm">
              <img 
                src={BRAND.WHO_WE_ARE.IMAGE_URL} 
                alt="Accugen Precision Manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className={UI.HEADING_H2}>
              {BRAND.WHO_WE_ARE.HEADING}
            </h2>
            <p className={UI.PARA_LG + " max-w-xl"}>
              {BRAND.WHO_WE_ARE.DESCRIPTION}
            </p>
            <button className="bg-acc-blue-accent text-acc-white px-10 py-5 rounded-acc font-black hover:opacity-90 transition-standard uppercase tracking-[0.15em] text-xs">
              {BRAND.WHO_WE_ARE.CTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION: WHY ACCUGEN
 */
const WhyAccugen: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg>
  ];

  return (
    <section id="why" ref={sectionRef} className={`${UI.SECTION_PY} bg-acc-neutral overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className={`lg:w-1/3 reveal ${isVisible ? 'active' : ''}`}>
            <h2 className={UI.HEADING_H2}>
              {BRAND.WHY_ACCUGEN.HEADING}
            </h2>
            <p className="text-lg opacity-70 leading-relaxed font-medium">
              {BRAND.WHY_ACCUGEN.INTRO}
            </p>
          </div>
          <div className="lg:w-2/3 space-y-6">
            {BRAND.WHY_ACCUGEN.CARDS.map((card, i) => (
              <div 
                key={i} 
                className={`bg-acc-white p-6 md:p-8 rounded-2xl acc-shadow flex items-start gap-6 reveal ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="flex-shrink-0 text-acc-blue-accent mt-1">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight text-acc-black">
                    {card.title}
                  </h3>
                  <p className="text-acc-black opacity-70 text-base leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION: ACCUGEN FLOW
 */
const AccugenFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = BRAND.ACCUGEN_FLOW.STEPS;

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="flow" className={`${UI.SECTION_PY} bg-acc-white overflow-hidden relative`}>
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h2 className={UI.HEADING_H2}>
            {BRAND.ACCUGEN_FLOW.HEADING}
          </h2>
        </div>

        <div className="relative flex items-center justify-between group">
          <button 
            onClick={handlePrev}
            className="hidden md:flex absolute -left-12 z-10 w-12 h-12 items-center justify-center bg-acc-white acc-shadow border border-acc-black border-opacity-5 hover:bg-acc-blue-accent hover:text-acc-white transition-all duration-300"
            aria-label="Previous step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="w-full min-h-[480px] lg:min-h-[360px] relative">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col lg:flex-row items-center gap-10 md:gap-16
                  ${index === currentStep 
                    ? 'opacity-100 translate-x-0 pointer-events-auto' 
                    : index < currentStep 
                      ? 'opacity-0 -translate-x-20 pointer-events-none' 
                      : 'opacity-0 translate-x-20 pointer-events-none'
                  }`}
              >
                <div className="w-full lg:w-1/2 aspect-[16/10] bg-acc-neutral rounded-2xl acc-shadow border border-acc-black border-opacity-5 flex items-center justify-center p-12 overflow-hidden">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 select-none">
                    Image Placeholder {step.id}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-black text-acc-blue-accent tracking-[0.2em]">{step.id}</span>
                    <div className="h-[1px] w-12 bg-acc-blue-accent opacity-20"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-acc-black">
                    {step.title}
                  </h3>
                  <p className="text-lg opacity-70 leading-relaxed font-medium max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="hidden md:flex absolute -right-12 z-10 w-12 h-12 items-center justify-center bg-acc-white acc-shadow border border-acc-black border-opacity-5 hover:bg-acc-blue-accent hover:text-acc-white transition-all duration-300"
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="flex md:hidden items-center justify-center gap-6 mt-12">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 flex items-center justify-center bg-acc-white acc-shadow border border-acc-black border-opacity-5 rounded-full"
            aria-label="Previous step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentStep ? 'bg-acc-blue-accent w-4' : 'bg-acc-black bg-opacity-10'}`} />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-14 h-14 flex items-center justify-center bg-acc-white acc-shadow border border-acc-black border-opacity-5 rounded-full"
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION: SOLUTIONS
 * <!-- SECTION: SOLUTIONS -->
 */
const Solutions: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="solutions" className={`${UI.SECTION_PY} bg-acc-white`}>
      <div className="container mx-auto px-6">
        <h2 className={`${UI.HEADING_H2} text-center mb-12 md:mb-20`}>
          {BRAND.SOLUTIONS.HEADING}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {BRAND.SOLUTIONS.PRODUCTS.map((product) => (
            <button 
              key={product.id}
              onClick={() => product.id === 'crown-bridge' && onNavigate('crown-bridge')}
              className="flex flex-col text-left group transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] bg-acc-neutral rounded-lg acc-shadow border border-acc-black border-opacity-5 overflow-hidden mb-6 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20">
                  Product Image Placeholder
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-acc-black group-hover:text-acc-blue-accent transition-colors">
                {product.name}
              </h3>
            </button>
          ))}
          
          <div className="flex flex-col bg-acc-black text-acc-white p-8 md:p-10 rounded-lg acc-shadow justify-between min-h-[360px] lg:aspect-[4/5]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                View All Lab Products
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Explore our comprehensive range of high-precision digital dental solutions.
              </p>
            </div>
            <button className="w-full bg-acc-blue-accent text-acc-white font-bold py-4 rounded-acc hover:opacity-90 transition-standard uppercase tracking-widest text-[10px]">
              View Lab Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION: PRECISION ENGINEERING (TECHNOLOGY)
 */
const Technology: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  ];

  return (
    <section id="technology" ref={sectionRef} className={`${UI.SECTION_PY} bg-acc-white overflow-hidden relative border-y border-acc-black border-opacity-5 h-auto`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mb-12 md:mb-16">
          <div className={`lg:w-3/5 reveal ${isVisible ? 'active' : ''}`}>
            <span className={UI.LABEL}>{BRAND.TECHNOLOGY.LABEL}</span>
            <h2 className={UI.HEADING_H2 + " mb-0"}>
              {BRAND.TECHNOLOGY.STATEMENT}
            </h2>
          </div>
          <div className={`lg:w-2/5 flex lg:justify-end scale-reveal ${isVisible ? 'active' : ''}`}>
            <div className="text-left lg:text-right">
              <div className="relative inline-block">
                <span className="text-7xl md:text-8xl font-black text-acc-blue-accent tracking-tighter leading-none select-none">
                  {BRAND.TECHNOLOGY.HIGHLIGHT}
                </span>
                <span className="block text-[10px] md:text-xs font-black uppercase tracking-[0.4em] opacity-30 mt-3">
                  Clinical Precision
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BRAND.TECHNOLOGY.CARDS.map((card, i) => (
            <div 
              key={i} 
              className={`bg-acc-white p-8 md:p-10 reveal acc-shadow border border-acc-black border-opacity-5 rounded-sm transition-all duration-500 hover:border-acc-blue-accent hover:shadow-xl group flex flex-col items-start`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-8 text-acc-blue-accent group-hover:scale-110 transition-transform duration-500">
                {icons[i]}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-acc-black group-hover:text-acc-blue-accent transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-acc-black opacity-70 text-base leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className={UI.SECTION_PY + " bg-acc-black"}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-8">
          <div>
            <span className={UI.LABEL}>{BRAND.SERVICES.LABEL}</span>
            <h2 className={UI.HEADING_H2 + " text-acc-white mb-0"}>{BRAND.SERVICES.HEADING}</h2>
          </div>
          <div className="w-24 h-[2px] bg-acc-blue-accent hidden md:block"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {BRAND.SERVICES.ITEMS.map((service, i) => (
            <div key={i} className="bg-acc-grey-dark p-8 md:p-12 transition-standard hover:bg-acc-black group relative acc-shadow rounded-sm min-h-[280px] flex flex-col justify-between">
              <div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-acc-blue-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <h3 className="text-xl md:text-2xl font-black text-acc-white mb-4 uppercase tracking-tight group-hover:text-acc-blue-accent transition-standard">
                  {service.title}
                </h3>
                <p className="text-acc-white opacity-60 text-base leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className={UI.SECTION_PY + " bg-acc-white text-acc-black"}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className={UI.LABEL}>{BRAND.CONTACT.LABEL}</span>
              <h2 className={UI.HEADING_H2}>
                {BRAND.CONTACT.HEADING}
              </h2>
              <div className="space-y-10">
                <div>
                  <h4 className="text-acc-blue-accent text-[10px] font-black uppercase tracking-[0.2em] mb-3">{BRAND.CONTACT.LABEL_ADDRESS}</h4>
                  <p className="opacity-80 text-lg md:text-xl font-medium leading-relaxed">{BRAND.CONTACT.ADDRESS_1}<br/>{BRAND.CONTACT.ADDRESS_2}</p>
                </div>
                <div>
                  <h4 className="text-acc-blue-accent text-[10px] font-black uppercase tracking-[0.2em] mb-3">{BRAND.CONTACT.LABEL_PHONE}</h4>
                  <p className="opacity-80 text-lg md:text-xl font-bold">{BRAND.CONTACT.PHONE}</p>
                </div>
                <div>
                  <h4 className="text-acc-blue-accent text-[10px] font-black uppercase tracking-[0.2em] mb-3">{BRAND.CONTACT.LABEL_EMAIL}</h4>
                  <p className="opacity-80 text-lg md:text-xl font-bold hover:text-acc-blue-accent transition-standard cursor-pointer">{BRAND.CONTACT.EMAIL}</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-14 bg-acc-white acc-shadow rounded-sm border border-acc-black border-opacity-5">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-10 tracking-tight">{BRAND.CONTACT.FORM_HEADING}</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40">{BRAND.CONTACT.INPUT_NAME}</label>
                   <input type="text" className="w-full px-0 py-4 border-b border-acc-black border-opacity-20 focus:border-acc-blue-accent outline-none transition-standard text-lg font-medium bg-transparent" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40">{BRAND.CONTACT.INPUT_EMAIL}</label>
                   <input type="email" className="w-full px-0 py-4 border-b border-acc-black border-opacity-20 focus:border-acc-blue-accent outline-none transition-standard text-lg font-medium bg-transparent" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40">{BRAND.CONTACT.INPUT_MESSAGE}</label>
                   <textarea rows={4} className="w-full px-0 py-4 border-b border-acc-black border-opacity-20 focus:border-acc-blue-accent outline-none transition-standard text-lg font-medium resize-none bg-transparent"></textarea>
                </div>
                <button className="w-full bg-acc-black text-acc-white font-black py-6 rounded-acc hover:bg-acc-blue-accent transition-standard uppercase tracking-[0.2em] text-xs mt-8">
                  {BRAND.CONTACT.SUBMIT}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-acc-black text-acc-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <div>
            <span className="text-3xl font-black tracking-tighter text-acc-white">
              {BRAND.NAME}
            </span>
            <p className="text-xs opacity-40 mt-6 tracking-widest uppercase font-bold">
              &copy; {new Date().getFullYear()} {BRAND.FOOTER.COPYRIGHT}. {BRAND.FOOTER.RIGHTS}.
            </p>
            <p className="text-[10px] opacity-20 mt-2 tracking-widest uppercase font-medium">Hyderabad, India</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
            <a href="#" className="hover:text-acc-blue-accent transition-standard">{BRAND.FOOTER.LINK_1}</a>
            <a href="#" className="hover:text-acc-blue-accent transition-standard">{BRAND.FOOTER.LINK_2}</a>
            <a href="#" className="hover:text-acc-blue-accent transition-standard">{BRAND.FOOTER.LINK_3}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * PAGE: CROWN & BRIDGE
 */
const CrownAndBridgePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-acc-white min-h-screen">
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 bg-acc-black text-acc-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="text-acc-blue-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Product Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                Crown & Bridge
              </h1>
              <p className="text-xl md:text-2xl opacity-70 leading-relaxed font-medium max-w-xl">
                High-precision digital restorations for anterior and posterior clinical cases, optimized for fit and durability.
              </p>
            </div>
            <div className="aspect-[16/10] bg-acc-grey-dark rounded-lg acc-shadow border border-acc-white border-opacity-5 flex items-center justify-center p-12 overflow-hidden">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">
                Image Holder
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={UI.SECTION_PY}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
            <div>
              <h2 className={UI.HEADING_H2}>Restoration Overview</h2>
              <div className="h-40 bg-acc-neutral border border-acc-black border-opacity-5 rounded-lg flex items-center justify-center italic text-acc-black opacity-30 font-medium">
                Overview content placeholder
              </div>
            </div>
            <div>
              <h2 className={UI.HEADING_H2}>Material Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-acc-neutral border border-acc-black border-opacity-5 rounded-lg">
                   <h3 className="text-xl font-bold mb-4">Material Title</h3>
                   <p className="text-base opacity-60 leading-relaxed">Placeholder text for material specifications and benefits.</p>
                </div>
                <div className="p-8 bg-acc-neutral border border-acc-black border-opacity-5 rounded-lg">
                   <h3 className="text-xl font-bold mb-4">Material Title</h3>
                   <p className="text-base opacity-60 leading-relaxed">Placeholder text for material specifications and benefits.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className={UI.HEADING_H2}>Clinical Guidelines</h2>
              <div className="h-64 bg-acc-neutral border border-acc-black border-opacity-5 rounded-lg flex items-center justify-center italic text-acc-black opacity-30 font-medium">
                Clinical guidelines content placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * MAIN APP COMPONENT
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-acc-white flex flex-col selection:bg-acc-blue-accent selection:text-acc-white">
      <Navbar onNavigate={handleNavigate} transparent={currentPage === 'home'} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Partners />
            <WhoWeAre />
            <WhyAccugen />
            <AccugenFlow />
            <Solutions onNavigate={handleNavigate} />
            <Technology />
            <Services />
            <Contact />
          </>
        ) : currentPage === 'crown-bridge' ? (
          <CrownAndBridgePage />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;