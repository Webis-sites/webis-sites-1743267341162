'use client';

import { FC } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-background.jpg" // Replace with actual image path
          alt="מכון כושר מקצועי"
          layout="fill"
          objectFit="cover"
          priority
          className="mix-blend-overlay opacity-70"
        />
      </div>

      {/* Glassmorphism container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="backdrop-blur-md bg-white/20 rounded-2xl p-8 md:p-12 border border-white/30 shadow-lg max-w-3xl mx-auto">
          <div className="text-center">
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md"
              style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
            >
              מכון כושר מוביל בישראל
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
              חווית לקוח מושלמת בכל ביקור
            </h2>
            
            <p className="mb-8 text-white/80 max-w-xl mx-auto">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <button
              onClick={onCtaClick}
              className="bg-[#fcff2e] hover:bg-[#feffd6] text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#fcff2e]/50 shadow-md"
              aria-label="קבע תור עכשיו למכון הכושר"
            >
              קבע תור עכשיו
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#feffd6]/30 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#fcff2e]/40 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-[#feffd6]/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#fcff2e]/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;