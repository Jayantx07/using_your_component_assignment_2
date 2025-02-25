import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import './likebutton.css';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { darkMode } = useTheme();
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <button 
      className={`like-button ${isLiked ? 'liked' : ''} ${darkMode ? 'dark' : 'light'}`} 
      onClick={toggleLike}
    >
      <svg 
        className="heart-icon" 
        viewBox="0 0 24 24"
        fill={isLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
      Like
    </button>
  );
};

export default LikeButton;