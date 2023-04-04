import React, { createContext, useState, useContext, useEffect } from 'react';

export const DrawerContext = createContext();
export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [chartTypeIndex, setChartTypeIndex] = useState('Bar');
  const [comparisonEnabled, setComparisonEnabled] = useState(false) // used for comparison toggle
  const [comparedCountryData, setComparedCountryData] = useState([]);
  const [comparedCountry, setComparedCountry] = useState("");

  useEffect(() => {
    if (comparisonEnabled) {
        setChartTypeIndex('Line');
    };
  }, [comparisonEnabled]);

  return (
    <DrawerContext.Provider 
      value={{ 
        chartTypeIndex,
        setChartTypeIndex,
        comparisonEnabled,
        setComparisonEnabled,
        comparedCountryData,
        setComparedCountryData,
        comparedCountry,
        setComparedCountry
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
