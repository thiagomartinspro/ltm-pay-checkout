import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Integrations from './pages/Integrations';
import Webhooks from './pages/Webhooks';
import CheckoutSuccess from './pages/CheckoutSuccess';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="webhooks" element={<Webhooks />} />
          {/* Fallback routes */}

          <Route path="*" element={<div className="text-text-header font-bold p-10 font-outfit">Página em desenvolvimento...</div>} />
        </Route>
        {/* Fullscreen pages */}
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
