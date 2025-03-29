'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface BusinessHours {
  day: string;
  hours: string;
}

interface LocationMapProps {
  address: string;
  phone: string;
  email: string;
  businessHours: BusinessHours[];
  coordinates: [number, number]; // [latitude, longitude]
}

const LocationMap: React.FC<LocationMapProps> = ({
  address = 'רחוב הרצל 123, תל אביב',
  phone = '03-1234567',
  email = 'info@betagym.co.il',
  businessHours = [
    { day: 'ראשון - חמישי', hours: '06:00 - 23:00' },
    { day: 'שישי', hours: '06:00 - 16:00' },
    { day: 'שבת', hours: '08:00 - 14:00' },
  ],
  coordinates = [32.0853, 34.7818], // Tel Aviv coordinates as default
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side rendering for the map
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden" dir="rtl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e] opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-playful">
            בואו לבקר אותנו
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            אנחנו מחכים לכם במכון כושר ביתא - המקום המושלם לאימון שלכם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contact Information Card */}
          <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50 order-2 lg:order-1 transform transition-transform hover:scale-102 hover:shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-[#fcff2e] pb-2 inline-block">
              פרטי התקשרות
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-[#fcff2e] p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">כתובת</h4>
                  <p className="text-gray-700">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-[#fcff2e] p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">טלפון</h4>
                  <p className="text-gray-700 hover:text-[#fcff2e] transition-colors">
                    <a href={`tel:${phone}`}>{phone}</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-[#fcff2e] p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">אימייל</h4>
                  <p className="text-gray-700 hover:text-[#fcff2e] transition-colors">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-[#fcff2e] p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">שעות פעילות</h4>
                  <ul className="space-y-2">
                    {businessHours.map((item, index) => (
                      <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-700">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Card */}
          <div className="backdrop-blur-md bg-white/20 p-4 rounded-2xl shadow-lg border border-white/50 h-[400px] md:h-[500px] order-1 lg:order-2 overflow-hidden">
            {isMounted && (
              <MapContainer 
                center={coordinates} 
                zoom={15} 
                style={{ height: '100%', width: '100%', borderRadius: '12px' }}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={coordinates}>
                  <Popup>
                    <div dir="rtl" className="text-right">
                      <strong>מכון כושר ביתא</strong><br />
                      {address}
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#fcff2e] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-32 -right-16 w-72 h-72 bg-[#feffd6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default LocationMap;