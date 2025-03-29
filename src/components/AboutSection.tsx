'use client';

import { FC } from 'react';
import { FaDumbbell, FaAward, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="relative backdrop-blur-md bg-white/20 p-6 rounded-xl border border-white/30 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcff2e]/30 to-[#feffd6]/20 -z-10"></div>
      
      <div className="flex flex-col items-end text-right">
        <div className="bg-[#fcff2e] p-3 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutSection: FC = () => {
  // Features data
  const features = [
    {
      icon: <FaDumbbell className="text-gray-800 text-2xl" />,
      title: "ציוד מתקדם",
      description: "אנו מציעים מגוון רחב של ציוד כושר מתקדם ועדכני לחוויית אימון מיטבית"
    },
    {
      icon: <FaAward className="text-gray-800 text-2xl" />,
      title: "מדריכים מוסמכים",
      description: "הצוות שלנו מורכב ממדריכים מקצועיים בעלי הסמכות והכשרות מהרמה הגבוהה ביותר"
    },
    {
      icon: <FaUsers className="text-gray-800 text-2xl" />,
      title: "קהילה תומכת",
      description: "הצטרפו לקהילה שלנו ותיהנו מסביבה תומכת ומעודדת להשגת היעדים שלכם"
    }
  ];

  return (
    <section id="about" className="relative py-16 overflow-hidden" dir="rtl">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#feffd6]/40 to-white/5 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#fcff2e]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#fcff2e]/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 inline-block relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              אודות מכון כושר ביתא
              <div className="absolute -bottom-2 right-0 w-full h-1 bg-[#fcff2e]"></div>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="inline-block bg-[#fcff2e] hover:bg-[#e4e729] text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              צור קשר עוד היום
            </a>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-4xl font-bold text-[#fcff2e]">+1,000</span>
              <span className="text-gray-700">מתאמנים קבועים</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="text-4xl font-bold text-[#fcff2e]">15</span>
              <span className="text-gray-700">שנות ניסיון</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="text-4xl font-bold text-[#fcff2e]">25</span>
              <span className="text-gray-700">מדריכים מוסמכים</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="text-4xl font-bold text-[#fcff2e]">98%</span>
              <span className="text-gray-700">שביעות רצון לקוחות</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;