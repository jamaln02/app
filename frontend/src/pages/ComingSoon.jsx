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
      stayConnected: 'تواصل معنا'
    },
    en: {
      comingSoon: 'Coming Soon',
      subtitle: 'A World of Luxury Fragrances',
      description: 'We are crafting an extraordinary experience in the world of luxury perfumes. Fragrances that tell your soul\'s story and reflect your elegance and uniqueness.',
      stayConnected: 'Stay Connected'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Dark Elegant Background matching reference site */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0e] via-[#2b0c10] to-[#0a0506]">
        {/* Subtle animated orbs */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-[#bb8d4f]/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-[#2b0c10]/40 blur-[100px] animate-float-delayed"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #bb8d4f 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <Button
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          variant="outline"
          className="bg-[#2b0c10]/80 backdrop-blur-sm border-[#bb8d4f] text-[#bb8d4f] hover:bg-[#bb8d4f] hover:text-[#1a0a0e] hover:border-[#bb8d4f] transition-all duration-500 font-cairo font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-[#bb8d4f]/50 hover:scale-110"
        >
          {language === 'ar' ? 'EN' : 'العربية'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Logo with transparent background */}
        <div className="mb-16 animate-fadeIn">
          <div className="relative flex justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-[60px] opacity-30">
              <img 
                src="https://customer-assets.emergentagent.com/job_rouh-opening/artifacts/edg3av89_logos-1-removebg-preview.png"
                alt="Rouh Glow" 
                className="w-56 h-56 md:w-72 md:h-72 object-contain mx-auto"
              />
            </div>
            {/* Main logo */}
            <img 
              src="https://customer-assets.emergentagent.com/job_rouh-opening/artifacts/edg3av89_logos-1-removebg-preview.png"
              alt="Rouh Perfume Logo" 
              className="relative w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center mb-12 animate-slideUp px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-cairo tracking-wide leading-tight text-[#bb8d4f]" style={{
            textShadow: '0 0 40px rgba(187, 141, 79, 0.4), 0 4px 20px rgba(0, 0, 0, 0.8)'
          }}>
            {t.comingSoon}
          </h1>
          
          <div className="relative inline-block mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 font-cairo font-light text-[#efcfa6] leading-relaxed">
              {t.subtitle}
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#bb8d4f] to-transparent"></div>
          </div>
          
          <p className="text-[#efcfa6]/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-cairo leading-loose px-6">
            {t.description}
          </p>
        </div>

        {/* Decorative Separator */}
        <div className="mb-12 flex items-center justify-center gap-3 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#bb8d4f]/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#bb8d4f]/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#bb8d4f]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#bb8d4f]/60"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#bb8d4f]/60"></div>
        </div>

        {/* Contact & Social Media */}
        <div className="animate-fadeIn mb-12" style={{ animationDelay: '0.6s' }}>
          <p className="text-[#bb8d4f] text-lg md:text-xl mb-8 font-cairo font-semibold">
            {t.stayConnected}
          </p>
          
          <div className="flex gap-5 justify-center flex-wrap mb-10">
            <a
              href="https://www.instagram.com/rouh_.perfume"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-[#2b0c10]/60 backdrop-blur-sm border border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-[#bb8d4f] group-hover:text-[#1a0a0e] transition-colors duration-500" />
            </a>
            
            <a
              href="https://www.facebook.com/share/1HrwhH9tyU/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-[#2b0c10]/60 backdrop-blur-sm border border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-[#bb8d4f] group-hover:text-[#1a0a0e] transition-colors duration-500" />
            </a>
            
            <a
              href="https://wa.me/963933898625"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-[#2b0c10]/60 backdrop-blur-sm border border-[#bb8d4f]/30 hover:border-[#bb8d4f] hover:bg-[#bb8d4f] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/40 hover:scale-110 transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-[#bb8d4f] group-hover:text-[#1a0a0e] transition-colors duration-500" />
            </a>
          </div>
          
          {/* WhatsApp Number Display */}
          <div>
            <a 
              href="https://wa.me/963933898625"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#bb8d4f] text-[#1a0a0e] font-cairo font-bold hover:bg-[#d4a574] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#bb8d4f]/60 hover:scale-105 transform"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-base md:text-lg" dir="ltr">+963 933 898 625</span>
            </a>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-16 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cairo tracking-[0.3em] leading-tight text-[#bb8d4f]/80">
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
        }

        /* Smooth transitions */
        button, a {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Better text rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
