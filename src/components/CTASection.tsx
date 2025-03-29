'use client';

import React from 'react';
import Image from 'next/image';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

/**
 * CTASection - A call-to-action component for מכון כושר ביתא
 * 
 * Features:
 * - RTL layout support for Hebrew text
 * - Glassmorphism design with blur effects and transparency
 * - Responsive design for all device sizes
 * - Accessible markup with semantic HTML
 */
const CTASection: React.FC<CTASectionProps> = ({
  headline = "הצטרפו למכון כושר ביתא והתחילו את המסע שלכם לכושר מושלם",
  subheadline = "אימונים מותאמים אישית, מאמנים מקצועיים, וציוד חדשני - כל מה שאתם צריכים במקום אחד",
  buttonText = "קבע תור עכשיו",
  onButtonClick = () => console.log("Button clicked"),
}) => {
  return (
    <section 
      dir="rtl" 
      className="relative overflow-hidden py-16 md:py-24 w-full"
      aria-labelledby="cta-headline"
    >
      {/* Background gradient and image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e]/40 z-0">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="/images/fitness-background.jpg" // Replace with your actual image path
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      {/* Content container with glassmorphism effect */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="backdrop-blur-md bg-white/20 rounded-2xl border border-white/30 shadow-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 
              id="cta-headline"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight"
            >
              {headline}
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl mb-8 text-gray-800">
              {subheadline}
            </p>
            
            {/* Decorative element */}
            <div className="w-24 h-1 bg-[#fcff2e] mx-auto mb-8 rounded-full shadow-sm"></div>
            
            {/* CTA Button */}
            <button
              onClick={onButtonClick}
              className="inline-block bg-[#fcff2e] hover:bg-[#e6e929] text-gray-900 font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md focus:outline-none focus:ring-4 focus:ring-[#fcff2e]/50"
              aria-label={buttonText}
            >
              {buttonText}
              {/* Arrow icon pointing left for RTL */}
              <span className="inline-block mr-2 transform rotate-180" aria-hidden="true">
                &#x2192;
              </span>
            </button>
            
            {/* Additional info */}
            <p className="mt-6 text-sm text-gray-700 opacity-80">
              *אימון ראשון חינם למצטרפים חדשים
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements for depth */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e]/30 rounded-full backdrop-blur-sm z-0"></div>
        <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#feffd6]/40 rounded-full backdrop-blur-sm z-0"></div>
      </div>
    </section>
  );
};

export default CTASection;