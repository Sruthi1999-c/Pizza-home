import React, { createContext, useState, useContext } from 'react';

// Create Context
const LocationContext = createContext();

// Provider Component
export function LocationProvider({ children }) {
  const [location, setLocation] = useState('');
  const[click, setClick] = useState(false);


  return (
    <LocationContext.Provider value={{ location, setLocation, click, setClick}}>
      {children}
    </LocationContext.Provider>
  );
}

// Custom hook to use context
export function useLocationContext() {
  return useContext(LocationContext);
}
