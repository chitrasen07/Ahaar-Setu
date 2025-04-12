
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Calendar, Clock, MapPin, Upload, Info, ArrowRight } from "lucide-react";
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const foodCategories = [
  "Cooked Meals",
  "Fresh Produce",
  "Baked Goods",
  "Packaged Food",
  "Beverages",
  "Grains & Rice",
  "Dairy Products",
  "Other",
];

const Donate = () => {
  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    description: "",
    expirationDate: "",
    expirationTime: "",
    address: "",
    notes: "",
    dedicateTo: "",
    isDedicated: false,
    agreedToTerms: false,
  });
  
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) return;
    
    const newImagePreviews: string[] = [];
    
    for (let i = 0; i < Math.min(files.length, 3); i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          newImagePreviews.push(event.target.result as string);
          if (newImagePreviews.length === Math.min(files.length, 3)) {
            setImagePreviews(newImagePreviews);
          }
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to the food safety guidelines to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Food listing created!",
        description: "Your food donation has been listed successfully.",
      });
      
      // Reset form
      setFormData({
        foodType: "",
        quantity: "",
        description: "",
        expirationDate: "",
        expirationTime: "",
        address: "",
        notes: "",
        dedicateTo: "",
        isDedicated: false,
        agreedToTerms: false,
      });
      setImagePreviews([]);
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Donate Food - Aahaar Setu</title>
        <meta name="description" content="List your surplus food for donation and help reduce food waste while feeding those in need." />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Donate Food</h1>
            <p className="mt-3 text-gray-600">
              Fill out the details below to list your surplus food for donation.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="foodType" className="block text-sm font-medium text-gray-700 mb-1">
                    Food Category *
                  </label>
                  <select
                    id="foodType"
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                  >
                    <option value="">Select a category</option>
                    {foodCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 5 kg, 10 portions, 3 boxes"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Food Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Describe the food items you're donating, any dietary information (vegetarian, contains nuts, etc.)"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Best Before Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="expirationTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="expirationTime"
                      name="expirationTime"
                      value={formData.expirationTime}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                    />
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Address *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter pickup location address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  This would integrate with Google Maps for address autocomplete in production
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photos of Food (Optional)
                </label>
                <div className="flex items-center">
                  <label className="cursor-pointer flex items-center justify-center bg-aahaar-orange-50 hover:bg-aahaar-orange-100 border border-dashed border-aahaar-orange-300 rounded-lg w-32 h-32 text-center transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                    <div className="flex flex-col items-center">
                      <Upload className="h-6 w-6 text-aahaar-orange-500" />
                      <span className="mt-2 text-sm text-gray-600">Upload</span>
                      <span className="text-xs text-gray-500">Max 3 photos</span>
                    </div>
                  </label>
                  
                  {imagePreviews.length > 0 && (
                    <div className="ml-4 flex space-x-2">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border">
                          <img
                            src={preview}
                            alt={`Food preview ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  placeholder="Any special instructions for pickup or handling"
                  value={formData.notes}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                />
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isDedicated"
                      name="isDedicated"
                      type="checkbox"
                      checked={formData.isDedicated}
                      onChange={handleChange}
                      className="h-4 w-4 text-aahaar-orange-500 focus:ring-aahaar-orange-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="isDedicated" className="text-sm font-medium text-gray-700">
                      Dedicate this donation
                    </label>
                    <p className="text-xs text-gray-500">
                      Make this donation in memory or honor of someone special
                    </p>
                  </div>
                </div>
                
                {formData.isDedicated && (
                  <div className="mt-3 pl-7">
                    <input
                      type="text"
                      id="dedicateTo"
                      name="dedicateTo"
                      placeholder="Name of person to dedicate to"
                      value={formData.dedicateTo}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-aahaar-orange-500 focus:border-aahaar-orange-500"
                    />
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreedToTerms"
                      name="agreedToTerms"
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-aahaar-orange-500 focus:ring-aahaar-orange-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="agreedToTerms" className="text-sm font-medium text-gray-700">
                      I confirm that this food is safe for consumption and complies with food safety guidelines
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      By checking this box, you confirm that the food is handled properly and is suitable for consumption. 
                      <a href="#" className="text-aahaar-orange-600 hover:underline ml-1">
                        View our food safety guidelines
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Preview Section */}
              {formData.foodType && formData.description && (
                <div className="border border-aahaar-green-200 rounded-lg p-4 bg-aahaar-green-50">
                  <h3 className="font-medium text-aahaar-green-800 flex items-center">
                    <Info className="h-5 w-5 mr-2" />
                    Donation Preview
                  </h3>
                  
                  <div className="mt-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-aahaar-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-aahaar-orange-500 font-bold">{formData.foodType.substring(0, 2)}</span>
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h4 className="font-medium">{formData.foodType}</h4>
                        <p className="text-sm text-gray-600">{formData.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formData.expirationDate || "Date TBD"}
                          </span>
                          <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                            <MapPin className="h-3 w-3 mr-1" />
                            {formData.address ? formData.address.substring(0, 20) + "..." : "Location TBD"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-secondary flex-1 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                  ) : null}
                  Submit Listing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="btn-outline flex-1"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Donate;
