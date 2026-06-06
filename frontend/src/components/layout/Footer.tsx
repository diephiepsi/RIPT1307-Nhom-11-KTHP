import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="ub-footer">
      <div className="ub-container" style={{ padding: '12px 24px' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ color: '#334155', fontWeight: 600 }}>
            UniBrain © {new Date().getFullYear()} — Học viện Công nghệ Bưu chính Viễn thông
          </div>
          <div style={{ color: '#6b7280', fontSize: 13 }}>
            Liên hệ: contact@unibrain.example · Quyền riêng tư · Điều khoản
          </div>
        </div>
      </div>
    </footer>
  );
}
