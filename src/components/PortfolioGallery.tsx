'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define types for our gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: 'facilities' | 'equipment' | 'classes' | 'transformations';
}

// Define types for our category filter
type CategoryFilter = 'all' | 'facilities' | 'equipment' | 'classes' | 'transformations';

// Hebrew translations for categories
const categoryTranslations = {
  all: 'הכל',
  facilities: 'מתקנים',
  equipment: 'ציוד',
  classes: 'שיעורים',
  transformations: 'שינויים',
};

const PortfolioGallery: React.FC = () => {
  // Sample gallery data with Hebrew content
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/gym-facility-1.jpg',
      alt: 'אולם אימונים מרכזי',
      caption: 'אולם האימונים המרכזי שלנו עם ציוד חדיש',
      category: 'facilities',
    },
    {
      id: 2,
      src: '/images/gym-equipment-1.jpg',
      alt: 'משקולות חופשיות',
      caption: 'מגוון רחב של משקולות חופשיות לאימון מקצועי',
      category: 'equipment',
    },
    {
      id: 3,
      src: '/images/gym-class-1.jpg',
      alt: 'שיעור ספינינג',
      caption: 'שיעור ספינינג אנרגטי בהדרכת מאמנים מוסמכים',
      category: 'classes',
    },
    {
      id: 4,
      src: '/images/transformation-1.jpg',
      alt: 'סיפור הצלחה - דני',
      caption: 'דני הוריד 15 ק״ג תוך 3 חודשים בליווי המאמנים שלנו',
      category: 'transformations',
    },
    {
      id: 5,
      src: '/images/gym-facility-2.jpg',
      alt: 'אזור קרדיו',
      caption: 'אזור הקרדיו המרווח שלנו עם נוף לעיר',
      category: 'facilities',
    },
    {
      id: 6,
      src: '/images/gym-equipment-2.jpg',
      alt: 'מכונות כוח',
      caption: 'מכונות כוח מתקדמות לאימון מדויק של קבוצות שרירים',
      category: 'equipment',
    },
    {
      id: 7,
      src: '/images/gym-class-2.jpg',
      alt: 'שיעור יוגה',
      caption: 'שיעורי יוגה להגמשת הגוף והרגעת הנפש',
      category: 'classes',
    },
    {
      id: 8,
      src: '/images/transformation-2.jpg',
      alt: 'סיפור הצלחה - מיכל',
      caption: 'מיכל שיפרה את הכושר והבריאות שלה תוך חצי שנה',
      category: 'transformations',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [isLoading, setIsLoading] = useState(true);

  // Filter items when the active filter changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for smooth transitions
    const timer = setTimeout(() => {
      if (activeFilter === 'all') {
        setFilteredItems(galleryItems);
      } else {
        setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-[#feffd6] to-[#fcff2e]/30 min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">הגלריה שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צפו בתמונות ממכון הכושר המוביל שלנו - מכון כושר ביתא. מתקנים חדישים, ציוד מקצועי, שיעורים מגוונים וסיפורי הצלחה של מתאמנים.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(['all', 'facilities', 'equipment', 'classes', 'transformations'] as CategoryFilter[]).map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`
                px-6 py-2.5 rounded-full text-lg font-medium transition-all duration-300
                backdrop-blur-md border border-white/20
                ${activeFilter === category 
                  ? 'bg-[#fcff2e]/80 text-gray-800 shadow-lg' 
                  : 'bg-white/10 text-gray-700 hover:bg-white/30'}
              `}
            >
              {categoryTranslations[category]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="aspect-square relative overflow-hidden rounded-t-xl">
                {/* Placeholder for Next.js Image component - in a real project, use actual optimized images */}
                <div className="w-full h-full bg-gray-200 relative">
                  {/* Using a div instead of Next.js Image for demo purposes */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(https://source.unsplash.com/random/600x600/?gym,${item.category})` }}
                  />
                </div>
              </div>
              
              <div className="p-4 backdrop-blur-md bg-white/40 border-t border-white/20">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.alt}</h3>
                <p className="text-gray-700">{item.caption}</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#fcff2e]/50 text-gray-800">
                    {categoryTranslations[item.category]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-16 backdrop-blur-md bg-white/20 rounded-xl border border-white/30 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">אין תוצאות</h3>
            <p className="text-gray-600">לא נמצאו תמונות בקטגוריה זו</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;