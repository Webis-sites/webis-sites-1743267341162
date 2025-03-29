'use client';

// ContactForm.tsx
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Define the form input types
interface IFormInputs {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form submission handler
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      
      // Reset form and show success message
      reset();
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 my-8 relative overflow-hidden" dir="rtl">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6]/80 to-[#fcff2e]/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg -z-10"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-right">צור קשר</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700 text-right">מכון כושר ביתא</h3>
        
        {/* Introduction text */}
        <p className="mb-8 text-gray-700 text-right leading-relaxed">
          מלאו את הטופס כדי לקבל מידע נוסף או לקבוע פגישה במכון הכושר שלנו. 
          צוות המומחים שלנו ישמח לענות על כל שאלה ולעזור לכם להשיג את יעדי הכושר שלכם.
        </p>
        
        {/* Success message */}
        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">תודה רבה! </strong>
            <span className="block sm:inline">פנייתך התקבלה בהצלחה. ניצור איתך קשר בהקדם.</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name field */}
          <div className="relative">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              שם מלא <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="הזן את שמך המלא"
              className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition duration-200`}
              {...register('name', { required: 'שדה זה הוא חובה' })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          {/* Phone field */}
          <div className="relative">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              מספר טלפון <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="הזן את מספר הטלפון שלך"
              className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition duration-200`}
              {...register('phone', { 
                required: 'שדה זה הוא חובה',
                pattern: {
                  value: /^[0-9]{9,10}$/,
                  message: 'נא להזין מספר טלפון תקין'
                }
              })}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          {/* Email field */}
          <div className="relative">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              אימייל <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="הזן את כתובת האימייל שלך"
              className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition duration-200`}
              {...register('email', { 
                required: 'שדה זה הוא חובה',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'כתובת אימייל לא תקינה'
                }
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          
          {/* Message field */}
          <div className="relative">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              הודעה <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="כתוב את הודעתך כאן..."
              className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition duration-200`}
              {...register('message', { required: 'שדה זה הוא חובה' })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          
          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-[#fcff2e] hover:bg-[#e8eb2a] text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  שולח...
                </>
              ) : (
                'שלח פנייה'
              )}
            </button>
          </div>
        </form>
        
        {/* Additional contact information */}
        <div className="mt-10 pt-6 border-t border-gray-200/50">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">דרכים נוספות ליצירת קשר:</h4>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2 text-[#fcff2e]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-gray-700">03-1234567</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2 text-[#fcff2e]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-gray-700">info@beta-gym.co.il</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2 text-[#fcff2e]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-700">רחוב הרצל 123, תל אביב</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;