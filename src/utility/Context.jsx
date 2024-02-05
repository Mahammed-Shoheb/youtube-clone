import { createContext, useContext, useState } from 'react';

const appContext = createContext();

export const AppContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <appContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
