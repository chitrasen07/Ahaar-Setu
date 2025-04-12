
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Donate Food', path: '/donate' },
    { name: 'Request Food', path: '/request' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Community', path: '/community' },
    { name: 'About Us', path: '/about' },
  ];
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-aahaar-green-500 flex items-center justify-center bg-white">
                <span className="font-bold text-aahaar-green-500">AS</span>
              </div>
              <span className="ml-2 text-xl font-semibold">
                Aahaar Setu
                <span className="hindi-text text-xs block text-gray-500">आहार सेतु</span>
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors",
                    isActive(link.path)
                      ? "border-aahaar-green-500 text-aahaar-green-800"
                      : "border-transparent text-gray-500 hover:border-aahaar-green-300 hover:text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:flex items-center">
            <div className="relative mr-4">
              <Search className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-1 rounded-full border text-sm focus:outline-none focus:ring-1 focus:ring-aahaar-green-500"
              />
            </div>
            
            <Link to="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className="border border-aahaar-orange-500 text-aahaar-orange-600 hover:bg-aahaar-orange-50"
              >
                <User className="mr-1 h-4 w-4" /> Login / Sign Up
              </Button>
            </Link>
            
            <button className="ml-3 text-gray-500 hover:text-aahaar-green-600">
              <span className="mr-1">English</span> | <span className="ml-1 hindi-text">हिंदी</span>
            </button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aahaar-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block pl-3 pr-4 py-2 text-base font-medium border-l-4",
                  isActive(link.path)
                    ? "border-aahaar-green-500 text-aahaar-green-700 bg-aahaar-green-50"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full bg-gray-100 p-2" />
              </div>
              <div className="ml-3">
                <Link 
                  to="/login" 
                  className="block text-base font-medium text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
