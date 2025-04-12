
import { useState, useEffect } from 'react';
import { MapPin, Navigation } from 'lucide-react';

// Mock data for food donation/request locations
const mockLocations = [
  { id: 1, name: "Green Cafe", type: "donor", lat: 12.9716, lng: 77.5946, items: ["Rice", "Bread", "Vegetables"] },
  { id: 2, name: "City Shelter", type: "recipient", lat: 12.9796, lng: 77.5906, needs: ["Any food items", "Ready to eat meals"] },
  { id: 3, name: "Family Restaurant", type: "donor", lat: 12.9756, lng: 77.6006, items: ["Cooked meals", "Fresh fruits"] },
  { id: 4, name: "Community Center", type: "recipient", lat: 12.9686, lng: 77.5976, needs: ["Non-perishable items", "Bottled water"] },
];

const MapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Food Map</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Find nearby food donation locations or places in need of food donations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-100 rounded-xl overflow-hidden relative min-h-[400px] shadow-md">
          {/* Map placeholder - this would be replaced with actual Google Maps integration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Navigation className="mx-auto h-12 w-12 mb-4" />
              <p>Interactive map would appear here (Google Maps API integration)</p>
              <p className="text-sm mt-2">Showing nearby donation & pickup locations</p>
            </div>
          </div>
          
          {/* Mock map pins */}
          {mockLocations.map(location => (
            <div 
              key={location.id}
              className={`absolute z-10 cursor-pointer transition-transform duration-300 ${selectedLocation === location.id ? 'scale-150' : 'hover:scale-125'}`}
              style={{ 
                top: `${50 + (location.lat - 12.9716) * 1000}%`,  
                left: `${50 + (location.lng - 77.5946) * 1000}%`,
                transform: 'translate(-50%, -50%)' 
              }}
              onClick={() => setSelectedLocation(location.id)}
            >
              <MapPin 
                className={
                  location.type === 'donor' 
                    ? 'text-aahaar-orange-500 filter drop-shadow-md' 
                    : 'text-aahaar-green-500 filter drop-shadow-md'
                } 
                fill={selectedLocation === location.id ? 'currentColor' : 'none'}
              />
              <span className="sr-only">{location.name}</span>
              
              {/* Pin pulse effect */}
              <span className="absolute inset-0 rounded-full bg-current opacity-30 animate-ping"></span>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Nearby Locations</h3>
          
          <div className="space-y-4">
            {mockLocations.map(location => (
              <div 
                key={location.id}
                className={`p-4 rounded-lg transition-all cursor-pointer ${
                  selectedLocation === location.id 
                    ? location.type === 'donor' 
                      ? 'bg-aahaar-orange-50 border-l-4 border-aahaar-orange-500'
                      : 'bg-aahaar-green-50 border-l-4 border-aahaar-green-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <div className="flex items-start">
                  <MapPin className={
                    location.type === 'donor' 
                      ? 'text-aahaar-orange-500 mr-3' 
                      : 'text-aahaar-green-500 mr-3'
                  } />
                  <div>
                    <h4 className="font-medium">{location.name}</h4>
                    <p className="text-sm text-gray-600">
                      {location.type === 'donor' ? 'Donating: ' : 'Needs: '}
                      {location.type === 'donor' 
                        ? location.items.join(', ')
                        : location.needs.join(', ')}
                    </p>
                    <div className="mt-2">
                      <button 
                        className={`text-sm font-medium ${
                          location.type === 'donor' 
                            ? 'text-aahaar-orange-600 hover:text-aahaar-orange-700' 
                            : 'text-aahaar-green-600 hover:text-aahaar-green-700'
                        }`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="w-full py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors text-sm font-medium">
              View All Locations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
