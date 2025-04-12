
import { Check, ArrowRight, Utensils, Users, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Utensils,
      title: "List Surplus Food",
      description: "Easily list your surplus food with details like quantity, expiry time, and pickup location.",
      color: "bg-aahaar-orange-100 text-aahaar-orange-600",
    },
    {
      icon: Users,
      title: "Match with Recipients",
      description: "Our system automatically matches your donation with nearby shelters or individuals in need.",
      color: "bg-aahaar-green-100 text-aahaar-green-600",
    },
    {
      icon: Award,
      title: "Share and Earn Rewards",
      description: "Complete the food sharing and earn reward points that can be redeemed for exciting benefits.",
      color: "bg-blue-100 text-blue-600",
    }
  ];
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to reduce food waste and help those in need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-hover bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                
                <p className="text-gray-600 text-center flex-grow">{step.description}</p>
                
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-aahaar-green-100 text-aahaar-green-800 font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center rounded-lg bg-aahaar-green-50 px-6 py-4 border border-aahaar-green-200">
            <div className="flex items-center">
              <div className="bg-aahaar-green-200 rounded-full p-2">
                <Check className="h-6 w-6 text-aahaar-green-600" />
              </div>
            </div>
            <p className="text-aahaar-green-800 font-medium">
              Already redistributed <span className="font-bold">1,500+</span> meals and counting!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
