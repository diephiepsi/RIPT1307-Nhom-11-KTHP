// src/components/layout/Header.tsx
import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="so-header">
      <div className="header-container">
        <div className="logo">
          UniBrain<span className="logo-thin">.com</span>
        </div>
        
        <div className="auth-buttons">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
    </header>
  );
};