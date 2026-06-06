// src/components/layout/SidebarLeft.tsx
import React from 'react';
import './SidebarLeft.css';

export const SidebarLeft: React.FC = () => {
  return (
    <aside className="sidebar-left">
      <nav className="nav-menu">
        <div className="nav-item">Trang chủ</div>
        <div className="nav-heading">CÔNG KHAI</div>
        <div className="nav-item active">⚙️ Câu hỏi</div>
        <div className="nav-item pl-6">Thẻ</div>
        <div className="nav-item pl-6">Người dùng</div>
      </nav>
    </aside>
  );
};