import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          {/* Fallback routes */}
          <Route path="*" element={<div className="text-text-header font-bold p-10 font-outfit">Página em desenvolvimento...</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
