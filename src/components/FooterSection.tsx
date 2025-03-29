import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

interface FooterLink {
  id: number;
  text: string;
  href: string;
}

interface FooterTag {
  id: number;
  text: string;
}

const FooterSection: React.FC = () => {
  // Footer links data
  const footerLinks: FooterLink[] = [
    { id: 1, text: 'דף הבית', href: '/' },
    { id: 2, text: 'אודות', href: '/about' },
    { id: 3, text: 'שירותים', href: '/services' },
    { id: 4, text: 'צור קשר', href: '/contact' },
  ];

  // Social media links data
  const socialLinks: SocialLink[] = [
    { id: 1, icon: <FaFacebook size={24} />, href: 'https://facebook.com', ariaLabel: 'פייסבוק' },
    { id: 2, icon: <FaInstagram size={24} />, href: 'https://instagram.com', ariaLabel: 'אינסטגרם' },
    { id: 3, icon: <FaTwitter size={24} />, href: 'https://twitter.com', ariaLabel: 'טוויטר' },
    { id: 4, icon: <FaWhatsapp size={24} />, href: 'https://whatsapp.com', ariaLabel: 'וואטסאפ' },
  ];

  // Footer tags (keywords)
  const footerTags: FooterTag[] = [
    { id: 1, text: 'מכון כושר' },
    { id: 2, text: 'שירות' },
    { id: 3, text: 'איכות' },
    { id: 4, text: 'מקצועיות' },
    { id: 5, text: 'ישראל' },
  ];

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden text-right" dir="rtl">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcff2e]/20 to-[#feffd6]/30 backdrop-blur-md z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-playful">מכון כושר ביתא</h2>
            <p className="text-gray-700 mb-6">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            {/* Social media links */}
            <div className="flex space-x-4 space-x-reverse justify-start">
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-700 hover:text-[#fcff2e] transition-colors duration-300 bg-white/30 backdrop-blur-sm p-2 rounded-full border border-white/20 shadow-sm hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-playful">ניווט מהיר</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.href}
                    className="text-gray-700 hover:text-[#fcff2e] transition-colors duration-300 block py-1 border-b border-gray-200/50"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags and contact section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-playful">צור קשר</h3>
            <address className="not-italic text-gray-700 mb-6">
              <p>רחוב הכושר 123, תל אביב</p>
              <p>טלפון: 03-1234567</p>
              <p>דוא"ל: info@beta-gym.co.il</p>
            </address>
            
            {/* Tags */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 font-playful">תגיות</h4>
              <div className="flex flex-wrap gap-2">
                {footerTags.map((tag) => (
                  <span 
                    key={tag.id} 
                    className="inline-block px-3 py-1 rounded-full text-sm bg-[#fcff2e]/30 backdrop-blur-sm text-gray-800 border border-[#fcff2e]/50 shadow-sm"
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-6 border-t border-gray-200/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © {currentYear} מכון כושר ביתא. כל הזכויות שמורות.
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/privacy"
                className="text-sm text-gray-700 hover:text-[#fcff2e] transition-colors duration-300 ml-4"
              >
                מדיניות פרטיות
              </Link>
              <Link 
                href="/terms"
                className="text-sm text-gray-700 hover:text-[#fcff2e] transition-colors duration-300"
              >
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;