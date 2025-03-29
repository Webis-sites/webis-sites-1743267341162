'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

// Define types for our facility items
interface FacilityItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const FacilitiesSection: FC = () => {
  // Facilities data with Hebrew content
  const facilities: FacilityItem[] = [
    {
      id: 1,
      icon: '💪',
      title: 'ציוד מודרני',
      description: 'מגוון רחב של מכשירי כושר חדישים ומתקדמים לאימון יעיל ומהנה'
    },
    {
      id: 2,
      icon: '🏋️',
      title: 'אזורי אימון מרווחים',
      description: 'חללי אימון גדולים ומאווררים המאפשרים חופש תנועה ונוחות מרבית'
    },
    {
      id: 3,
      icon: '🚿',
      title: 'חדרי הלבשה מפנקים',
      description: 'חדרי הלבשה נקיים עם מקלחות, לוקרים ואביזרי נוחות לחוויה מושלמת'
    },
    {
      id: 4,
      icon: '👨‍🏫',
      title: 'צוות מקצועי',
      description: 'מאמנים מוסמכים ובעלי ניסיון עשיר שילוו אתכם להשגת היעדים שלכם'
    }
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // State for hover effect
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden rtl" 
      dir="rtl"
      style={{
        background: 'linear-gradient(135deg, rgba(252, 255, 46, 0.2) 0%, rgba(254, 255, 214, 0.3) 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            המתקנים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            מכון כושר ביתא מציע לכם את המתקנים והציוד המתקדמים ביותר לחווית אימון מושלמת
          </motion.p>
        </div>

        {/* Facilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(facility.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative rounded-xl p-6 h-full
                backdrop-blur-md
                border border-white/20
                transition-all duration-300 ease-in-out
                ${hoveredCard === facility.id ? 'transform -translate-y-2' : ''}
              `}
              style={{
                background: 'linear-gradient(135deg, rgba(254, 255, 214, 0.7) 0%, rgba(252, 255, 46, 0.3) 100%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.3) inset'
              }}
            >
              {/* Icon */}
              <div 
                className="text-4xl mb-4 inline-block p-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(252, 255, 46, 0.8) 0%, rgba(254, 255, 214, 0.8) 100%)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                {facility.icon}
              </div>
              
              {/* Title */}
              <h3 
                className="text-xl font-bold mb-3 text-gray-800"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {facility.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700">
                {facility.description}
              </p>
              
              {/* Decorative element */}
              <div 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full"
                style={{ background: '#fcff2e' }}
              ></div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-gray-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            בואו להתרשם ממתקני המכון
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;