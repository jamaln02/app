import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const ComingSoon = () => {
  const [language, setLanguage] = useState('ar');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const content = {
    ar: {
      comingSoon: 'قريباً',
      subtitle: 'عالم من العطور الفاخرة في طريقه إليك',
      description: 'نحن نعمل على شيء استثنائي. عطور فاخرة تحكي قصة روحك وتعكس تميزك.',
      stayConnected: 'ابقَ على تواصل',
      followUs: 'تابعنا',
      days: 'يوم',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية',
      launching: 'الإطلاق خلال'
    },
    en: {
      comingSoon: 'Coming Soon',
      subtitle: 'A World of Luxury Fragrances Awaits You',
      description: 'We are crafting something extraordinary. Luxury perfumes that tell your soul\'s story and reflect your uniqueness.',
      stayConnected: 'Stay Connected',
      followUs: 'Follow Us',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      launching: 'Launching In'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#2b0c10] to-[#000000]">
        {/* Animated Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#bb8d4f] blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#efcfa6] blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Wavy Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q25 25, 50 50 T100 50" stroke="#bb8d4f" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <Button
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          variant="outline"
          className="bg-transparent border-[#bb8d4f] text-[#efcfa6] hover:bg-[#bb8d4f] hover:text-[#000000] transition-all duration-300 font-cairo"
        >
          {language === 'ar' ? 'EN' : 'ع'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Logo */}
        <div className="mb-12 animate-fadeIn">
          <div className="relative">
            {/* Stylized Logo with Golden Gradient */}
            <div className="flex flex-col items-center">
              <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl mb-4">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#efcfa6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#bb8d4f', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#efcfa6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Abstract flowing shape inspired by luxury perfume bottles */}
                <path d="M40 80 Q 50 40, 80 30 T 120 80 Q 110 90, 80 95 T 40 80 Z" fill="url(#goldGradient)" opacity="0.9"/>
                <path d="M60 60 Q 70 35, 80 30 T 100 60 Q 95 70, 80 72 T 60 60 Z" fill="url(#goldGradient)" opacity="0.7"/>
                <ellipse cx="80" cy="25" rx="8" ry="12" fill="url(#goldGradient)"/>
              </svg>
              <h2 className="text-5xl font-bold font-cairo tracking-[0.3em]" style={{
                background: 'linear-gradient(135deg, #efcfa6 0%, #bb8d4f 50%, #efcfa6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(187, 141, 79, 0.3)',
                letterSpacing: '0.3em'
              }}>
                {language === 'ar' ? 'روح' : 'ROUH'}
              </h2>
            </div>
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center mb-8 animate-slideUp">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 font-cairo tracking-wider ${isRTL ? 'text-right' : 'text-left'}`} style={{
            background: 'linear-gradient(135deg, #efcfa6 0%, #bb8d4f 50%, #efcfa6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 60px rgba(187, 141, 79, 0.3)'
          }}>
            {t.comingSoon}
          </h1>
          
          <p className="text-[#efcfa6] text-2xl md:text-3xl mb-4 font-cairo font-light">
            {t.subtitle}
          </p>
          
          <p className="text-[#efcfa6]/80 text-lg md:text-xl max-w-2xl mx-auto font-cairo leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <p className="text-[#bb8d4f] text-sm uppercase tracking-widest mb-6 font-cairo font-semibold">
            {t.launching}
          </p>
          
          <div className="flex gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: t.days },
              { value: timeLeft.hours, label: t.hours },
              { value: timeLeft.minutes, label: t.minutes },
              { value: timeLeft.seconds, label: t.seconds }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center backdrop-blur-md bg-[#2b0c10]/40 rounded-2xl p-6 min-w-[100px] border border-[#bb8d4f]/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <span className="text-5xl md:text-6xl font-bold text-[#bb8d4f] font-cairo mb-2">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[#efcfa6] text-sm uppercase tracking-wider font-cairo">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="text-[#efcfa6] text-lg mb-6 font-cairo font-semibold">
            {t.followUs}
          </p>
          
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Facebook, href: '#', label: 'Facebook' },
              { Icon: Twitter, href: '#', label: 'Twitter' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group relative p-4 rounded-full backdrop-blur-md bg-[#2b0c10]/40 border border-[#bb8d4f]/20 hover:bg-[#bb8d4f] transition-all duration-300 shadow-lg hover:shadow-[#bb8d4f]/50"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-[#efcfa6] group-hover:text-[#000000] transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent"></div>
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

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        /* Smooth transitions for all interactive elements */
        button, a {
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
