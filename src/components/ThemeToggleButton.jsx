// ThemeToggleButton.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;