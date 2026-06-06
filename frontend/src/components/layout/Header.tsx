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
          <button className="btn-login">Đăng nhập</button>
          <button className="btn-signup">Đăng ký</button>
        </div>
      </div>
    </header>
  );
};