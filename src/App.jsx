import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Campaign from './pages/Campaign';
import Accounts from './pages/Accounts';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navigation isLoggedIn={isLoggedIn} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {isLoggedIn && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/campaign" element={<Campaign />} />
                <Route path="/accounts" element={<Accounts />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
