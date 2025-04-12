
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-aahaar-green-500 to-aahaar-green-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Join Our Movement</h2>
          <p className="mt-4 text-lg text-aahaar-green-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on community events, impact stories, and tips to reduce food waste.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-4 pr-12 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {isSubmitting && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="h-5 w-5 border-t-2 border-aahaar-green-500 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-aahaar-green-700 px-6 rounded-r-lg hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-75"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Subscribe</span>
            </button>
          </form>
          <p className="text-xs text-aahaar-green-200 mt-2 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
