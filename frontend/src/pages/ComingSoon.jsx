import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const ComingSoon = () => {
  const [language, setLanguage] = useState('ar');

  const content = {
    ar: {
      comingSoon: 'قريباً',
      subtitle: 'عالم من العطور الفاخرة',
      description: 'نحن نعمل على إطلاق تجربة استثنائية في عالم العطور الفاخرة. عطور تحكي قصة روحك وتعكس أناقتك وتميزك.',
      stayConnected: 'تواصل معنا',
      contact: 'للتواصل'
    },
    en: {
      comingSoon: 'Coming Soon',
      subtitle: 'A World of Luxury Fragrances',
      description: 'We are crafting an extraordinary experience in the world of luxury perfumes. Fragrances that tell your soul\'s story and reflect your elegance and uniqueness.',
      stayConnected: 'Stay Connected',
      contact: 'Contact Us'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Elegant Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf7] via-[#efcfa6]/20 to-[#fdfbf7]">
        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#bb8d4f]/20 to-[#efcfa6]/30 blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#efcfa6]/30 to-[#bb8d4f]/20 blur-[100px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#bb8d4f]/10 blur-[120px] animate-pulse"></div>
        
        {/* Elegant Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="elegant-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#bb8d4f"/>
                <circle cx="0" cy="0" r="1" fill="#bb8d4f"/>
                <circle cx="60" cy="0" r="1" fill="#bb8d4f"/>
                <circle cx="0" cy="60" r="1" fill="#bb8d4f"/>
                <circle cx="60" cy="60" r="1" fill="#bb8d4f"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegant-pattern)" />
          </svg>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <Button
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-[#bb8d4f] text-[#2b0c10] hover:bg-[#bb8d4f] hover:text-white hover:border-[#bb8d4f] transition-all duration-500 font-cairo font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-[#bb8d4f]/50 hover:scale-110"
        >
          {language === 'ar' ? 'EN' : 'العربية'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Logo */}
        <div className="mb-16 animate-fadeIn">
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow Effect Behind Logo */}
              <div className="absolute inset-0 blur-[40px] opacity-50">
                <img 
                  src="https://customer-assets.emergentagent.com/job_rouh-opening/artifacts/xeqy29fd_logos-1.png"
                  alt="Rouh Glow" 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                />
              </div>
              {/* Actual Logo */}
              <img 
                src="https://customer-assets.emergentagent.com/job_rouh-opening/artifacts/xeqy29fd_logos-1.png"
                alt="Rouh Perfume Logo" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-cairo tracking-wide" style={{
            background: 'linear-gradient(135deg, #bb8d4f 0%, #d4a574 50%, #bb8d4f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 12px rgba(187, 141, 79, 0.3))'
          }}>
            {t.comingSoon}
          </h1>
          
          <div className="relative inline-block mb-8">
            <h2 className="text-3xl md:text-4xl mb-2 font-cairo font-light text-[#2b0c10]">
              {t.subtitle}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#bb8d4f] to-transparent"></div>
          </div>
          
          <p className="text-[#2b0c10]/80 text-lg md:text-xl max-w-3xl mx-auto font-cairo leading-relaxed px-6">
            {t.description}
          </p>
        </div>

        {/* Decorative Separator */}
        <div className="mb-16 flex items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#bb8d4f]"></div>
          <div className="w-2 h-2 rounded-full bg-[#bb8d4f]"></div>
          <div className="w-3 h-3 rounded-full bg-[#bb8d4f]"></div>
          <div className="w-2 h-2 rounded-full bg-[#bb8d4f]"></div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#bb8d4f]"></div>
        </div>

        {/* Contact & Social Media */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="text-[#2b0c10] text-xl mb-8 font-cairo font-semibold">
            {t.stayConnected}
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/rouh_.perfume"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 text-[#bb8d4f] group-hover:text-white transition-colors duration-500" />
            </a>
            
            <a
              href="https://www.facebook.com/share/1HrwhH9tyU/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7 text-[#bb8d4f] group-hover:text-white transition-colors duration-500" />
            </a>
            
            <a
              href="https://wa.me/963933898625"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-7 h-7 text-[#bb8d4f] group-hover:text-white transition-colors duration-500" />
            </a>
          </div>
          
          {/* WhatsApp Number Display */}
          <div className="mt-8">
            <a 
              href="https://wa.me/963933898625"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#bb8d4f] text-[#2b0c10] font-cairo font-semibold hover:bg-[#bb8d4f] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-105 transform"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-lg" dir="ltr">+963 933 898 625</span>
            </a>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-16 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-4xl md:text-5xl font-bold font-cairo tracking-[0.2em]" style={{
            background: 'linear-gradient(135deg, #bb8d4f 0%, #d4a574 50%, #bb8d4f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {language === 'ar' ? 'روح' : 'ROUH'}
          </h3>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(10px) translateX(-5px);
          }
          66% {
            transform: translateY(5px) translateX(5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        /* Smooth transitions */
        button, a {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
