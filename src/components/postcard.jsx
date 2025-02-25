import React, { useState } from 'react';
import LikeButton from './LikeButton.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import './postcard.css';

const Postcard = ({ user }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`postcard ${darkMode ? 'dark' : 'light'}`}>
      <div className="postcard-header">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <h3 className="user-name">{user.name}</h3>
      </div>
      <p className="comment">{user.comment}</p>
      <LikeButton />
    </div>
  );
};

export default Postcard;