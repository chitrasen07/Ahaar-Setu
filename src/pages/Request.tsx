
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SlidersHorizontal } from 'lucide-react';

const Request = () => {
  return (
    <>
      <Helmet>
        <title>Request Food - Aahaar Setu</title>
        <meta name="description" content="Request surplus food from donors in your area through Aahaar Setu." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Request Food</h1>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <p className="text-center mb-8 text-gray-600">
              Fill out the form below to request surplus food from donors in your area.
            </p>
            
            {/* Form will be implemented in a future update */}
            <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <SlidersHorizontal className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Food request form</h3>
                <p className="mt-1 text-sm text-gray-500">Coming soon!</p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Request;
