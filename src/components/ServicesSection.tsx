'use client';

// ServicesSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

// Define interfaces for our data
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServicesSection: React.FC = () => {
  // Services data in Hebrew
  const services: Service[] = [
    {
      id: 1,
      title: "אימון אישי",
      description: "אימונים מותאמים אישית עם מאמנים מוסמכים שיעזרו לך להשיג את היעדים שלך",
      icon: "👤",
    },
    {
      id: 2,
      title: "אימוני קבוצות",
      description: "מגוון רחב של שיעורים קבוצתיים כמו יוגה, פילאטיס, זומבה ועוד",
      icon: "👥",
    },
    {
      id: 3,
      title: "ייעוץ תזונה",
      description: "תוכניות תזונה מותאמות אישית שילוו את האימונים שלך לתוצאות מיטביות",
      icon: "🥗",
    },
    {
      id: 4,
      title: "תוכניות אימון מיוחדות",
      description: "תוכניות ייעודיות לירידה במשקל, בניית שריר, או שיפור הכושר הכללי",
      icon: "📋",
    },
    {
      id: 5,
      title: "מתקנים מתקדמים",
      description: "ציוד חדשני ומתקדם לאימון יעיל ובטוח בסביבה נוחה ומזמינה",
      icon: "🏋️",
    },
    {
      id: 6,
      title: "ליווי מקצועי",
      description: "צוות מקצועי ומנוסה שילווה אותך לאורך כל הדרך להשגת המטרות שלך",
      icon: "🤝",
    },
  ];

  // State for tracking which card is being hovered
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      dir="rtl" 
      className="py-16 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e] opacity-30"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#fcff2e] opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#fcff2e] opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            id="services-heading" 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
          >
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            במכון כושר ביתא אנחנו מציעים מגוון רחב של שירותים מקצועיים כדי לעזור לך להשיג את המטרות שלך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative backdrop-blur-md bg-white/30 rounded-xl p-6 border border-white/40 shadow-lg overflow-hidden group"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
              }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3) inset',
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(service.id)}
              onBlur={() => setHoveredId(null)}
            >
              {/* Decorative background element */}
              <div 
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#fcff2e] opacity-20 transition-transform duration-500 ease-in-out"
                style={{
                  transform: hoveredId === service.id ? 'scale(1.5)' : 'scale(1)',
                }}
              ></div>
              
              {/* Service content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 
                  className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>
                
                <motion.div 
                  className="mt-4 inline-block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredId === service.id ? 1 : 0, 
                    x: hoveredId === service.id ? 0 : -10 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-800 font-medium flex items-center">
                    קרא עוד
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2 transform rotate-180" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;