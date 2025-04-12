
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-aahaar-green-500 flex items-center justify-center bg-white">
                <span className="font-bold text-aahaar-green-500">AS</span>
              </div>
              <span className="ml-2 text-xl font-semibold">
                Aahaar Setu
                <span className="hindi-text text-xs block text-gray-500">आहार सेतु</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Building bridges to end food waste and hunger, one meal at a time.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-aahaar-orange-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-aahaar-orange-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-aahaar-orange-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-aahaar-green-600">Home</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-aahaar-green-600">Donate Food</Link></li>
              <li><Link to="/request" className="text-gray-600 hover:text-aahaar-green-600">Request Food</Link></li>
              <li><Link to="/rewards" className="text-gray-600 hover:text-aahaar-green-600">Rewards</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-aahaar-green-600">Community Hub</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-aahaar-green-600">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-aahaar-green-500 mr-2" />
                <span className="text-gray-600">info@aahaarsetu.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-aahaar-green-500 mr-2" />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-aahaar-green-500 mr-2" />
                <span className="text-gray-600">Bangalore, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-aahaar-green-500 mr-2" />
                <Link to="/terms" className="text-gray-600 hover:text-aahaar-green-600">Terms of Service</Link>
              </li>
              <li className="flex items-center">
                <Shield className="h-4 w-4 text-aahaar-green-500 mr-2" />
                <Link to="/privacy" className="text-gray-600 hover:text-aahaar-green-600">Privacy Policy</Link>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="/assets/food-safety-guide.pdf" 
                className="inline-block bg-aahaar-green-100 text-aahaar-green-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-aahaar-green-200"
              >
                Download Food Safety Guide
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Aahaar Setu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
