import React, { createContext, useState,useEffect,useRef } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState('light');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

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
    <ThemeContext.Provider value={{ theme, toggleTheme,aboutRef, experienceRef, coursesRef, contactRef  }}>
      {children}
    </ThemeContext.Provider>
  );
};
