import React, { createContext, useContext, useState } from 'react';

interface FoodDonation {
  id: string;
  foodType: string;
  foodTypeId: string;
  quantity: string;
  quantityUnit: string;
  expirationDate: string;
  expirationTime?: string;
  location: string;
  status: 'available' | 'claimed' | 'expired';
  nutritionTags: string[];
  photo?: File | null;
  description?: string;
  donor: string;
  claimedBy?: string;
  pickupDate?: string;
  pickupTime?: string;
  notes?: string;
  createdAt: string;
}

interface FoodContextType {
  donations: FoodDonation[];
  addDonation: (donation: Omit<FoodDonation, 'id' | 'status' | 'createdAt'>) => void;
  updateDonationStatus: (id: string, status: FoodDonation['status'], claimDetails?: { claimedBy: string; pickupDate: string; pickupTime: string }) => void;
  getAvailableDonations: () => FoodDonation[];
  getClaimedDonations: () => FoodDonation[];
  getRecentDonations: (limit?: number) => FoodDonation[];
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donations, setDonations] = useState<FoodDonation[]>([]);

  const addDonation = (donation: Omit<FoodDonation, 'id' | 'status' | 'createdAt'>) => {
    const newDonation: FoodDonation = {
      ...donation,
      id: Math.random().toString(36).substr(2, 9),
      status: 'available',
      createdAt: new Date().toISOString()
    };
    setDonations(prev => [...prev, newDonation]);
  };

  const updateDonationStatus = (
    id: string, 
    status: FoodDonation['status'],
    claimDetails?: { claimedBy: string; pickupDate: string; pickupTime: string }
  ) => {
    setDonations(prev => prev.map(donation => {
      if (donation.id === id) {
        return {
          ...donation,
          status,
          ...(claimDetails && {
            claimedBy: claimDetails.claimedBy,
            claimDate: new Date().toISOString(),
            pickupDate: claimDetails.pickupDate,
            pickupTime: claimDetails.pickupTime
          })
        };
      }
      return donation;
    }));
  };

  const getAvailableDonations = () => {
    return donations.filter(donation => donation.status === 'available');
  };

  const getClaimedDonations = () => {
    return donations.filter(donation => donation.status === 'claimed');
  };

  const getRecentDonations = (limit: number = 5) => {
    return [...donations]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  };

  return (
    <FoodContext.Provider value={{
      donations,
      addDonation,
      updateDonationStatus,
      getAvailableDonations,
      getClaimedDonations,
      getRecentDonations
    }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
}; 