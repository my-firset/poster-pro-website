import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

function Navigation({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📱 Poster Pro - ناشر برو
        </Link>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">الرئيسية</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">لوحة التحكم</Link>
              </li>
              <li className="nav-item">
                <Link to="/campaign" className="nav-link">حملة جديدة</Link>
              </li>
              <li className="nav-item">
                <Link to="/accounts" className="nav-link">الحسابات</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
