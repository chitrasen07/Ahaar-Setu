
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ImpactCounter from '@/components/ImpactCounter';
import MapSection from '@/components/MapSection';
import Testimonials from '@/components/Testimonials';
import NewsletterSignup from '@/components/NewsletterSignup';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aahaar Setu - Connecting Surplus to Smiles</title>
        <meta name="description" content="Aahaar Setu is a platform connecting food donors with recipients to reduce waste and fight hunger." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ImpactCounter />
          </div>
          
          <HowItWorks />
          
          <div className="bridge-divider"></div>
          
          <MapSection />
          
          <Testimonials />
          
          <NewsletterSignup />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
