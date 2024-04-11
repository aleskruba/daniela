import React, { createContext, useState,useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
