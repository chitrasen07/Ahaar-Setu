
import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya's Restaurant",
    role: "Food Donor",
    text: "Aahaar Setu helped our restaurant feed 100 people this month! The process is simple and the impact is tremendous. We're proud to be part of this community.",
    image: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    name: "Sunshine Shelter",
    role: "Food Recipient",
    text: "Thanks to Aahaar Setu, we've been able to provide nutritious meals to everyone at our shelter. The quality of food and reliability of service has been exceptional.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Regular Donor",
    text: "As a home cook, I often prepare extra food. Instead of wasting it, I now share through Aahaar Setu. It feels great knowing my food is helping others.",
    image: "https://images.unsplash.com/photo-1589955791915-526198ae4ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "Green Grocers",
    role: "Food Donor",
    text: "We used to throw away produce that wasn't 'perfect' looking. Now we donate it through Aahaar Setu and have reduced our waste by 30%!",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Auto advance slides every 5 seconds
    timeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-aahaar-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people making a difference through food sharing
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="relative w-full md:w-2/5">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:bg-gradient-to-r"></div>
                    </div>
                    
                    <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
                      <Quote className="h-8 w-8 text-aahaar-orange-300 mb-4" />
                      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                      
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-aahaar-orange-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index 
                    ? 'bg-aahaar-orange-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
