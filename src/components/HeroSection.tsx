
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-gray-300 pattern-bg-white pattern-size-4"></div>
      
      {/* Bridge motif at top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-aahaar-green-100 overflow-hidden">
        <div className="bridge-divider"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Connecting <span className="text-aahaar-green-600">Surplus</span> to <span className="text-aahaar-orange-500">Smiles</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Aahaar Setu bridges the gap between food surplus and hunger, creating a community of sharing and sustainability.
              </p>
              <p className="mt-3 text-base text-gray-500 max-w-2xl hindi-text">
                आहार सेतु खाद्य अधिशेष और भूख के बीच की खाई को पाटता है, साझाकरण और स्थिरता का एक समुदाय बनाता है।
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/donate" 
                  className="btn-secondary flex items-center justify-center"
                >
                  Donate Food
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/request" 
                  className="btn-primary flex items-center justify-center"
                >
                  Request Food
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full aspect-[4/3] bg-gradient-to-br from-aahaar-orange-100 to-aahaar-green-100">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="People sharing food" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                <div className="relative z-20 bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Join the Movement</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Every meal shared strengthens our community
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-aahaar-orange-200 opacity-30 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-aahaar-green-200 opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
